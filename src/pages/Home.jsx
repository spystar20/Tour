import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { MdOutlinePhonePaused } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaStar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { GiFlowerPot } from "react-icons/gi";
import { PiSwimmingPool } from "react-icons/pi";
import { CiWifiOn } from "react-icons/ci";
import { PiTowelFill } from "react-icons/pi";
import { MdOutlineDinnerDining } from "react-icons/md";
import { useEffect } from 'react';
import Aos from 'aos'
import { Link } from 'react-router';

const Home = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (

    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container  opacity-70">
          <div className="embla__slide">   <div className="embla__slide_1"></div></div>
          <div className="embla__slide">   <div className="embla__slide_2"></div></div>
          <div className="embla__slide">   <div className="embla__slide_3"></div></div>
          <div className="embla__slide">   <div className="embla__slide_4"></div></div>
          <div className="embla__slide">   <div className="embla__slide_5"></div></div>
        </div>
      </div>

      <div className='absolute flex justify-center  items-center top-[7rem] md:top-[10.4rem] lg:top-[7.3rem]  w-[100vw] h-screen'>
        <div data-aos="fade-up" className='text-center flex-col items-center justify-center '>
          <h2 className='font-[Imperial]  md:text-4xl text-3xl  lg:text-6xl '>Discover Nova Scotia’s Seaside Magic</h2>
          <p className='lg:px-64 md:px-20 px-5 text-sm text-center'>Explore the beauty, history, and heart of Nova Scotia with Safi Seaside Tours — your trusted local guide for private and small-group adventures from Halifax. Whether you’re visiting Peggy’s Cove, strolling through Lunenburg, or crafting your own custom route, every journey is designed with care and authentic local hospitality.</p>
          <div className='flex justify-center items-center py-6 gap-5'>
            <Link to='/tour'><div><button className=' border-black  bg-[#0680C5]  uppercase font-[Antonio] text-white hover:bg-[#E5B982] px-6 py-3 rounded-xl'>Book Your Tour Today</button></div></Link>

          </div>
        </div>
      </div>
      {/* INTRO */}
      <div className='bg-[#0D3556] text-white p-10   md:p-20'>
        <div data-aos="fade-down" className='text-center py-20 '>
          <h2 className='text-[#FFF6EB] text-2xl uppercase font-outfit font-bold'>Welcome to Safi Seaside Tours</h2>
          <p className='text-gray-300 font-thin pt-4 lg:px-24 text-base'>Experience Nova Scotia like a local!
We specialize in creating warm, comfortable, and scenic tours that connect travelers to the province’s most breathtaking coastal landmarks. From the rugged cliffs and lighthouse of Peggy’s Cove to the charming streets of Lunenburg, every tour is filled with stories, photo moments, and seaside serenity.

Each trip is led by Asif Safi, a friendly, multilingual guide with more than 15 years of experience in global tourism. With Safi Seaside Tours, you’re not just visiting — you’re truly exploring.</p></div>
        <ul className='grid grid-cols-2 lg:grid-cols-4 justify-center polaroid  items-center gap-12'>
          <li data-aos="fade-up" data-aos-delay="100" className='shadow-lg shadow-[#0D3556]/20 border border-[#F9D3A6]/60 bg-[#E6F5FB]  flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-2xl'><img className='w-[32vw] lg:w-[15vw] rounded-lg' src="https://i.pinimg.com/474x/07/3a/c5/073ac59fb430a9323a23e6f7ca1b04d5.jpg" alt="" /></li>
          <li data-aos="fade-up" data-aos-delay="300" className='shadow-lg shadow-[#0D3556]/20 border border-[#F9D3A6]/60 bg-[#E6F5FB] flex justify-center items-start pt-6 w-[36vw] h-[36vh] lg:w-[18vw] lg:h-[56vh] rounded-2xl'><img className='w-[32vw] lg:w-[15vw] rounded-lg' src="https://i.pinimg.com/474x/e9/c3/e9/e9c3e97f220b7904266ad2ec07b7af01.jpg" alt="" /></li>
          <li data-aos="fade-up" data-aos-delay="600" className='shadow-lg shadow-[#0D3556]/20 border border-[#F9D3A6]/60 bg-[#E6F5FB] flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-2xl'><img className='w-[32vw] lg:w-[15vw] rounded-lg' src="https://i.pinimg.com/474x/42/c5/b8/42c5b82befba71e2cb14991815ceb08a.jpg" alt="" /></li>
          {/* <li data-aos="fade-up" data-aos-delay="600" className='bg-[#FFFFF0] flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-sm'><img className='w-[32vw] lg:w-[15vw]' src="https://i.pinimg.com/736x/d9/01/e4/d901e4f085ce51739c03c9198ec8b6b8.jpg" alt="" /></li> */}
          <li data-aos="fade-up" data-aos-delay="900" className='shadow-lg shadow-[#0D3556]/20 border border-[#F9D3A6]/60 bg-[#E6F5FB] flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-2xl'><img className='w-[32vw] lg:w-[15vw] rounded-lg' src="https://i.pinimg.com/474x/1e/35/bc/1e35bc86ba196781e928e48cdc85915f.jpg" alt='' /></li></ul>
      </div>

      {/* SERVICE */}
      <div className='p-10 md:p-20 flex flex-col items-center justify-center
       gap-10 bg-linear-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]
