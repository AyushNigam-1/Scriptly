import React, { useState } from 'react'
import Search from '../../components/Search'
import Filters from '../../components/Filters'
import { createAvatar } from '@dicebear/core';
import { glass } from '@dicebear/collection';
import RequestsSidebar from '../../components/RequestsSidebar';

const Requests = ({ data, setRequest, request }) => {
    console.log(data.getScriptById, request)


    return (
        // <></>
        <div className='flex flex-col gap-3 '>

            <div className='grid grid-cols-12 gap-3 h-full flex-grow' >
                <RequestsSidebar requests={data.getScriptById.requests} setRequest={setRequest} request={request} />
                <div className='col-span-9  rounded-lg  flex flex-col gap-3 overflow-auto' >
                    {data.getScriptById.paragraphs.map(para => {
                        return <div className='bg-white rounded-lg p-2 text-lg' > {para.text}</div>
                    })}
                    <div className='flex flex-col p-2 gap-1 bg-gray-200/50 rounded-lg border-indigo-300 border-2'  >
                        <div class="flex justify-between rounded-full items-center">
                            <div className='flex gap-2 '>
                                <img class="rounded-full w-10" src="https://www.fufa.co.ug/wp-content/themes/FUFA/assets/images/profile.jpg" alt="Bonnie image" />
                                <p className='text-lg text-gray-600' >
                                    {request?.author.username}
                                </p>
                            </div>
                            {/* <p className='text-lg text-gray-600' >{formatFancyDate(request.createdAt)}</p> */}
                        </div>
                        <div className='word-spacing-1 flex flex-col relative gap-1  bg-white rounded-lg p-4'>
                            <div className='  text-md text-gray-800' >
                                <p className='text-xl font-mulish'>
                                    {request.text}
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* <div className='bg-gray-200/50 rounded-lg p-2 text-lg border-indigo-300 border-2' >
                        {request?.text}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Requests