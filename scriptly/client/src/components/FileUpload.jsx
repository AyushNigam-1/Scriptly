import React from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown';
import useAutoScroll from "../hooks/useAutoScroll";


const FileUpload = ({ diffResult, handleDrop, handleFileChange }) => {
    const containerRef = useAutoScroll([diffResult]);

    return (
        <div className="rounded-lg h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full" ref={containerRef} >
            {diffResult ? <div className="flex flex-col gap-2" > <div className="bg-white rounded-lg overflow-y-auto "
            > {diffResult.map(res => {
                return (
                    <div className={`${res.added ? 'bg-green-50 border-green-300  border-2 ' : res.removed ? 'bg-orange-50 border-orange-300 border-2 ' : ''}  rounded-lg flex flex-col gap-1 text-gray-800   p-3`}>
                        {res.added ? <span className=" text-green-600  rounded-lg  flex gap-1  items-center" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                            You Added </span> : res.removed ? <span className="border-orange-300 text-orange-600 rounded-lg   flex gap-1 items-center" > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>

                                Missing </span> : ''}
                        <div className="text-lg" >
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    ul: ({ children }) => <ul className="list-disc ml-5">{children}</ul>
                                }}
                            >
                                {res.value}
                            </ReactMarkdown>

                        </div>
                    </div>
                )
            })}</div>

            </div> : <div
                className="flex flex-col h-full items-center justify-center p-6 border-2 border-dashed text-gray-500 border-gray-300 rounded cursor-pointer"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>

                <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                    id="fileInput"
                />
                <label htmlFor="fileInput" className=" cursor-pointer">
                    Drag files here or <span className="text-blue-500 underline" >Click To Upload</span>
                </label>
            </div>}

        </div >
    );
};

export default FileUpload;
