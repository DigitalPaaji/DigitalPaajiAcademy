import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='px-24 flex items-center justify-between h-[100px]'>
      <div className=''>
<Image alt='' src={'/Images/logo.webp'} width={220} height={220} className='w-full h-14 object-cover' />
      </div>
      <div className="">
        <ul className='flex items-center justify-center gap-12'>
            <li className='text-lg '>Programs</li>
            <li className='text-lg '>Our Story</li>
            <li className='text-lg '>Mentors</li>
            <li className='text-lg '>Paaji Tales</li>
            <li className='p-3 text-md bg-white rounded-lg border border-r-4 border-b-4 border-black '>Enroll Now</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
