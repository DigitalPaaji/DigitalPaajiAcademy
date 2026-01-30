"use client"
import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdOutlineAttachEmail } from 'react-icons/md';

const SimplifiedResume = ({ resumeData }) => {


  
  return (
    <div className='bg-white max-w-5xl mx-auto my-10 shadow-sm border border-gray-100 p-[1.5in] text-slate-800 font-serif leading-relaxed'>
      
      {/* Header: Centered & Clean */}
      <header className='text-center border-b-2 border-slate-900 pb-6 mb-8'>
        <h1 className='text-4xl font-bold tracking-tight uppercase text-slate-900'>
          {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
        </h1>
        <p className='text-lg font-medium text-slate-600 mt-1 uppercase tracking-widest'>
          {resumeData.personalInfo.title}
        </p>
        
        <div className='flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-slate-500 font-sans'>
          {resumeData.personalInfo?.phone && (
            <Link href={`tel:${resumeData.personalInfo.phone}`} className='flex items-center gap-1 hover:text-blue-600 transition'>
              <FaPhoneAlt size={12} /> {resumeData.personalInfo.phone}
            </Link>
          )}
          {resumeData.personalInfo?.email && (
            <Link href={`mailto:${resumeData.personalInfo.email}`} className='flex items-center gap-1 hover:text-blue-600 transition'>
              <MdOutlineAttachEmail size={14} /> {resumeData.personalInfo.email}
            </Link>
          )}
          <div className='flex items-center gap-1'>
            <MdLocationOn size={14} /> 
            {resumeData.personalInfo?.city}, {resumeData.personalInfo?.country}
          </div>
        </div>
      </header>

      {/* Main Body */}
      <div className='space-y-8'>
        
        {/* Summary */}
        {resumeData?.summary && (
          <section>
            <h2 className='text-sm font-bold uppercase tracking-[0.2em] border-b border-slate-200 mb-3 text-slate-900'>Professional Summary</h2>
            <div className='text-[15px] text-slate-700 font-sans leading-relaxed' 
                 dangerouslySetInnerHTML={{__html: resumeData.summary}} />
          </section>
        )}

        {/* Experience */}
        <section>
          <h2 className='text-sm font-bold uppercase tracking-[0.2em] border-b border-slate-200 mb-4 text-slate-900'>Experience</h2>
          <div className='space-y-6'>
            {resumeData.experience.map((item, index) => (
              <div key={index}>
                <div className='flex justify-between items-baseline font-sans'>
                  <h3 className='font-bold text-slate-900'>{item.title}</h3>
                  <span className='text-xs font-semibold text-slate-500 uppercase tracking-tighter'>
                    {item.starting_month} — {item.ending_month}
                  </span>
                </div>
                <p className='text-sm italic text-blue-700 mb-2 font-sans'>{item.company}</p>
                <p className='text-[14.5px] text-slate-600 font-sans'>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className='text-sm font-bold uppercase tracking-[0.2em] border-b border-slate-200 mb-4 text-slate-900'>Education</h2>
          <div className='space-y-4'>
            {resumeData.education.map((item, index) => (
              <div key={index} className='flex justify-between items-start font-sans'>
                <div>
                  <h3 className='font-bold text-sm text-slate-900'>{item.degree}</h3>
                  <p className='text-sm text-slate-600'>{item.school} | <span className='italic'>{item.location}</span></p>
                </div>
                <span className='text-xs font-semibold text-slate-500'>{item.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills - Simple List */}
        <section>
          <h2 className='text-sm font-bold uppercase tracking-[0.2em] border-b border-slate-200 mb-3 text-slate-900'>Skills</h2>
          <div className='font-sans text-[14px] grid grid-cols-1 gap-2'>
            <p><span className='font-bold'>Technical:</span> {resumeData.skills.technical.join(', ')}</p>
            <p><span className='font-bold'>Professional:</span> {resumeData.skills.professional.join(', ')}</p>
          </div>
        </section>

        {/* Other Sections */}
        {resumeData.other?.map((item, index) => (
          <section key={index}>
            <h2 className='text-sm font-bold uppercase tracking-[0.2em] border-b border-slate-200 mb-3 text-slate-900'>{item.heading}</h2>
            <p className='text-[14.5px] text-slate-600 font-sans mb-2'>{item.des}</p>
            <ul className='flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs text-slate-700 list-disc list-inside px-2'>
              {item.list.map((itm, ind) => <li key={ind}>{itm}</li>)}
            </ul>
          </section>
        ))}

      </div>
    </div>
  );
};

export default SimplifiedResume;