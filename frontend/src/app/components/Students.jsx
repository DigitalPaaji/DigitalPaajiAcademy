'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Students() {
  const videosRef = useRef([])

  const videos = [
    '/Images/student1.mp4',
    '/Images/student2.mp4',
    '/Images/student3.mp4',
    '/Images/student4.mp4',
    // '/Images/student5.mp4',
    // Add more if needed
  ]



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
      
      className='flex items-center justify-center flex-wrap lg:flex-nowrap gap-6'>
        {videos.map((video, index) => (
          <div
            key={index}
            // ref={el => (videosRef.current[index] = el)}
            className={`overflow-hidden w-[250px] md:w-[200px] lg: xl:w-full h-[550px] rounded-xl ${
              index % 2 === 1 ? 'lg:mt-12' : ''
            }`}
          >
            <video
              src={video}
              loading="lazy"
              controls
              // autoPlay
              // muted
              // loop
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students
