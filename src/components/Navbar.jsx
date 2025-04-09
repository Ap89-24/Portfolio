import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <header className="flex justify-between mt-4">
    <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold  ml-8 shadow-[0_10px_25px_rgba(0,2,0,0.35)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.45)] transition-shadow duration-300 ease-in-out">
     <p className="text-blue-500">AH</p>
    </NavLink>
    <nav className="flex text-lg gap-20 font-medium mr-10">
     <NavLink to="/about" className={({isActive})=> isActive ? "text-blue-500" : 'text-black'}>
      About
     </NavLink>

     <NavLink to="/projects" className={({isActive})=> isActive ? "text-blue-500" : 'text-black'}>
      Projects
     </NavLink>
    </nav>
   </header>
  )
}

export default Navbar
