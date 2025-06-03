'use client';
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PiPlayCircleThin } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger)

function Students() {
  const videoRefs = useRef([])
  const [isPlaying, setIsPlaying] = useState({})

  const videos = [
    '/Images/student1.mp4',
    '/Images/student2.mp4',
    '/Images/student3.mp4',
    '/Images/student4.mp4',
  ]

  const handlePlayPause = (index)=>{
    const video = videoRefs.current[index];
    if(!video) return;
    if(video.paused){
      video.play();
      setIsPlaying((prev)=>({...prev,[index]:true}))
    }else{
      video.pause();
      setIsPlaying((prev)=>({...prev,[index]:false}))

    }
  }

  return (
    <div 
    
    className='mx-6 lg:mx-12 xl:mx-24 py-24'>
      {/* Text Row */}
      <div className='flex flex-col  justify-between items-start mb-16 gap-8'>
        <h3 className="bungee-shade-regular text-5xl md:text-5xl xl:text-7xl font-bold leading-tight text-center lg:text-left ">
          Hear from Our Learners
        </h3>
        <p>
          From landing jobs to launching freelance careers, our learners share how the Digital Paaji Academy experience helped them grow personally and professionally. Our expert instructors go beyond theory. They focus on real-world problem-solving, professional communication, and personality development — making sure you're not just industry-ready, but future-ready.
        Whether it's cracking their first client project, clearing an interview, building a portfolio from scratch, or becoming confident speakers — our learners continue to break barriers and set new standards for success.

        <br />
        <br />
        <strong className='poppins text-2xl '>Real stories, Real results, Real impact</strong>
   
        </p>
      </div>

      {/* Video Grid */}
      <div 
      
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center justify-items-center  gap-6'>
        {videos.map((video, index) => (
          <div
            key={index}
            // ref={el => (videosRef.current[index] = el)}
            className={`relative group overflow-hidden w-full h-[550px] 2xl:h-[690px] rounded-xl ${
              index % 2 === 1 ? 'lg:mt-12' : ''
            }`}
          >
            {!isPlaying[index] && (
              <button onClick={()=>handlePlayPause(index)}
               className="absolute z-10 inset-0 flex items-center justify-center bg-black/40 hover:bg-black/0 transition duration-300"
               ><PiPlayCircleThin  className='w-20 h-20 text-gray-200'/></button>
            )}
            <video
              src={video}
              ref={(el)=>(videoRefs.current[index] = el)}
              loading="lazy"
              onClick={()=> handlePlayPause(index)}
              controls={false}
              // autoPlay
              // muted
              playsInline
              loop
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students
