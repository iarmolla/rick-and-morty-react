import React, { useState, useEffect } from 'react'
import { getAllEpisodes, getAllPagesEpisodes } from '../functions/functions'
import NavBar from './NavBar'

function Episodes() {
    const [episodes, updateEpisodes] = useState()
    const [allPages, updateAllPages] = useState()
    const [page, updatePage] = useState(1)
    useEffect(() => {
        getAllEpisodes(updateEpisodes)
        getAllPagesEpisodes(updateAllPages)

    }, [])
    return (
        <div className="">
            <NavBar></NavBar>
            <div className="">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="py-3 px-6">
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
                            episodes == null ? '' : episodes.map((e) => {
                                return <>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {e.air_date}
                                        </th>
                                        <td className="py-4 px-6">
                                            {e.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            {e.episode}
                                        </td>
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                </table>
                <div className="flex justify-between  content-center place-items-center dark:bg-gray-800 text-white w-screen">
                    <div>
                        <h2 className="p-5">
                            Showing {page} to {allPages}
                        </h2>
                    </div>
                    <div className="transition-all  ">
                        <button className="border-2 border-indigo-500/100 rounded-md p-2 m-5 border-double hover:bg-indigo-400 duration-300 w-32 md:w-60" onClick={() => {
                            getAllEpisodes(updateEpisodes, page, updatePage, false)
                        }}>Previous {page - 1}</button>
                        <button className="border-2 border-indigo-500/100  rounded-md p-2 m-5 hover:bg-indigo-400 duration-300 w-32 md:w-60" onClick={() => {
                            if (page < allPages) {
                                getAllEpisodes(updateEpisodes, page, updatePage, true)
                            }
                        }}>Next {page}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episodes