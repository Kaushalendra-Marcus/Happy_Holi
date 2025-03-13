import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='fixed top-0 w-full z-50 text-white text-4xl font-bold'>
      <ul className='flex justify-center gap-20 mt-7'>  
        
        <li>
          <NavLink
            to='/'
            className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'
          >
            Home
          </NavLink>
        </li>

        
        <li>
          <NavLink
            to='/music'
            className='bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent'
          >
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
