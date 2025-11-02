import React from 'react'
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import { MdOutlinePhonePaused } from 'react-icons/md'
import Aos from 'aos'
import { useEffect } from 'react'
import  'aos/dist/aos.css'
const About = () => {
  useEffect(()=>{
    Aos.init({duration:1500})
    },[])
  return (
    <div >
        <div className='w-ful bg-[radial-gradient(circle_at_center,_#E6F5FB,_#FFF6EB)]



'>
        <div  className='grid grid-cols-1  lg:grid-cols-2 justify-center
gap-10 py-20  p-10 '>
            <div className='text-white text-center flex flex-col gap-4 '>
                <h2 className='text-4xl  capitalize py-6 font-[Imperial] text-[#0D3556]'>About Safi Seaside Tours</h2>
                <p className='text-sm font-outfit text-[#0680C5]'>Safi Seaside Tours was founded with a simple goal — to share the beauty, culture, and warmth of Nova Scotia’s coastline with travelers from around the world.
Based in Halifax, we offer private and small-group tours that blend comfort, local insight, and unforgettable scenery.

Led by Asif Safi, a multilingual guide with over 15 years of global tourism experience, each journey is crafted with care — from the famous Peggy’s Cove Lighthouse to the colorful charm of Lunenburg.
We believe travel is more than sightseeing — it’s about connection, stories, and memories that stay with you long after the journey ends. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo quae asperiores reiciendis laborum officia distinctio corrupti obcaecati placeat eos amet, aspernatur iusto nam voluptatem doloribus atque ipsum, nulla aut suscipit! Iusto, quis impedit, consectetur nesciunt exercitationem magnam est sunt fuga repellat ab quibusdam error nulla reprehenderit ad dolores aperiam?</p>
            </div>
            <div  className='flex justify-center items-center'>
            <div data-aos="fade-in" className='
 shadow p-3 rounded-md'>
                <img  className='w-[20rem]' src="https://i.pinimg.com/736x/9b/2c/2b/9b2c2bde15e1976cc3f034df2f74007e.jpg" alt="" />
            </div>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center  gap-10  py-20 px-14 '>
        <div className='flex justify-center items-center'>
            <div data-aos="fade-in" className='bg-gradient-to-br from-[#FFF6EB] to-[#E6F5FB]

 p-3 rounded-md'>
                <img className='w-[20rem]' src="https://i.pinimg.com/474x/4d/f8/fe/4df8fecda02b7dfa8de21ea94a3eba34.jpg" alt="" />
            </div>
            </div>
            <div className='text-black text-center flex flex-col gap-4 '>
                <h2 className='text-4xl  capitalize py-6 font-[Imperial]'>Our Promise to You</h2>
                <p className='text-sm font-outfit '>Our mission is to create authentic, scenic, and comfortable experiences that let travelers truly feel the spirit of Nova Scotia.
Every tour is personal — designed to go beyond the map, revealing local life, stories, and coastal treasures you won’t find in guidebooks.

At Safi Seaside Tours, we value hospitality, safety, and genuine connection.
Whether you’re exploring with family, friends, or on a solo adventure, we ensure every moment feels special — guided by warmth, laughter, and the rhythm of the sea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate a assumenda quae minus error porro deserunt laudantium vero architecto, tempore ab enim dolorem, consectetur illum optio. Sint repudiandae a quam?</p>
            </div>
           
        </div>
      </div>
  
    </div>
  )
}

export default About