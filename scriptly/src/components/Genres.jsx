import React from 'react'
const Genres = () => {
    const genres = [
        { name: "Fantasy", color: "bg-purple-100", textColor: "text-purple-600" },
        { name: "Science Fiction", color: "bg-blue-100", textColor: "text-blue-600" },
        { name: "Mystery", color: "bg-gray-100", textColor: "text-gray-600" },
        { name: "Thriller", color: "bg-red-100", textColor: "text-red-600" },
        { name: "Romance", color: "bg-pink-100", textColor: "text-pink-600" },
        { name: "Horror", color: "bg-indigo-100", textColor: "text-indigo-600" },
        { name: "Historical Fiction", color: "bg-yellow-100", textColor: "text-yellow-600" },
        { name: "Non-fiction", color: "bg-green-100", textColor: "text-green-600" },
        { name: "Biography", color: "bg-teal-100", textColor: "text-teal-600" },
        { name: "Self-help", color: "bg-orange-100", textColor: "text-orange-600" },
        { name: "Graphic Novel", color: "bg-cyan-100", textColor: "text-cyan-600" },
        { name: "Young Adult", color: "bg-rose-100", textColor: "text-rose-600" },
        { name: "Children's Literature", color: "bg-lime-100", textColor: "text-lime-600" },
        { name: "Dystopian", color: "bg-amber-100", textColor: "text-amber-600" },
        { name: "Adventure", color: "bg-sky-100", textColor: "text-sky-600" },
        { name: "Classics", color: "bg-emerald-100", textColor: "text-emerald-600" },
        { name: "Poetry", color: "bg-fuchsia-100", textColor: "text-fuchsia-600" },
        { name: "Crime", color: "bg-slate-100", textColor: "text-slate-600" },
        { name: "Memoir", color: "bg-violet-100", textColor: "text-violet-600" },
        { name: "Philosophy", color: "bg-stone-100", textColor: "text-stone-600" }
    ];



    return (
        <>
            <div className='flex gap-2 overflow-visible m-4' >
                {
                    genres.map((e) => {
                        return (
                            <button className={`bg-white ${e.textColor} flex gap-1 items-center bg p-2 font-bold text-nowrap rounded-md shadow-sm`} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                            </svg>
                                {e.name} </button>
                        )
                    })
                }
            </div >
        </>
    )
}

export default Genres