import React from 'react'

function NavBar() {
  return (
    <header className="min-w-full w-screen bg-slate-800">
        <div className="flex flex-row  ">
            <a className="text-4xl tracking-tight text-left font-extrabold text-white p-4" href="/">RICK AND MORTY API</a>
          <div className='flex justify-center items-center'>
              <a className="text-white pr-5" href='/episodes'>Episodes</a>
          </div>
        </div>
    </header>
  )
}

export default NavBar