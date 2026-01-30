"use client"
import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdOutlineAttachEmail } from 'react-icons/md';

const StrategicTemplate = ({ resumeData }) => {
  return (
    <div className='bg-white max-w-6xl mx-auto my-12 shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[1100px] border border-gray-100'>
      
      {/* Left Sidebar: Dynamic Gradient */}
      <aside className='lg:w-1/3 bg-[#1e1b4b] text-white p-10 flex flex-col'>
        <div className='mb-12'>
          <h1 className='text-4xl font-extrabold tracking-tighter'>
            {resumeData.personalInfo.firstName}
            <span className='block text-cyan-400'>{resumeData.personalInfo.lastName}</span>
          </h1>
          <div className='h-1 w-12 bg-cyan-400 mt-4 rounded-full'></div>
          <p className='text-lg text-slate-400 mt-4 font-medium'>{resumeData.personalInfo.title}</p>
        </div>

        {/* Contact Info */}
        <div className='space-y-5 mb-12 text-sm'>
          <h3 className='text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6'>Get in Touch</h3>
          {resumeData.personalInfo?.phone && (
            <Link href={`tel:${resumeData.personalInfo.phone}`} className='flex items-center gap-4 hover:text-cyan-300 transition group'>
              <div className='p-2 bg-white/5 rounded-lg group-hover:bg-white/10'><FaPhoneAlt size={14}/></div>
              {resumeData.personalInfo.phone}
            </Link>
          )}
          {resumeData.personalInfo?.email && (
            <Link href={`mailto:${resumeData.personalInfo.email}`} className='flex items-center gap-4 hover:text-cyan-300 transition group'>
              <div className='p-2 bg-white/5 rounded-lg group-hover:bg-white/10'><MdOutlineAttachEmail size={16}/></div>
              <span className='truncate'>{resumeData.personalInfo.email}</span>
            </Link>
          )}
          <div className='flex items-center gap-4'>
            <div className='p-2 bg-white/5 rounded-lg'><MdLocationOn size={16}/></div>
            {resumeData.personalInfo?.city}, {resumeData.personalInfo?.country}
          </div>
        </div>

        {/* Skills Grid */}
        <div className='mt-auto'>
          <h3 className='text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6'>Expertise</h3>
          <div className='flex flex-wrap gap-2'>
            {resumeData.skills.technical.map((skill, i) => (
              <span key={i} className='px-3 py-1.5 bg-white/10 rounded-md text-[11px] font-bold uppercase tracking-wider border border-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-default'>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Right Content: Airy & Professional */}
      <main className='lg:w-2/3 p-12 lg:p-16 space-y-12 bg-slate-50/30'>
        
        {/* About Section */}
        {resumeData?.summary && (
          <section>
            <h2 className='text-2xl font-bold text-slate-900 mb-4'>Professional Profile</h2>
            <div className='text-slate-600 leading-relaxed text-lg' dangerouslySetInnerHTML={{__html: resumeData.summary}} />
          </section>
        )}

        {/* Experience Section */}
        <section>
          <h2 className='text-2xl font-bold text-slate-900 mb-8'>Work History</h2>
          <div className='space-y-10'>
            {resumeData.experience.map((item, index) => (
              <div key={index} className='relative pl-8 group'>
                {/* Timeline Line */}
                <div className='absolute left-0 top-2 bottom-0 w-[2px] bg-slate-200 group-hover:bg-cyan-400 transition-colors'></div>
                <div className='absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full bg-slate-300 group-hover:bg-cyan-500 transition-all scale-100 group-hover:scale-125'></div>
                
                <div className='flex flex-col sm:flex-row sm:items-baseline justify-between mb-2'>
                  <h3 className='text-xl font-bold text-slate-800'>{item.title}</h3>
                  <span className='text-xs font-bold text-slate-400 uppercase tracking-widest'>{item.starting_month} — {item.ending_month}</span>
                </div>
                <p className='text-cyan-600 font-bold mb-3 tracking-wide'>{item.company}</p>
                <p className='text-slate-600 leading-snug text-sm'>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Two-Column Bottom: Education & Honors */}
        <div className='grid md:grid-cols-2 gap-10'>
          <section>
            <h2 className='text-xl font-bold text-slate-900 mb-6'>Education</h2>
            <div className='space-y-6'>
              {resumeData.education.map((edu, i) => (
                <div key={i} className='p-5 bg-white border border-slate-100 rounded-2xl shadow-sm'>
                  <p className='text-xs font-black text-cyan-600 uppercase mb-1'>{edu.year}</p>
                  <h4 className='font-bold text-slate-800 text-sm'>{edu.degree}</h4>
                  <p className='text-xs text-slate-500 mt-1'>{edu.school}</p>
                </div>
              ))}
            </div>
          </section>

          {resumeData.other?.map((item, index) => (
            <section key={index}>
              <h2 className='text-xl font-bold text-slate-900 mb-6'>{item.heading}</h2>
              <div className='p-6 bg-[#1e1b4b] rounded-2xl text-white'>
                <p className='text-xs text-slate-400 leading-relaxed mb-4'>{item.des}</p>
                <div className='flex flex-wrap gap-2'>
                  {item.list.map((itm, ind) => (
                    <span key={ind} className='text-[10px] font-black bg-white/10 px-2.5 py-1 rounded uppercase tracking-tighter'>{itm}</span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StrategicTemplate;