import React, { useState, useEffect } from 'react'
import { getAllEpisodes, getAllPagesEpisodes } from '../functions/functions'
import NavBar from './NavBar'

function Episodes() {
    const [episodes, updateEpisodes] = useState(null)
    const [allPages, updateAllPages] = useState()
    const [page, updatePage] = useState(1)
    const [keyEpisode, updateKey] = useState()
    useEffect(() => {
        setTimeout(() => {
            getAllEpisodes(updateEpisodes)
            getAllPagesEpisodes(updateAllPages, updateKey)
        }, 1000)
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            {
                episodes === null ? <>
                    <div role="status" className='bg-gray-900 h-screen pb-32 flex flex-col justify-center items-center justify-items-center'>
                        <svg aria-hidden="true" className="mr-2 w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </> : <>
                    <table className="w-full h-screen text-sm text-left text-gray-500 dark:text-gray-400" id="table">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="py-3 px-6 ">
                                    DATE
                                </th>
                                <th className="py-3 px-6">
                                    NAME
                                </th>
                                <th className="py-3 px-6">
                                    EPISODE
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                episodes === null ? <></> : episodes.map((e, index) => {
                                    return (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs">
                                            <th scope="row" className="sm:py-4 sm:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {e.air_date}
                                            </th>
                                            <td>
                                                {e.name}
                                            </td>
                                            <td>
                                                {e.episode}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="flex justify-between  content-center place-items-center dark:bg-gray-800 text-white ">
                        <div>
                            <h2 className="p-5">
                                Showing {page} to {allPages}
                            </h2>
                        </div>
                        <div className="transition-all  ">
                            <button className="border-2 border-indigo-500/100 rounded-md p-2 m-5 border-double hover:bg-indigo-400 duration-300 w-32 md:w-60" onClick={() => {
                                getAllEpisodes(updateEpisodes, page, updatePage, false)
                                const element = document.getElementById('table')
                                element?.scrollIntoView()
                            }}>Previous</button>
                            <button className="border-2 border-indigo-500/100  rounded-md p-2 m-5 hover:bg-indigo-400 duration-300 w-32 md:w-60" onClick={() => {
                                if (page < allPages) {
                                    const element = document.getElementById('table')
                                    element?.scrollIntoView()
                                    getAllEpisodes(updateEpisodes, page, updatePage, true)
                                }
                            }}>Next</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Episodes