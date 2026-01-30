"use client"
import Link from 'next/link';
import React from 'react'
import { FaPhoneAlt, FaRegCircle } from "react-icons/fa";
import { MdLocationOn, MdOutlineAttachEmail, MdWork, MdSchool } from 'react-icons/md';

const TemplateFour = ({ resumeData }) => {
  return (
    <div className='max-w-4xl mx-auto bg-white border border-gray-300 shadow-lg my-8 font-serif'>
      {/* Header */}
      <div className='border-b-4 border-gray-800 p-8'>
        <div className='text-center mb-4'>
          <h1 className='text-4xl font-bold text-gray-900 tracking-tight'>
            {resumeData.personalInfo.firstName} 
            <span className='text-gray-600'> {resumeData.personalInfo.lastName}</span>
          </h1>
          <p className='text-lg text-gray-700 mt-2'>{resumeData.personalInfo.title}</p>
        </div>
        
        <div className='flex flex-wrap justify-center gap-6 text-sm text-gray-600'>
          {resumeData.personalInfo?.phone && (
            <Link href={`tel:${resumeData.personalInfo.phone}`} className='flex items-center gap-2 hover:text-gray-900 transition'>
              <FaPhoneAlt />
              <span>{resumeData.personalInfo.phone}</span>
            </Link>
          )}
          {resumeData.personalInfo?.email && (
            <Link href={`mailto:${resumeData.personalInfo.email}`} className='flex items-center gap-2 hover:text-gray-900 transition'>
              <MdOutlineAttachEmail />
              <span>{resumeData.personalInfo.email}</span>
            </Link>
          )}
          <div className='flex items-center gap-2'>
            <MdLocationOn />
            <span>{resumeData.personalInfo?.city && `${resumeData.personalInfo.city}, `}{resumeData.personalInfo?.country}</span>
          </div>
        </div>
      </div>
      
      <div className='p-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Left Column */}
          <div className='md:col-span-2 space-y-8'>
            {/* Experience */}
            <div>
              <div className='flex items-center mb-4'>
                <MdWork className='text-gray-700 mr-2' />
                <h2 className='text-xl font-bold uppercase tracking-wider text-gray-800'>Experience</h2>
              </div>
              {resumeData.experience.map((item, index) => (
                <div key={index} className='mb-6'>
                  <div className='flex justify-between items-baseline mb-1'>
                    <h3 className='font-bold text-gray-900'>{item.title}</h3>
                    <span className='text-sm text-gray-600'>{item.starting_month} – {item.ending_month}</span>
                  </div>
                  <p className='text-gray-700 italic mb-2'>{item.company}</p>
                  <p className='text-gray-600 text-sm'>{item.description}</p>
                  {index < resumeData.experience.length - 1 && (
                    <div className='h-px bg-gray-300 my-4'></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Education */}
            <div>
              <div className='flex items-center mb-4'>
                <MdSchool className='text-gray-700 mr-2' />
                <h2 className='text-xl font-bold uppercase tracking-wider text-gray-800'>Education</h2>
              </div>
              {resumeData.education.map((item, index) => (
                <div key={index} className='mb-4'>
                  <div className='flex justify-between items-baseline mb-1'>
                    <h3 className='font-bold text-gray-900'>{item.degree}</h3>
                    <span className='text-sm text-gray-600'>{item.year}</span>
                  </div>
                  <p className='text-gray-700'>{item.school}</p>
                  <p className='text-gray-600 text-sm'>{item.honors} • {item.location}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className='space-y-8'>
            {/* Summary */}
            {resumeData?.summary && (
              <div>
                <h2 className='text-xl font-bold uppercase tracking-wider text-gray-800 mb-3'>Profile</h2>
                <p className='text-gray-600 text-sm leading-relaxed'>{resumeData.summary}</p>
              </div>
            )}
            
            {/* Skills */}
            <div>
              <h2 className='text-xl font-bold uppercase tracking-wider text-gray-800 mb-3'>Skills</h2>
              <div className='space-y-4'>
                <div>
                  <h3 className='font-medium text-gray-700 mb-2 text-sm'>Technical</h3>
                  <div className='flex flex-wrap gap-2'>
                    {resumeData.skills.technical.map((skill, index) => (
                      <span key={index} className='bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className='font-medium text-gray-700 mb-2 text-sm'>Professional</h3>
                  <div className='flex flex-wrap gap-2'>
                    {resumeData.skills.professional.map((skill, index) => (
                      <span key={index} className='bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other */}
            {resumeData.other?.map((item, index) => (
              <div key={index}>
                <h2 className='text-xl font-bold uppercase tracking-wider text-gray-800 mb-3'>{item.heading}</h2>
                <p className='text-gray-600 text-sm mb-2'>{item.des}</p>
                <ul className='space-y-1'>
                  {item.list.map((itm, ind) => (
                    <li key={ind} className='flex items-start text-sm text-gray-600'>
                      <FaRegCircle className='w-2 h-2 mt-1 mr-2 flex-shrink-0' />
                      <span>{itm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateFour;