import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({navBar}) {
  return (
    <header ref={navBar} className="min-w-full bg-slate-800">
        <div className="flex flex-row  ">
            <Link className="text-4xl tracking-tight text-left font-extrabold text-white p-4" to={"/"}>RICK AND MORTY API</Link>
          <div className='flex justify-center items-center'>
              <Link className="text-white pr-5" to={'/episodes'}>Episodes</Link>
          </div>
        </div>
    </header>
  )
}

export default NavBar