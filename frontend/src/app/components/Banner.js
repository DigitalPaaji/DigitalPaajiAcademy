'use client';
import React, { useState } from 'react';
import Popup from './Popup';
import Image from 'next/image';
import New from './New';

function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    // console.log("Popup khul rahi hai...");
    setIsOpen(true);
  };
  const closeMenu = () => {
    // console.log("Popup bnd ho gyi h...");
    setIsOpen(false);
  };

  return (
    <div className='w-full h-auto relative '>
      <div
        className="relative w-full min-h-screen bg-cover flex items-center justify-center " 
        style={{ 
          backgroundImage: "url('/Images/bg.webp')", 
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Full-Screen Image */}
        <Image 
          src="/Images/banner.webp" 
          alt="Banner Image" 
          layout="fill"   
          objectFit="contain"  
          quality={100}  
          className="hidden lg:block absolute top-0 left-0"
        />

        <Image 
          src="/Images/responsive.webp" 
          alt="Banner Image" 
          layout="fill"   
          objectFit="contain"  
          quality={100}  
          className="block lg:hidden absolute top-0 left-0 cursor-pointer"
        />
<New openMenu={openMenu} />
        {/* Enroll Now Button */}
        {/* <button className="absolute top-32 right-8 px-6 py-3 text-white bg-[#163393]  text-lg font-bold rounded-2xl shadow-lg 
          bg-gradient-to-r cursor-pointer
          
          animate-zoom
         "
          onClick={handleMenu}
        >
          Enroll Now
        </button> */}

        {/* Popup */}
        {isOpen && <Popup closeMenu={closeMenu} />} 
      </div>
    </div>
  );
}

export default Banner;
