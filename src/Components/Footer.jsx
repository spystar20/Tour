import React from 'react'

const Footer = () => {
  return (
   <footer class="bg-[#0D3556] text-[#E6F5FB] py-12">
  <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
    
 
    <div>
      <h2 class="text-2xl font-bold text-[#F9D3A6] mb-3">Safi Seaside Tours</h2>
      <p class="text-sm opacity-90 leading-relaxed">
        Guiding unforgettable journeys across Nova Scotia’s coast — 
        with comfort, care, and local heart. 
      </p>
      <div class="flex space-x-4 mt-4">
        <a href="#" class="hover:text-[#F9D3A6] transition-colors"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" class="hover:text-[#F9D3A6] transition-colors"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="hover:text-[#F9D3A6] transition-colors"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    </div>


    <div>
      <h3 class="text-lg font-semibold text-[#F9D3A6] mb-3">Quick Links</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-[#F9D3A6] transition-colors">Home</a></li>
        <li><a href="#" class="hover:text-[#F9D3A6] transition-colors">About Us</a></li>
        <li><a href="#" class="hover:text-[#F9D3A6] transition-colors">Tours</a></li>
        <li><a href="#" class="hover:text-[#F9D3A6] transition-colors">Gallery</a></li>
        <li><a href="#" class="hover:text-[#F9D3A6] transition-colors">Contact</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="text-lg font-semibold text-[#F9D3A6] mb-3">Contact Us</h3>
      <ul class="text-sm space-y-2">
        <li>📍 Halifax, Nova Scotia</li>
        <li>📞 +1 (902) 402-7263</li>
        <li>✉️ info@safiseasidetours.ca</li>
      </ul>
      <button class="mt-5 bg-[#0680C5] text-white px-5 py-2 rounded-full hover:bg-[#F9D3A6] hover:text-[#0D3556] transition-all">
        Book a Tour
      </button>
    </div>
  </div>

 
  <div class="border-t border-[#0680C5]/30 mt-10 pt-6 text-center text-xs text-[#E6F5FB]/80">
    © 2025 created by <a href="https://github.com/spystar20" className='text-white font-semibold'>SANTOSHI</a> . All rights reserved.
  </div>
</footer>

  )
}

export default Footer