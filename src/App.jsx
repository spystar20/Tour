import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Menu from './pages/Tour';
import Home from './pages/Home'; 
import Venue from './pages/Gallery'; 
import Contact from './pages/Contact';
import About from './pages/About';

import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './Components/Footer';


const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <BrowserRouter>

      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Menu />} />
          <Route path="/gallery" element={<Venue />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
       
        </Routes>
        <Footer/>
      </div>

    </BrowserRouter>
  );
};

export default App;