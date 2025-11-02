import React from 'react'
// import { Parallax } from 'react-parallax'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdOutlinePhonePaused } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';


const Contact = () => {
  return (
    <div className='bg-[radial-gradient(circle_at_center,_#0680C5,_#0D3556)]  w-full'>
      
        <div   style={{
    backgroundImage: "url('https://i.pinimg.com/736x/9e/c5/31/9ec5317475799f89d25129eb1e3b1203.jpg')",  backgroundSize: "cover",
  backgroundPosition: "center",
  }}
 className='text-center flex justify-center items-center flex-col text-white h-[29vh] md:h-[46vh] lg:h-[60vh] lg:py-20
'>
 
<h2 className='md:text-5xl text-4xl font-semibold font-antonio text-[#F9D3A6]'>
Contact Us</h2>
</div>
        
        {/* contact */}
        <div className=' py-10 px-5 md:py-20 lg:px-10'>
            <div className='grid grid-cols-1  gap-9 md:gap-14 lg:gap-5 lg:grid-cols-2 py-6 '>
            <div className='flex flex-col md:gap-10 lg:pt-24 justify-center items-center gap-6'>    
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5'>
            <div className='flex flex-col py-8 px-16  bg-[#0680C5] rounded-2xl cursor-pointer  hover:-translate-y-3 transition-all text-[#fffff0] justify-center items-center gap-2 '>
            <FaPhoneAlt className='text-4xl text-center'/>
            <h1 className='font-outfit text-lg font-semibold capitalize'>phone</h1>
            <p className='font-outfit font-thin '>+91xxxxxxx67</p>
            </div>
            <div className='flex flex-col py-8 px-16 justify-centercursor-pointer hover:-translate-y-3 transition-all  bg-[#0680C5] rounded-2xl text-[#fffff0] items-center gap-2 '>
            <IoLogoWhatsapp className='text-4xl  text-center'/>
            <h1 className='font-outfit text-lg capitalize'>whatsapp</h1>
            <p className='font-outfit font-thin '>+91xxxxxxx67</p>
            </div>
        
            <div className='flex flex-col justify-center py-8 cursor-pointer  px-16  hover:-translate-y-3 transition-all  bg-[#0680C5] rounded-2xl text-[#fffff0] items-center gap-2 '>
            <MdEmail className='text-4xl text-center'/>
            <h1 className='font-outfit text-lg capitalize'>E-mail</h1>
            <p className='font-outfit font-thin '>khushisantoshi21@gmail.com</p>
            </div>
            <div className='flex flex-col justify-center py-8 px-16 cursor-pointer hover:-translate-y-3 transition-all  bg-[#0680C5] rounded-2xl text-[#fffff0] items-center gap-2 '>
            <MdTableRestaurant className='text-4xl text-center'/>
            <h1 className='font-outfit text-lg capitalize'>location</h1>
            <p className='font-outfit font-thin '>delhi</p>
        
            </div>
        </div>
        <div>
            <img className='w-[40rem] rounded-2xl shadow ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tiNOO4g8aA0JWZgzNiVFgXXBuoEzQBHdxQ&s" alt="" />
        </div>        
        </div>
        {/* get in touch */}
        <div className='flex flex-col md:px-12 gap-6'>
            <div className='text-black text-left flex flex-col gap-6 '>
            <h2 className='text-6xl font-bold font-antonio capitalize text-[#F9D3A6]'>Get in touch </h2>
            <p className='font-outfit font-thin text-[#F9D3A6]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maiores dolorem repellat</p>
            </div>
            <div className='text-lg capitalize   font-outfit text-[#F9D3A6] flex fl-1 flex-col gap-4'>
                <div className='flex flex-col justify-start items-start gap-2 '>
                    <h1>name</h1>
                    <input type="text" className='border px-3 py-2 placeholder:font-thin border-[#F9D3A6] outline-none rounded-lg bg-transparent' placeholder='your name here...'/>
                </div>
                <div className='flex flex-col justify-start items-start gap-2'>
                    <h1>email</h1>
                    <input type="text" className='border px-3 py-2 placeholder:font-thin border-[#F9D3A6] outline-none rounded-lg bg-transparent' placeholder='Example@yourmail.com...'/>
                </div>
                <div className='flex flex-col justify-start items-start gap-2'>
                    <h1>message</h1>
                    <textarea name="" className='border px-3 py-2 placeholder:font-thin border-[#F9D3A6] outline-none rounded-lg bg-transparent ' placeholder='Type..' id="" cols="30" rows="4"></textarea>
            </div>
            <div><button className=' border-[#F9D3A6] border  bg-transparent hover:bg-[#F9D3A6] hover:text-black text-xl capitalize text-[#F9D3A6] px-3 py-2 rounded-xl ' >send now</button></div>
            </div>
        </div>
        </div>
        </div>
            {/* footer */}
  
    </div>
  )
}

export default Contact