'>
  <div className='flex  flex-col gap-4 items-center justify-center'>
   <h2  className='text-white text-2xl uppercase font-outfit font-bold'>Our Most Loved Tours</h2>
   <p className='text-gray-300 text-lg '>Experience Nova Scotia’s breathtaking coastlines through our most loved tours.</p>
   </div>
<div className='grid md:grid-cols-2 gap-6 lg:grid-cols-4'>
<div className='flex flex-col bg-gradient-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]


 shadow-2xl rounded-2xl'>
<img className='rounded-2xl' src="https://i.pinimg.com/1200x/27/19/43/27194300fb304fe160df12583d4238d9.jpg" alt="" />
<div className='flex flex-col p-6'>
  <h6 className='text-2xl font-bold text-[#0D3556]'>Peggy’s Cove Tour</h6>
 <div className='flex justify-between  font-medium text-black text-xl'><div className='flex  gap-1 items-center'><span className='text-[#0D3556] font-bold'>$</span><span>160</span><span className='text-sm text-gray-300 '>starting</span></div><div className='flex gap-1 items-center'><FaStar className='text-blue-400'/><span >4.5</span></div></div>
</div>
</div>
<div className='flex flex-col bg-gradient-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]

 shadow-2xl rounded-2xl'>
<img className='rounded-2xl' src="https://i.pinimg.com/1200x/27/19/43/27194300fb304fe160df12583d4238d9.jpg" alt="" />
<div className='flex flex-col p-6'>
  <h6 className='text-2xl font-bold text-[#0D3556]'>Peggy’s Cove Tour</h6>
 <div className='flex justify-between  font-medium text-black text-xl'><div className='flex  gap-1 items-center'><span className='text-[#0D3556] font-bold'>$</span><span>160</span><span className='text-sm text-gray-300 '>starting</span></div><div className='flex gap-1 items-center'><FaStar className='text-blue-400'/><span >4.5</span></div></div>
</div>
</div>
<div className='flex flex-col bg-gradient-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]

 shadow-2xl rounded-2xl'>
<img className='rounded-2xl ' src="https://i.pinimg.com/1200x/27/19/43/27194300fb304fe160df12583d4238d9.jpg" alt="" />
<div className='flex flex-col p-6'>
  <h6 className='text-2xl font-bold text-[#0D3556]'>Peggy’s Cove Tour</h6>
 <div className='flex justify-between  font-medium text-black text-xl'><div className='flex  gap-1 items-center'><span className='text-[#0D3556] font-bold'>$</span><span>160</span><span className='text-sm text-gray-300 '>starting</span></div><div className='flex gap-1 items-center'><FaStar className='text-blue-400'/><span >4.5</span></div></div>
</div>
</div>
<div className='flex flex-col bg-gradient-to-br from-[#0D3556] via-[#0680C5] to-[#F9D3A6]

 shadow-2xl rounded-2xl'>
<img className='rounded-2xl' src="https://i.pinimg.com/1200x/27/19/43/27194300fb304fe160df12583d4238d9.jpg" alt="" />
<div className='flex flex-col p-6'>
  <h6 className='text-2xl font-bold text-[#0D3556]'>Peggy’s Cove Tour</h6>
 <div className='flex justify-between  font-medium text-black text-xl'><div className='flex  gap-1 items-center'><span className='text-[#0D3556] font-bold'>$</span><span>160</span><span className='text-sm text-gray-300 '>starting</span></div><div className='flex gap-1 items-center'><FaStar className='text-blue-400'/><span >4.5</span></div></div>
