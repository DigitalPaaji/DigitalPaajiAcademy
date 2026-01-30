"use client"
import Link from 'next/link';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdOutlineAttachEmail, MdWork, MdSchool } from 'react-icons/md';
import { RiUserLine } from 'react-icons/ri';

const TemplateTwo = ({ resumeData }) => {
  return (
    <div className='bg-white max-w-5xl mx-auto border border-gray-200 my-10 font-sans'>
      {/* Header */}
      <div className='p-10'>
        <div className='text-center mb-8'>
          <h1 className='text-5xl font-light tracking-wide text-gray-900 mb-2'>
            {resumeData.personalInfo.firstName} <span className='font-semibold'>{resumeData.personalInfo.lastName}</span>
          </h1>
          <div className='h-1 w-24 bg-gray-800 mx-auto mb-4'></div>
          <p className='text-xl text-gray-600 uppercase tracking-widest'>{resumeData.personalInfo.title}</p>
        </div>

        <div className='flex flex-wrap justify-center gap-8 text-gray-600'>
          {resumeData.personalInfo?.phone && (
            <div className='flex items-center gap-2'>
              <FaPhoneAlt />
              <Link href={`tel:${resumeData.personalInfo.phone}`}>{resumeData.personalInfo.phone}</Link>
            </div>
          )}
          {resumeData.personalInfo?.email && (
            <div className='flex items-center gap-2'>
              <MdOutlineAttachEmail />
              <Link href={`mailto:${resumeData.personalInfo.email}`}>{resumeData.personalInfo.email}</Link>
            </div>
          )}
          <div className='flex items-center gap-2'>
            <MdLocationOn />
            <span>{resumeData.personalInfo?.city && `${resumeData.personalInfo.city}, `}{resumeData.personalInfo?.country}</span>
          </div>
        </div>
      </div>

      <div className='px-10 pb-10'>
        {/* Two Column Layout */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Left Column */}
          <div className='md:col-span-2 space-y-8'>
            {/* Summary */}
            {resumeData?.summary && (
              <div>
                <div className='flex items-center gap-3 mb-4'>
                  <RiUserLine className='text-gray-700' />
                  <h2 className='text-lg font-semibold uppercase tracking-widest text-gray-700'>Profile</h2>
                </div>
                <p className='text-gray-600 leading-relaxed border-l-2 border-gray-300 pl-4'>{resumeData.summary}</p>
              </div>
            )}

            {/* Experience */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <MdWork className='text-gray-700' />
                <h2 className='text-lg font-semibold uppercase tracking-widest text-gray-700'>Experience</h2>
              </div>
              <div className='space-y-8'>
                {resumeData.experience.map((item, index) => (
                  <div key={index} className='relative pl-6'>
                    <div className='absolute left-0 top-0 w-3 h-3 bg-gray-800 rounded-full'></div>
                    <div className='ml-2'>
                      <div className='flex justify-between items-baseline'>
                        <h3 className='text-lg font-medium text-gray-900'>{item.title}</h3>
                        <span className='text-sm text-gray-500'>{item.starting_month} - {item.ending_month}</span>
                      </div>
                      <p className='text-gray-600 italic mb-2'>{item.company}</p>
                      <p className='text-gray-700'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <MdSchool className='text-gray-700' />
                <h2 className='text-lg font-semibold uppercase tracking-widest text-gray-700'>Education</h2>
              </div>
              <div className='space-y-6'>
                {resumeData.education.map((item, index) => (
                  <div key={index} className='border-t border-gray-200 pt-4 first:border-t-0 first:pt-0'>
                    <div className='flex justify-between items-baseline'>
                      <h3 className='font-medium text-gray-900'>{item.degree}</h3>
                      <span className='text-sm text-gray-500'>{item.year}</span>
                    </div>
                    <p className='text-gray-600'>{item.school}</p>
                    <p className='text-gray-500 text-sm'>{item.honors} • {item.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='space-y-8'>
            {/* Skills */}
            <div>
              <h2 className='text-lg font-semibold uppercase tracking-widest text-gray-700 mb-4'>Skills</h2>
              
              <div className='space-y-6'>
                <div>
                  <h3 className='text-sm uppercase tracking-wider text-gray-500 mb-3'>Technical</h3>
                  <ul className='space-y-2'>
                    {resumeData.skills.technical.map((skill, index) => (
                      <li key={index} className='text-gray-700'>
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className='text-sm uppercase tracking-wider text-gray-500 mb-3'>Professional</h3>
                  <ul className='space-y-2'>
                    {resumeData.skills.professional.map((skill, index) => (
                      <li key={index} className='text-gray-700'>
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Other */}
            {resumeData.other?.map((item, index) => (
              <div key={index}>
                <h2 className='text-lg font-semibold uppercase tracking-widest text-gray-700 mb-4'>{item.heading}</h2>
                <p className='text-gray-600 mb-3'>{item.des}</p>
                <ul className='space-y-1'>
                  {item.list.map((itm, ind) => (
                    <li key={ind} className='text-gray-700 text-sm'>
                      • {itm}
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

export default TemplateTwo;