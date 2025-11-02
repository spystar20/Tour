
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
 const [openMenu,setOpenMenu]=useState(false)
  const handleMenu = ()=>{
    setOpenMenu(!openMenu)
  }
  return (
    <div>
      <nav className="w-full bg-[#0D3556] text-white flex justify-between items-center px-8 py-8 shadow-md">

  <div className="text-[#F9D3A6] font-semibold text-xl tracking-wide">
    Safi Seaside Tours
  </div>


  <ul className="hidden md:flex space-x-8 text-lg font-medium">
   <Link to='/'><li class="hover:text-[#F9D3A6] cursor-pointer">Home</li> </Link>
   <Link to='/about'><li class="hover:text-[#F9D3A6] cursor-pointer">About Us</li></Link>
   <Link to='/tour'><li class="hover:text-[#F9D3A6] cursor-pointer">Tours</li></Link>
  <Link to='/gallery'  ><li class="hover:text-[#F9D3A6] cursor-pointer">Gallery</li></Link>
 
  </ul>

   <Link to='/contact'> 
  <button className="bg-[#0680C5] hover:bg-[#F9D3A6] hover:text-[#0D3556] text-white md:px-5 px-2 md:py-1  md:py-2 rounded-full transition-all duration-200">
    Book Now
  </button></Link>
  <div onClick={handleMenu} className=' md:hidden'><BiMenu className='text-lg'/></div>
  { openMenu || (
      <ul className="md:hidden absolute top-[5rem] z-[999999] left-0 rounded-3xl  flex flex-col items-center justify-center bg-[#0D3556] w-full gap-6 py-5 text-lg font-medium">
   <Link to='/'><li class="hover:text-[#F9D3A6] cursor-pointer" onClick={handleMenu}>Home</li> </Link>
   <Link to='/about'><li class="hover:text-[#F9D3A6] cursor-pointer"  onClick={handleMenu}>About Us</li></Link>
   <Link to='/tour'><li class="hover:text-[#F9D3A6] cursor-pointer"  onClick={handleMenu}>Tours</li></Link>
  <Link to='/gallery'  ><li class="hover:text-[#F9D3A6] cursor-pointer"  onClick={handleMenu}>Gallery</li></Link>
 
  </ul>
  )}
</nav>

    </div>
  )
}

export default Navbar
