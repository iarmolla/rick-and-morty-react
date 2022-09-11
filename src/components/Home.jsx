import React, { useEffect, useState } from 'react'
import getAllCharacter, { getAllPages } from '../functions/functions'
import NavBar from './NavBar'

function Home() {
    const [page, updatePage] = useState(1)
    const [characters, updateCharacters] = useState()
    const [allPages, updateAllPages] = useState(1)
    useEffect(() => {
        getAllCharacter(updateCharacters)
        getAllPages(updateAllPages)
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <div className='md:grid grid-cols-3 gap-4 place-items-center m-10 transition-all'>
                {characters == null ? console.log('no hay nada aun') : characters.map((e) => {
                    return (
                        <div className='bg-slate-800 p-3 rounded-md m-5 md:m-3 '>
                            <div key={e.id} className="bg-slate-900 container__character grid grid-cols-1 place-items-center ">
                                <img src={e.image} className="duration-100 " />
                                <a href={`/character/${e.id}`} className='border-2 border-green-500/100 bg-white duration-300 hover:bg-green-500/100 rounded-md cursor-pointer m-3 p-2'>More</a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-between  content-center place-items-center">
                <div>
                    <h2 className="p-5">
                        Showing {page} to {allPages}
                    </h2>
                </div>
                <div className="transition-all ">
                    <button className="border-2 border-indigo-500/100 rounded-md p-2 m-5 border-double hover:bg-indigo-400 duration-300" onClick={() => {
                        getAllCharacter(updateCharacters, page, updatePage, false)
                    }}>Previous {page == 1 ? console.log('nada') : page - 1}</button>
                    <button className="border-2 border-indigo-500/100  rounded-md p-2 m-5 hover:bg-indigo-400 duration-300" onClick={() => {
                        if (page != allPages) {
                            getAllCharacter(updateCharacters, page, updatePage, true)
                        }
                    }}>Next {page}</button>
                </div>
            </div>           
        </div>
    )
}

export default Home