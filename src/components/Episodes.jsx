import React, { useState, useEffect } from 'react'
import { getAllEpisodes,getAllPagesEpisodes } from '../functions/functions'
import NavBar from './NavBar'

function Episodes() {
    const [episodes, updateEpisodes] = useState()
    const [allPages,updateAllPages]=useState()
    const [page,updatePage]=useState(1)
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
                            episodes == null ? console.log('nothing') : episodes.map((e) => {
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
                <div className="flex justify-between mx-5">
                    <button className="p-3 m-5 bg-indigo-400 rounded-md" >back</button>
                    <button className="p-3 m-5 bg-indigo-400 rounded-md" onClick={()=>{
                        getAllEpisodes(updateEpisodes,page,true)
                    }}>next</button>
                </div>
            </div>
        </div>
    )
}

export default Episodes