'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Students() {
  const videosRef = useRef([])

  const videos = [
    '/videos/student1.mp4',
    '/videos/student2.mp4',
    '/videos/student3.mp4',
    '/videos/student4.mp4',
    '/videos/student5.mp4',
    // Add more if needed
  ]

  // useEffect(() => {
  //   videosRef.current.forEach((videoEl, index) => {
  //     if (videoEl) {
  //       gsap.fromTo(
  //         videoEl,
  //         {
  //           opacity: 0,
  //           y: 50,
  //         },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 1,
  //           ease: "power2.out",
  //           scrollTrigger: {
  //             trigger: videoEl,
  //             start: 'top 80%',
  //             toggleActions: 'play none none reverse',
  //           },
  //           delay: index * 0.4, // slight stagger
  //         }
  //       )
  //     }
  //   })
  // }, [])

  return (
    <div className='mx-6 lg:mx-12 xl:mx-24 py-24'>
      {/* Text Row */}
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8'>
        <h3 className="bungee-shade-regular text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
          Hear from Our Learners
        </h3>
      </div>

      {/* Video Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6'>
        {videos.map((video, index) => (
          <div
            key={index}
            // ref={el => (videosRef.current[index] = el)}
            className={`overflow-hidden h-[250px] md:h-[380px] xl:h-[500px] rounded-2xl ${
              index % 2 === 1 ? 'md:mt-12' : ''
            }`}
          >
            <video
              src={video}
              controls
              autoPlay
              muted
              loop
              className='w-full h-full object-cover rounded-xl'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students
