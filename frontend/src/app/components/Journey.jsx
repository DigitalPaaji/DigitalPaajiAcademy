'use client'
import React from 'react'

function Journey() {
  return (
    <div className='mx-6 lg:mx-12 xl:mx-24 py-24'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>

        {/* Left Content */}
        <div className='flex-1'>
          <h2 className='bungee-shade-regular text-4xl md:text-5xl xl:text-6xl font-bold mb-12'>
            Start Your Journey with Digital Paaji Academy
          </h2>

      
        </div>

        {/* Right Image */}
        <div className='flex-1'>
          <img
            src='/images/students-learning.png' // Replace with your actual image path
            alt='Students at Digital Paaji Academy'
            className='w-full rounded-xl shadow-lg'
          />
        </div>
      </div>
    </div>
  )
}

export default Journey
