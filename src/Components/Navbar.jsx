
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
  <button className="bg-[#0680C5] hover:bg-[#F9D3A6] hover:text-[#0D3556] text-white px-5 py-2 rounded-full transition-all duration-200">
    Book Now
  </button></Link>
</nav>

    </div>
  )
}

export default Navbar