</div>
</div>
</div>
<Link  to='/tour'><div className='py-6'><button className=' border-black  bg-[#0680C5]  uppercase font-bold text-white hover:bg-[#E5B982] px-8 py-4 rounded-xl'>Explore More</button></div></Link>
      </div>
      {/* offer-SECTION */}
      <div className='bg-[#0D3556] py-9'>
        <h1   className='text-white text-2xl uppercase font-outfit font-bold py-4 text-center' >Why Choose Safi Seaside Tours</h1>
        <div className='grid grid-cols-1 px-6 gap-3 md:gap-0 md:px-0 md:grid-cols-3 py-10 justify-center items-center '>
          
  <div className='group '>
    <span className='group-hover:flex hidden text-[#FFFFF0] group-hover:absolute justify-center items-center h-1/2  w-1/3'><div className=' text-center '><h1 className='text-3xl font-outfit'>15+</h1><h1 className='text-xl font-outfit italic capitalize'>Years of Experience</h1></div></span>
        <img className='hover:opacity-40 rounded-none hover:rounded-xl opacity-100' src="https://i.pinimg.com/474x/3a/b4/83/3ab483136d2f1257b72e615d49e3e37b.jpg" alt="" /></div>
       <div className='group'>
       <span className='group-hover:flex hidden  group-hover:absolute justify-center items-center h-1/2  w-1/3'><div className='text-white text-center '><h1 className='text-3xl font-outfit'>95%</h1><h1 className='text-xl font-outfit italic capitalize'>Guest Satisfaction</h1></div></span>
        <img className='hover:opacity-40 rounded-none hover:rounded-xl opacity-100' src="https://i.pinimg.com/474x/e2/61/8a/e2618a60187ab3d44aa97f7c4bff1eee.jpg" alt="" /></div>
       <div className='group'>
       <span className='group-hover:flex hidden  group-hover:absolute justify-center items-center h-1/2  w-1/3'><div className='text-white text-center '><h1 className='text-3xl font-outfit'>1000 +</h1><h1 className='text-xl font-outfit italic capitalize'>Private Tours Completed</h1></div></span>
        <img className='hover:opacity-40 rounded-none hover:rounded-xl opacity-100' src="https://i.pinimg.com/474x/53/a9/37/53a937cdf862da224a40f7c2cab72f75.jpg" alt="" />
       </div>
        </div>
        </div>

      {/* ABOUT-SECTION */}

      <div className='bg-[#E6F5FB]  py-8 px-6 lg:px-20'>
        <div  >
          <h2 className='text-center text-[#0D3556]  font-bold text-3xl underline md:text-4xl uppercase py-6'>about us</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 py-5 gap-8 lg:gap-14 items-center justify-center'>
            <div data-aos="fade-in" className='text-center flex flex-col gap-6 '>
              <h2 className='text-2xl font-medium font-[Imperial] md:text-4xl text-[#0680C5] '>Guiding unforgettable seaside journeys across Nova Scotia — with comfort, care, and local heart.</h2>
         <p class="text-[#333333] max-w-2xl">
  Safi Seaside Tours creates private, scenic journeys through Nova Scotia’s iconic coastlines. 
  Founded by <span class="font-semibold text-[#0D3556]">Asif Safi</span>, we bring 15+ years of experience, local warmth, 
  and authentic seaside hospitality to every tour.
</p>
              <Link to="/about"> <div><button data-aos="zoom-out" className=' border-black border-2 text-xl uppercase hover:bg-black hover:text-[#FFFFF0] font-[Antonio] text-black px-3 py-2 rounded-xl'>discover more</button></div></Link>
            </div>
    
            <div className='flex justify-center items-center'> <img data-aos="fade-in" className='rounded-t-full w-[19rem]   outline-black outline-2 outline  outline-offset-8' src="https://i.pinimg.com/474x/b0/db/97/b0db97aa653821549856f7444b9d8c65.jpg" alt="" /></div>
          </div>
        </div>

      </div>




 
    </div>
  )
}

export default Home