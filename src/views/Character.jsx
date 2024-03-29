import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import actions from '../actions/characters'
import { connect } from 'react-redux'
import character from '../selectors/characterSelector'
import characters from '../selectors/charactersSelector'

function Character({ characters, single, getCharacter }) {
    const params = useParams()
    const [character, setCharacter] = useState()
    useEffect(() => {
        const element = document.getElementById('navbar')
        element?.scrollIntoView()        
        if (characters?.results) {
            setCharacter(characters?.results?.filter((character) => character.id == params.id))
        }
        else {
            getCharacter(params.id)
        }
        if(!params.page) {

        }
    }, [])
    if (!characters?.results) {
        return (
            <>
                <NavBar></NavBar>                
                <div className="bg-slate-900 grid place-items-center min-h-screen">
                <div className=" my-5  text-white rounded-lg  prose  lg:prose-xl grid grid-cols-1 md:grid md:grid-cols-2 place-items-center ">                
                        <>
                            <div>
                                <img src={single?.image} className="px-10" alt={single?.name} />
                            </div>
                            <div className="grid grid-cols-1">
                                <h1 className="text-green-300  md:m-0 md:mr-3 md:mb-1 m-3 md:text-left lg:mb-0 lg:mt-0 lg:pb-5 text-center ">{single?.name}</h1>
                                <div className="grid grid-cols-1 text-left place-items-start gap-1 ml-1">
                                    <span className="text-stone-400 text-base ">Status:</span>
                                    <span className="text-green-300">{single?.status}</span>
                                    <span className="text-stone-400 text-base">Location:</span>
                                    <span className="text-green-300">{single?.location?.name}</span>
                                    <span className="text-stone-400 text-base">Specie:</span>
                                    <span className="text-green-300">{single?.species}</span>
                                </div>
                            </div>
                            <div className='pb-6 mt-5'>
                                <Link className="bg-green-500 rounded-md mb-4 p-2 no-underline text-slate-900" to={`/`}>BACK</Link>
                            </div>
                        </>
                </div>
            </div>
            </>
        )
    }
    if (!character) {
        return (
            <>
                <NavBar></NavBar>
                <div role="status" className='h-screen flex flex-col justify-center pb-32 items-center justify-items-center bg-slate-900'>
                    <svg aria-hidden="true" className="mr-2 w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </>
        )
    }
    return (
        <>
            <NavBar></NavBar>
            <div className="bg-slate-900 grid place-items-center min-h-screen">
                <div className=" my-5  text-white rounded-lg  prose  lg:prose-xl grid grid-cols-1 md:grid md:grid-cols-2 place-items-center ">
                    {character === null ? '' :
                        <>
                            <div>
                                <img src={character[0]?.image} className="px-10" alt={character[0]?.name} />
                            </div>
                            <div className="grid grid-cols-1">
                                <h1 className="text-green-300  md:m-0 md:mr-3 md:mb-1 m-3 md:text-left lg:mb-0 lg:mt-0 lg:pb-5 text-center ">{character[0]?.name}</h1>
                                <div className="grid grid-cols-1 text-left place-items-start gap-1 ml-1">
                                    <span className="text-stone-400 text-base ">Status:</span>
                                    <span className="text-green-300">{character[0]?.status}</span>
                                    <span className="text-stone-400 text-base">Location:</span>
                                    <span className="text-green-300">{character[0]?.location?.name}</span>
                                    <span className="text-stone-400 text-base">Specie:</span>
                                    <span className="text-green-300">{character[0]?.species}</span>
                                </div>
                            </div>
                            <div className='pb-6 mt-5'>
                                <Link className="bg-green-500 rounded-md mb-4 p-2 no-underline text-slate-900" to={`/`}>BACK</Link>
                            </div>
                        </>}

                </div>
            </div>
        </>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        getCharacter: (id) => dispatch(actions.getCharacter(id)),
    }
}

const mapStateToProps = state => {
    return {
        characters: characters(state),
        single: character(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character)