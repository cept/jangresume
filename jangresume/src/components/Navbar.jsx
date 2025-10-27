import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-4 lg:px-24 xl:px-40 py-4 sticky top-0 z-99 backdrop-blur-xl font-medium bg-white/60'>
      <a href="" className='hover:scale-105'><span className='text-2xl text-primary font-bold'>Jangresume</span></a>
      <div className='flex gap-5 text-gray-600'>
        <Link to="/" className='hover:text-primary transition-all'>Home</Link>
        <Link to="/dashboard" className='hover:text-primary transition-all'>Dashboard</Link>
        <Link to="/templates" className='hover:text-primary transition-all'>Templates</Link>
      </div>
      <div className='flex items-center gap-2'>
        <img src={assets.menu_icon} alt="menu icon" className="w-8" />
        <a href="" className='flex items-center gap-2 text-sm bg-primary text-secondary px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'>Connect <img src={assets.arrow_icon} alt="" width={14} /></a>
      </div>
    </nav>
  )
}

export default Navbar
