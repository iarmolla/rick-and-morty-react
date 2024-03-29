import React, { memo } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className="min-w-full bg-slate-800" id="navbar">
      <div className="flex flex-row">
        <Link className="text-4xl tracking-tight text-left font-extrabold text-white p-4  animate-pulse" to={"/"}>RICK AND MORTY API</Link>
        <div className='flex justify-center items-center'>
          <Link className="text-white pr-5 animate-pulse" to={'/episodes'}>Episodes</Link>
        </div>
      </div>      
    </header>
  )
}

export default memo(NavBar)