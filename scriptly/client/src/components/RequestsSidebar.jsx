import React, { useEffect, useState } from 'react'
import { ACCEPT_REQUEST } from '../graphql/mutation/scriptMutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
const RequestsSidebar = ({ requests, setRequest, request, scriptId, refetch, setTab }) => {
    const nav = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRequests, setFilteredRequests] = useState(requests);
    const [acceptRequest, { loading }] = useMutation(ACCEPT_REQUEST);
    const [reqId, setReqId] = useState()

    const handleAcceptRequest = async (requestId) => {
        setReqId(requestId)
        try {
            const { data } = await acceptRequest({
                variables: { scriptId, requestId },
            });
            await refetch()
            setTab("Script")
            nav(`/paragraphs/${scriptId}#${requestId}`)

            console.log("Request accepted successfully:", data);
        } catch (err) {
            console.error("Error accepting request:", err);
            return null;
        }
    };


    useEffect(() => {
        setFilteredRequests(
            requests.filter(req =>
                req.author.username.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, requests]);

    function formatFancyDate(timestamp) {
        const date = new Date(Number(timestamp));
        return date.toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric"
        }) + ` , ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
    }
    return (
        <div className='col-span-3 bg-gray-200/50 p-2 rounded-xl flex flex-col gap-3  ' >
            <div className="flex gap-2 text-gray-400 rounded-lg bg-white focus:ring-2 focus:ring-indigo-300 p-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10A7 7 0 1 1 3 10a7 7 0 0 1 14 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search by author..."
                    className="text-lg bg-transparent rounded-lg w-full focus:outline-none "
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div id='requests-sidebar' className='flex flex-col gap-3 overflow-auto scrollbar-none h-full' >
                {filteredRequests.length ? filteredRequests.map((req, index) => {
                    return <div key={index} className={`bg-white rounded-lg p-2 flex justify-between items-center w-full cursor-pointer ${request?._id == req?._id ? 'border-indigo-300 border-2' : ''}`} onClick={() => setRequest(req)}  >
                        <div className='flex gap-2'>
                            <img className="w-12 rounded-md" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" />
                            <div className='flex flex-col gap-1'  >
                                <h6 className='font-bold text-gray-800 text-lg text-start' >
                                    {req.author.username} {request?._id === req?._id}
                                </h6>
                                <p className='text-sm text-gray-600' >
                                    {formatFancyDate(req.createdAt)}
                                </p>
                            </div>
                        </div>
                        <button className='bg-gray-200/50 rounded-lg p-2 text-gray-600 ' onClick={() => {
                            handleAcceptRequest(req._id)
                        }} >
                            {reqId == req._id && loading ?
                                <svg aria-hidden="true" class="size-6 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>}
                        </button>
                    </div>
                }) : <h6 className='text-center text-gray-600 font-semibold text-lg' >No requests available</h6>}
            </div>

        </div>
    )
}

export default RequestsSidebar