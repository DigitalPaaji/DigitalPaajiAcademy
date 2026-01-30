import Link from 'next/link'
import React from 'react'
import { MdOutlineStyle, MdArrowForward } from 'react-icons/md'


const page = () => {


  const allResume= [
{
  link:"/resume/resumeone",
  img:"/resume/resume1.png"
},
{
  link:"/resume/resumetwo",
  img:"/resume/resume2.png"
},
{
  link:"/resume/resumethree",
  img:"/resume/resume3.png"
},
{
  link:"/resume/resumefour",
  img:"/resume/resume4.png"
},
{
  link:"/resume/resumefive",
  img:"/resume/resume5.png"
},
{
  link:"/resume/resumesix",
  img:"/resume/resume6.png"
}


  ]

    const displayItems = Array(9).fill(allResume[0]);
  return (
   <div className='min-h-screen bg-gray-50/50 py-16 px-4 sm:px-8 lg:px-16'>
      <div className='l mx-auto'>
        
        {/* Header Section */}
        <div className="mt-12 text-center md:text-left">
          <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center justify-center md:justify-start gap-3'>
            <MdOutlineStyle className="text-blue-600" /> Select Your Template
          </h1>
          <p className='text-gray-500 mt-2 text-lg'>Pick a professional layout to start building your career story.</p>
        </div>

        {/* Template Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {allResume.map((item, index) => (
            <Link 
              href={item.link} 
              key={index}
              className="group relative block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Container with Aspect Ratio */}
              <div className='aspect-[3/4] overflow-hidden bg-gray-200 relative'>
                <img 
                  src={item.img} 
                  alt="Resume Template" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="bg-white text-blue-700 px-6 py-2.5 rounded-full font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     Use This Template <MdArrowForward />
                   </div>
                </div>
              </div>

              {/* Bottom Label (Optional but looks professional) */}
              <div className="p-4 bg-white border-t border-gray-50 flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-700">Template {index + 1}</span>
                <span className="text-xs text-blue-500 font-medium">Free</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page