import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacterById } from '../functions/functions'
import { withRouter } from 'react-dom/client';
import NavBar from './NavBar'

function Character() {
    const params = useParams()
    const [character, updateCharacter] = useState()
    useEffect(() => {
        getCharacterById(params.id, updateCharacter)
    }, [])
    return (      
        <div className="bg-slate-900 grid place-items-center min-h-screen">
            <div className=" my-5  text-white rounded-lg border border-gray-200 shadow-md  prose   lg:prose-xl grid grid-cols-1 md:grid md:grid-cols-2 place-items-center ">
                {character == null ? console.log('error') :
                    <>
                        <div>
                            <img src={character.image} className="rounded-md px-10" />
                        </div>
                        <div className="grid grid-cols-1">
                            <h1 className="text-green-300  md:m-0 md:mr-3 md:mb-0  md:text-left lg:mb-0 lg:mt-0 lg:pb-5 ">{character.name}</h1>
                            <div className="grid grid-cols-1 text-left">
                                <span className="text-stone-400 text-base">Status:</span>
                                <span className="text-green-300">{character.status}</span>
                                <span className="text-stone-400 text-base">Location:</span>
                                <span className="text-green-300">{character.location.name}</span>
                                <span className="text-stone-400 text-base">Specie:</span>
                                <span className="text-green-300">{character.species}</span>
                            </div>
                        </div>
                        <div className='pb-6'>
                            <a className="bg-green-500 rounded-md mb-4 p-2 no-underline text-slate-900" href={`/`}>VOLVER</a>
                        </div>
                    </>}
            </div>
        </div>   
    )
}

export default Character