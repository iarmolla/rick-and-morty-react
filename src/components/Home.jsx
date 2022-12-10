import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import getAllCharacter, { getAllPages } from '../functions/functions'
import NavBar from './NavBar'

function Home() {
    const [page, updatePage] = useState(1)
    const [characters, updateCharacters] = useState()
    const [allPages, updateAllPages] = useState(1)
    const navBar = useRef(null)
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef?.current?.offsetTop,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        getAllCharacter(updateCharacters)
        getAllPages(updateAllPages)
    }, [])
    return (
        <div className='dark:bg-gray-900'>
            <NavBar navBar={navBar}></NavBar>
            <div className='md:grid grid-cols-3 gap-4 place-items-center m-10 transition-all '>
                {characters == null ? '' : characters.map((e) => {
                    return (
                        <div key={e.id} className='border-2 border-indigo-500/100 p-3 rounded-md m-5 md:m-3 '>
                            <div className="bg-slate-900 container__character grid grid-cols-1 place-items-center ">
                                <img src={e.image} className="duration-100 " />
                                <Link to={`/character/${e.id}`} className='border-2 text-white border-indigo-500/100  hover:bg-indigo-500/100 rounded-md cursor-pointer m-3 p-2'>More</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-between  content-center place-items-center text-white">
                <div>
                    <h2 className="p-5">
                        Showing {page} to {allPages}
                    </h2>
                </div>
                <div className="transition-all text-white">
                    <button className="border-2 border-indigo-500/100 rounded-md p-2 m-5 border-double hover:bg-indigo-400 duration-300 w-32 md:w-60 " onClick={() => {
                        getAllCharacter(updateCharacters, page, updatePage, false)
                        scrollToSection(navBar)
                    }}>Previous</button>
                    <button className="border-2 border-indigo-500/100  rounded-md p-2 m-5 hover:bg-indigo-400 duration-300 w-32 md:w-60" onClick={() => {
                        if (page != allPages) {
                            getAllCharacter(updateCharacters, page, updatePage, true)
                            scrollToSection(navBar)
                        }
                    }}>Next</button>
                </div>
            </div>
        </div>

    )
}

export default Home