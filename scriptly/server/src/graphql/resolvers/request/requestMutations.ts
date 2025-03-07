import mongoose from "mongoose";
import Script from "../../../models/Script";
import User from "../../../models/User";
import { GraphQLError } from "graphql";

export const requestMutations = {
    createRequest: async (_: any, { scriptId, text }: any, context: { user: { id: string } }) => {
        if (!context.user) {
            throw new Error("Unauthorized");
        }

        const author = new mongoose.Types.ObjectId(context.user.id);

        const script = await Script.findById(scriptId);
        if (!script) {
            throw new Error("Script not found");
        }

        const newRequest = {
            _id: new mongoose.Types.ObjectId(),
            author,
            status: "pending",  // Default status
            likes: 0,
            dislikes: 0,
            comments: [],
            text,
        };

        script.requests.push(newRequest);
        await script.save();
        await User.findByIdAndUpdate(author, { $push: { contributions: newRequest._id } });
        const populatedRequest = await Script.findById(scriptId)
            .select('requests')
            .populate('requests.author'); // This will populate the author field of the new request

        // Find the newly added request within the populated requests array
        const populatedNewRequest = populatedRequest?.requests.find(request => request._id.toString() === newRequest._id.toString());

        return populatedNewRequest;
    },
    acceptRequest: async (_: any, { scriptId, requestId }: { scriptId: string; requestId: string }) => {
        const requestObjectId = new mongoose.Types.ObjectId(requestId);

        // Find the script and extract the request
        const script = await Script.findOne({ _id: scriptId, "requests._id": requestObjectId });

        if (!script) {
            throw new GraphQLError("Script or Request not found");
        }

        const request = script.requests.find(req => req._id.equals(requestObjectId));

        if (!request) {
            throw new GraphQLError("Request not found");
        }

        // Manually append request text to combinedText
        const updatedCombinedText = script.combinedText ? `${script.combinedText}\n${request.text}` : request.text;

        // Update script: Add paragraph, update combinedText, and accept request
        await Script.findByIdAndUpdate(
            scriptId,
            {
                $push: {
                    paragraphs: {
                        text: request.text,
                        author: request.author,
                        likes: request.likes,
                        dislikes: request.dislikes,
                        comments: request.comments
                    }
                },
                $set: {
                    "requests.$[accepted].status": "accepted",
                    combinedText: updatedCombinedText
                }
            },
            {
                arrayFilters: [{ "accepted._id": requestObjectId }],
                new: true
            }
        );

        // Decline all other pending requests
        await Script.findByIdAndUpdate(
            scriptId,
            {
                $set: { "requests.$[declined].status": "declined" }
            },
            {
                arrayFilters: [{ "declined.status": "pending", "declined._id": { $ne: requestObjectId } }],
                new: true
            }
        );

        // Return the updated script with populated fields
        const updatedScript = await Script.findById(scriptId)
            .populate("requests.author")
            .populate("requests.comments.author")
            .populate("paragraphs.author")
            .populate("paragraphs.comments.author")
            .populate("author");

        return updatedScript;
    }

}