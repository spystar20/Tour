import React from 'react';
// import { Parallax } from 'react-parallax';
import { FaInstagram, FaFacebook, FaSquareXTwitter, FaStar } from 'react-icons/fa6';



const Menu = () => {

  return (
    <div className=" bg-linear-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6] min-h-screen">
    
      <div   style={{
    backgroundImage: "url('https://i.pinimg.com/736x/9f/52/e3/9f52e35ca16bb0632f4af2523e0f463f.jpg')",  backgroundSize: "cover",
  backgroundPosition: "center",
  }}
 className='text-center flex justify-center items-center flex-col text-white h-[29vh] md:h-[46vh] lg:h-[60vh] lg:py-20
'>
{/*  
<h2 className='md:text-5xl text-4xl font-semibold font-antonio text-[#F9D3A6]'>
Explore Tours</h2> */}
</div>
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif capitalize text-gray-800">Our Tours</h2>
          <p className="mt-4 text-gray-300 text-lg">Discover Nova Scotia’s beauty with our handpicked seaside experiences.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className='flex flex-col gap-3  bg-gradient-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]
shadow-2xl rounded-2xl pb-5'>
<img className='rounded-2xl' src="https://i.pinimg.com/1200x/27/19/43/27194300fb304fe160df12583d4238d9.jpg" alt="" />
<div className='flex flex-col p-6 gap-3'>
  <h6 className='text-2xl font-bold text-[#0D3556]'>Peggy’s Cove Tour</h6>
  <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, mollitia quia. Placeat minus reiciendis dolorem?</p>
 <div className='flex justify-between  font-medium text-black text-xl'><div className='flex  gap-1 items-center'><span className='text-[#0D3556] font-bold'>$</span><span>160</span><span className='text-sm text-gray-300 '>starting</span></div><div className='flex gap-1 items-center'><FaStar className='text-blue-400'/><span >4.5</span></div></div>
</div>
<Link to='/contact'><div className='flex justify-center items-center' ><button className='flex items-center justify-center border-black  bg-[#0680C5]  uppercase font-bold text-white hover:bg-[#E5B982] px-8 py-3 rounded-xl'>Book Now</button></div></Link>
</div>
        <div className='flex flex-col gap-3  bg-gradient-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]
shadow-2xl rounded-2xl pb-5'>
<img className='rounded-2xl' src="https://i.pinimg.com/1200x/27/19/43/27194300fb304fe160df12583d4238d9.jpg" alt="" />
<div className='flex flex-col p-6 gap-3'>
  <h6 className='text-2xl font-bold text-[#0D3556]'>Peggy’s Cove Tour</h6>
  <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, mollitia quia. Placeat minus reiciendis dolorem?</p>
 <div className='flex justify-between  font-medium text-black text-xl'><div className='flex  gap-1 items-center'><span className='text-[#0D3556] font-bold'>$</span><span>160</span><span className='text-sm text-gray-300 '>starting</span></div><div className='flex gap-1 items-center'><FaStar className='text-blue-400'/><span >4.5</span></div></div>
</div>
<Link to='/contact'><div className='flex justify-center items-center' ><button className='flex items-center justify-center border-black  bg-[#0680C5]  uppercase font-bold text-white hover:bg-[#E5B982] px-8 py-3 rounded-xl'>Book Now</button></div></Link>
</div>
        <div className='flex flex-col gap-3  bg-gradient-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]
shadow-2xl rounded-2xl pb-5'>
<img className='rounded-2xl' src="https://i.pinimg.com/1200x/27/19/43/27194300fb304fe160df12583d4238d9.jpg" alt="" />
<div className='flex flex-col p-6 gap-3'>
  <h6 className='text-2xl font-bold text-[#0D3556]'>Peggy’s Cove Tour</h6>
  <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, mollitia quia. Placeat minus reiciendis dolorem?</p>
 <div className='flex justify-between  font-medium text-black text-xl'><div className='flex  gap-1 items-center'><span className='text-[#0D3556] font-bold'>$</span><span>160</span><span className='text-sm text-gray-300 '>starting</span></div><div className='flex gap-1 items-center'><FaStar className='text-blue-400'/><span >4.5</span></div></div>
</div>
<Link to='/contact'><div className='flex justify-center items-center' ><button className='flex items-center justify-center border-black  bg-[#0680C5]  uppercase font-bold text-white hover:bg-[#E5B982] px-8 py-3 rounded-xl'>Book Now</button></div></Link>
</div>
        <div className='flex flex-col gap-3  bg-gradient-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]
shadow-2xl rounded-2xl pb-5'>
<img className='rounded-2xl' src="https://i.pinimg.com/1200x/27/19/43/27194300fb304fe160df12583d4238d9.jpg" alt="" />
<div className='flex flex-col p-6 gap-3'>
  <h6 className='text-2xl font-bold text-[#0D3556]'>Peggy’s Cove Tour</h6>
  <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, mollitia quia. Placeat minus reiciendis dolorem?</p>
 <div className='flex justify-between  font-medium text-black text-xl'><div className='flex  gap-1 items-center'><span className='text-[#0D3556] font-bold'>$</span><span>160</span><span className='text-sm text-gray-300 '>starting</span></div><div className='flex gap-1 items-center'><FaStar className='text-blue-400'/><span >4.5</span></div></div>
</div>
<Link to='/contact'><div className='flex justify-center items-center' ><button className='flex items-center justify-center border-black  bg-[#0680C5]  uppercase font-bold text-white hover:bg-[#E5B982] px-8 py-3 rounded-xl'>Book Now</button></div></Link>
</div>
        <div className='flex flex-col gap-3  bg-gradient-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]
shadow-2xl rounded-2xl pb-5'>
<img className='rounded-2xl' src="https://i.pinimg.com/1200x/27/19/43/27194300fb304fe160df12583d4238d9.jpg" alt="" />
<div className='flex flex-col p-6 gap-3'>
  <h6 className='text-2xl font-bold text-[#0D3556]'>Peggy’s Cove Tour</h6>
  <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, mollitia quia. Placeat minus reiciendis dolorem?</p>
 <div className='flex justify-between  font-medium text-black text-xl'><div className='flex  gap-1 items-center'><span className='text-[#0D3556] font-bold'>$</span><span>160</span><span className='text-sm text-gray-300 '>starting</span></div><div className='flex gap-1 items-center'><FaStar className='text-blue-400'/><span >4.5</span></div></div>
</div>
<Link to='/contact'><div className='flex justify-center items-center' ><button className='flex items-center justify-center border-black  bg-[#0680C5]  uppercase font-bold text-white hover:bg-[#E5B982] px-8 py-3 rounded-xl'>Book Now</button></div></Link>
</div>
        <div className='flex flex-col gap-3  bg-gradient-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]
shadow-2xl rounded-2xl pb-5'>
<img className='rounded-2xl' src="https://i.pinimg.com/1200x/27/19/43/27194300fb304fe160df12583d4238d9.jpg" alt="" />
<div className='flex flex-col p-6 gap-3'>
  <h6 className='text-2xl font-bold text-[#0D3556]'>Peggy’s Cove Tour</h6>
  <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, mollitia quia. Placeat minus reiciendis dolorem?</p>
 <div className='flex justify-between  font-medium text-black text-xl'><div className='flex  gap-1 items-center'><span className='text-[#0D3556] font-bold'>$</span><span>160</span><span className='text-sm text-gray-300 '>starting</span></div><div className='flex gap-1 items-center'><FaStar className='text-blue-400'/><span >4.5</span></div></div>
</div>
<Link to='/contact'><div className='flex justify-center items-center' ><button className='flex items-center justify-center border-black  bg-[#0680C5]  uppercase font-bold text-white hover:bg-[#E5B982] px-8 py-3 rounded-xl'>Book Now</button></div></Link>
</div>
        </div>
      </div>

 
    </div>
  );
};

export default Menu;