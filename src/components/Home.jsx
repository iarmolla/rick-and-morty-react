import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import getAllCharacter, { getAllPages } from '../functions/functions'
import NavBar from './NavBar'

function Home() {
    const [page, updatePage] = useState(1)
    const [characters, updateCharacters] = useState(null)
    const [allPages, updateAllPages] = useState(1)
    const navBar = useRef(null)
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef?.current?.offsetTop
        })
    }
    useEffect(() => {
        getAllPages(updateAllPages)
        setTimeout(() => { getAllCharacter(updateCharacters) }, 1000)
    }, [])

    return (
        <div className='bg-gray-900'>
            <NavBar navBar={navBar}></NavBar>
            <div className={`${characters == null ? 'hidden' : 'md:grid grid-cols-3 gap-4 place-items-center m-10 transition-all'}`}>
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
            {characters == null ? <div role="status" className='h-screen flex flex-col justify-center pb-32 items-center justify-items-center'>
                <svg aria-hidden="true" className="mr-2 w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div> : <div className="flex justify-between  content-center place-items-center text-white">
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
            </div>}
        </div>

    )
}

export default Home