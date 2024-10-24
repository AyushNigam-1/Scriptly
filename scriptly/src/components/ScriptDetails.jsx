import React from 'react'

const ScriptDetails = () => {
    return (
        <div className='col-span-2 sticky top-6 h-min bg-white rounded-md p-4 gap-3 flex flex-col shadow-md' >
            <div className='flex gap-1 flex-col'>
                <h4 className='text-md text-gray-600 font-medium flex items-center gap-1' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    Author </h4>
                <span className='flex items-center gap-2' >
                    {/* <img className="w-8 h-8 rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" /> */}
                    <p className='text-lg font-semibold text-gray-800' >Ayush Nigam</p>
                </span>
            </div>
            <hr />
            <div className='flex gap-1 flex-col'>
                <h4 className='text-md text-gray-600 font-medium flex items-center gap-1' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                    </svg>
                    Language
                </h4>
                <span className='flex items-center gap-2' >
                    {/* <img className="w-8 h-8 rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" /> */}
                    <p className='text-lg font-semibold text-gray-800' >English</p>
                </span>
            </div>
            <hr />
            <div className='flex gap-1 flex-col'>
                <h4 className='text-md text-gray-600 font-medium flex items-center gap-1' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                    Contributors
                    {/* <span className='bg-indigo-500 rounded-full p-1 px-2.5 text-white text-sm' > 2
                                </span>  */}
                </h4>
                <span className='flex items-center gap-2' >
                    {/* <img className="w-8 h-8 rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" /> */}
                    <p className='text-lg font-semibold text-gray-800' > Ayush Nigam</p>
                </span>
            </div>
            <hr />
            <div className='flex gap-2 flex-col'>
                <h4 className='text-md text-gray-600 font-medium flex items-center gap-1' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                    Genres
                </h4>
                <div className='flex gap-3 flex-wrap' >
                    {
                        [
                            { genre: 'Horror', bg: 'bg-red-100', color: 'text-red-800' },
                            { genre: 'Action', bg: 'bg-blue-100', color: 'text-blue-800' },
                            { genre: 'Comedy', bg: 'bg-yellow-100', color: 'text-yellow-800' },
                            { genre: 'Drama', bg: 'bg-green-100', color: 'text-green-800' },
                            { genre: 'Sci-Fi', bg: 'bg-purple-100', color: 'text-purple-800' },
                            { genre: 'Fantasy', bg: 'bg-indigo-100', color: 'text-indigo-800' },
                            { genre: 'Thriller', bg: 'bg-orange-100', color: 'text-orange-800' },
                            { genre: 'Romance', bg: 'bg-pink-100', color: 'text-pink-800' },
                            { genre: 'Mystery', bg: 'bg-gray-100', color: 'text-gray-800' },
                            { genre: 'Animation', bg: 'bg-teal-100', color: 'text-teal-800' }
                        ].map(({ genre, bg, color }) => {
                            return <p className='text-lg font-semibold text-gray-800 py-1 px-2 bg-gray-100 rounded-full' > # {genre}  </p>
                            // <span className={`flex items-center gap-3 text-sm rounded-full`} >
                            //     {/* <img className="w-8 h-8 rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" /> */}
                            //     <p className='text-lg   p-1' >{genre}</p>
                            // </span>
                        })
                    }
                </div>
            </div>
            <hr />
            <div className='flex flex-col gap-4'>
                <h4 className='text-md text-gray-600 font-medium flex items-center gap-1' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Recent Contributions
                </h4>
                <div className='flex flex-col gap-3' >
                    {Array(4).fill(0).map(() => {
                        return <span className='flex justify-between bg-gray-100  gap-2 p-2 rounded-lg' >
                            <div className='flex gap-2 items-center' >
                                <div className='flex flex-col gap-1'>
                                    <div className='flex gap-2 items-center' >
                                        <img className="w-6 h-6 rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="Rounded avatar" />
                                        <p className='font-semibold text-lg text-gray-800' >Ayush Nigam</p>
                                        <a href="#123" className='underline'>#{Math.floor(Math.random() * 20) + 1}</a>
                                    </div>
                                </div>
                            </div>
                            <span className='text-xs self-end ' >
                                23 Min Ago
                            </span>
                        </span>
                    })}
                    <Link to="/contributions" className='flex gap-2 items-center justify-center bg-indigo-500 text-white text-md px-3 py-2 rounded-md' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        See All Contributions
                    </Link>
                    <button onClick={handleContributeClick} className='flex gap-2 items-center justify-center bg-indigo-500 text-white text-md px-3 py-2 rounded-md' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h6>Contribute</h6>
                    </button>
                    <button className='flex gap-2 items-center justify-center bg-indigo-500 text-white text-md  px-3 py-2  rounded-md' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        <h6>Zen Mode</h6>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ScriptDetails