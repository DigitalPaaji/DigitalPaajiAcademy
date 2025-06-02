"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);


function Banner() {
    // const videosRef = useRef([])
  
    const videos = [
      '/Images/about/paaji1.webp',
      '/Images/about/paaji2.webp',
      '/Images/about/paaji3.webp',
      // '/Images/about2.webp',
  
      // Add more if needed
    ]

 

 
  return (
    <div>

      <div className='mx-6 lg:mx-12 xl:mx-24 '>
   

      {/* Video Grid */}
      <div className='flex items-center justify-center flex-wrap lg:flex-nowrap gap-6'>
        {videos.map((video, index) => (
          <div
            key={index}
            // ref={el => (videosRef.current[index] = el)}
            className={`overflow-hidden h-[250px] md:h-[380px] xl:h-[500px] rounded-2xl ${
              index % 2 === 1 ? 'md:mt-12' : ''
            }`}
          >
            <Image
              src={video}
              width={220}
              height={220}
              alt=""
              // controls
              // autoPlay
              // muted
              // loop
              className='w-full h-full object-cover rounded-xl'
            />
          </div>
        ))}
      </div>
    </div>


  <div className="   mx-4 md:mx-12 xl:mx-24 py-24
    ">
      <div className=" flex items-center justify-center">
        <div className="text-center ">
          <h3 className="protest font-bold text-4xl md:text-6xl leading-tight tracking-tight">
Paaji's Mission Your Growth
      </h3>
          <p className="text-md xl:text-lg  my-6 text-justify md:justify-center 2xl:mx-40">
         <strong> We were running a digital agency from last 16 years </strong> — building websites, running ads, managing brands. But one day, a college student asked us if he could learn from us. Then another. Then another.

          We realized — <strong>talent is everywhere, but guidance isn't.</strong> That’s when Digital Paaji Academy was born.

    Paaji didn't want to just build brands — he wanted to build people too.
          </p>
          
         <p  className="text-md xl:text-lg  my-6 text-justify md:justify-center 2xl:mx-40">
       
Right from Day 1, our learners are diving into real-world challenges, guided by mentors who’ve actually worked in the field—not just talked about it.

From solving actual client problems to building their own mini-projects, we’re setting the foundation for something big. And trust us — this is just the beginning.
          </p>
        
        </div>
      </div>
    </div>

    



    


    </div>
    
  
  );
}

export default Banner;
