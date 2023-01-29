import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import actions from '../actions/characters'
import { connect } from 'react-redux'
import charactersSelector from '../selectors/charactersSelector'
import pageSelector from '../selectors/pageSelector'
import { motion, AnimatePresence } from "framer-motion";

function Home({ getCharacters, characters, pages, updatePages, orderByName, orderByGender, search }) {
    const [page, updatePage] = useState(1)
    const [dropdown, setDropDown] = useState(false)
    const [state, updateState] = useState(false)
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getCharacters(pages.pages)
    }, [page])

    useEffect(() => { }, [state])
    if (characters === "not found") {
        return (
            <>
                <NavBar></NavBar>
                <div className='bg-gray-900' id="container">
                    <div className="flex">
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown" onChange={(e) => setQuery(e.target.value)} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Evil Morty..." />
                            <button type="submit" onClick={() => search(query)} className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                    <div role="status" className='h-screen flex flex-col justify-center pb-32 items-center justify-items-center'>
                        <p className='text-white text-2xl'>Not found</p>
                    </div>
                </div>
            </>
        )
    }
    if (!characters?.results) {
        return (
            <>
                <NavBar></NavBar>
                <div className='bg-gray-900' id="container">
                    <div role="status" className='h-screen flex flex-col justify-center pb-32 items-center justify-items-center'>
                        <svg aria-hidden="true" className="mr-2 w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='bg-gray-900' id="container">
            <NavBar></NavBar>
           <div>
             <div className="flex">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" onKeyDown={(e)=> {
                        if(e.key == 'Enter' && query !== '') {
                            search(query)
                        }
                    }} onChange={(e) => setQuery(e.target.value)} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Evil Morty..." />
                    <button type="submit" onClick={() => search(query)} className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
            <div className={`${characters === null ? 'hidden' : 'md:grid grid-cols-3 gap-4 place-items-center m-10 transition-all relative'}`}>
                <div className="absolute -top-6  -left-10">
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        id="dropdownDefaultButton" onClick={() => {
                            setDropDown(!dropdown)
                        }} data-dropdown-toggle="dropdown" class="text-white ml-3 focus:outline-none font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center" type="button">Order by<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></motion.button>
                    <div id="dropdown" class={`z-50 rounded-lg ${!dropdown ? 'hidden' : ''}`}>
                        <ul class="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <motion.span whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }} class="block px-4 py-2" onClick={() => {
                                        orderByName()
                                        updateState(!state)
                                    }}>Name</motion.span>
                            </li>
                            <li>
                                <motion.span whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }} class="block px-4 py-2" onClick={() => {
                                        orderByGender()
                                        updateState(!state)
                                    }}>Gender</motion.span>
                            </li>
                        </ul>
                    </div>
                </div>
                {characters?.results == null ? '' : characters?.results?.map((e) => {
                    return (
                        <div key={e.id} className='p-3 rounded-md m-5 md:m-3 '>
                            <AnimatePresence>
                                <motion.div layout className="container__character grid grid-cols-1 place-items-center ">
                                    <p className='text-white py-2 font-semibold'>{e.name}</p>
                                    <img src={e.image} className="duration-100 sm:px-24 md:p-0 transition-all hover:transition-all hover:animate-pulse cursor-pointer" onClick={() => {
                                        navigate(`page/${page}/character/${e.id}`)
                                    }} alt={e.name} />
                                    <Link to={`page/${page}/character/${e.id}`} className=' text-white transition-all hover:bg-green-600/100 rounded-md cursor-pointer m-3 p-2 hover:animate-pulse hover:transition-all '>More</Link>
                                </motion.div>
                            </AnimatePresence>

                        </div>

                    )
                })}
            </div>
            {
                characters == null ? <div role="status" className='h-screen flex flex-col justify-center pb-32 items-center justify-items-center'>
                    <svg aria-hidden="true" className="mr-2 w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div> : <div className="flex justify-between  content-center place-items-center text-white">
                    <div>
                        <h2 className="p-5">
                            Showing {pages.pages} to {42}
                        </h2>
                    </div>
                    <div className="transition-all text-white">
                        <button className="border-2 border-green-500/100  rounded-md p-2 m-5 border-double hover:bg-green-600 duration-300 w-32 md:w-60 " onClick={() => {
                            if (pages?.pages > 1) {
                                updatePage(page - 1)
                                updatePages(pages.pages - 1)
                                setTimeout(() => {
                                    const element = document.getElementById('navbar')
                                    element?.scrollIntoView()
                                }, 300)
                            }
                        }}>Previous</button>
                        <button className="border-2 border-green-500/100  rounded-md p-2 m-5 hover:bg-green-600 duration-300 w-32 md:w-60" onClick={() => {
                            if (pages?.pages < 42) {
                                updatePage(page + 1)
                                updatePages(pages.pages + 1)
                                setTimeout(() => {
                                    const element = document.getElementById('navbar')
                                    element?.scrollIntoView()
                                }, 300)
                            }
                        }}>Next</button>
                    </div>
                </div>
            }
           </div>
        </div >

    )
}

const mapDispatchToProps = dispatch => {
    return {
        getCharacters: (page) => dispatch(actions.getCharacters(page)),
        updatePages: (page) => dispatch(actions.updatePage(page)),
        orderByName: () => dispatch(actions.orderCharacterByName()),
        orderByGender: () => dispatch(actions.orderByGender()),
        search: (query) => dispatch(actions.searchByName(query))

    }
}
const mapStateToProps = state => {
    return {
        characters: charactersSelector(state),
        pages: pageSelector(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
