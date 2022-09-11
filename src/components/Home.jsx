import React, { useEffect, useState } from 'react'
import getAllCharacter,{getAllPages} from '../functions/functions'
import NavBar from './NavBar'

function Home() {
    const [page,updatePage]=useState(1)
    const [characters, updateCharacters] = useState()
    const [allPages,updateAllPages]=useState(1)
    useEffect(() => {
        getAllCharacter(updateCharacters)
        getAllPages(updateAllPages)
    }, [])
    console.log(allPages)
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex content-between justify-between">                
                <button className="bg-indigo-400 rounded-md p-2 m-5" onClick={()=>{
                    getAllCharacter(updateCharacters,page,updatePage,false)
                }}>BACK {page==1?console.log('nada'):page-1}</button>
                <button className="bg-indigo-400 rounded-md p-2 m-5" onClick={()=>{
                    if(page!=allPages){
                        getAllCharacter(updateCharacters,page,updatePage,true)
                    }
                }}>NEXT {page}</button>
            </div>
            <div className='md:grid grid-cols-3 gap-4 place-items-center m-10'>
                {characters == null ? console.log('no hay nada aun') : characters.map((e) => {
                    return (
                        <div className='bg-slate-800 p-3 rounded-md m-5 md:m-3 '>                          
                            <div key={e.id} className="bg-slate-900 container__character grid grid-cols-1 place-items-center ">                                
                                <img src={e.image} className="duration-100 " />
                                <a href={`/character/${e.id}`} className='bg-neutral-50 rounded-md cursor-pointer m-3 p-2'>VER MAS</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home