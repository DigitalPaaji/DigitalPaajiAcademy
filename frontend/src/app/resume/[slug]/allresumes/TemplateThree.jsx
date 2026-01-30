"use client"
import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdOutlineAttachEmail, MdWork, MdSchool } from 'react-icons/md';

const PremiumTemplate = ({ resumeData }) => {
  return (
    <div className='max-w-5xl mx-auto my-10 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row bg-white min-h-[1100px]'>
      
      {/* Left Sidebar: Dark & Sharp */}
      <aside className='w-full md:w-80 bg-slate-900 text-slate-300 p-8 flex flex-col'>
        <div className='mb-10 text-center md:text-left'>
          <h1 className='text-3xl font-bold text-white leading-tight uppercase tracking-tighter'>
            {resumeData.personalInfo.firstName}<br/>
            <span className='text-blue-400'>{resumeData.personalInfo.lastName}</span>
          </h1>
          <p className='text-sm font-medium text-slate-500 mt-2 uppercase tracking-widest italic'>
            {resumeData.personalInfo.title}
          </p>
        </div>

        {/* Contact Section */}
        <section className='space-y-4 mb-10'>
          <h3 className='text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4'>Contact</h3>
          {resumeData.personalInfo?.phone && (
            <Link href={`tel:${resumeData.personalInfo.phone}`} className='flex items-center gap-3 text-sm hover:text-white transition'>
              <div className='w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center'><FaPhoneAlt size={12}/></div>
              {resumeData.personalInfo.phone}
            </Link>
          )}
          {resumeData.personalInfo?.email && (
            <Link href={`mailto:${resumeData.personalInfo.email}`} className='flex items-center gap-3 text-sm hover:text-white transition group'>
              <div className='w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center'><MdOutlineAttachEmail size={14}/></div>
              <span className='truncate w-40'>{resumeData.personalInfo.email}</span>
            </Link>
          )}
          <div className='flex items-center gap-3 text-sm'>
            <div className='w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center'><MdLocationOn size={14}/></div>
            {resumeData.personalInfo?.city}, {resumeData.personalInfo?.country}
          </div>
        </section>

        {/* Skills Section */}
        <section className='space-y-6'>
          <div>
            <h3 className='text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4'>Technical</h3>
            <div className='flex flex-wrap gap-2'>
              {resumeData.skills.technical.map((s, i) => (
                <span key={i} className='text-[11px] font-bold bg-slate-800 text-blue-300 px-2 py-1 rounded border border-slate-700 uppercase'>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4'>Professional</h3>
            <ul className='space-y-2 text-sm'>
              {resumeData.skills.professional.map((s, i) => (
                <li key={i} className='flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-blue-500'></span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </aside>

      {/* Main Content: Clean & Modern */}
      <main className='flex-1 p-12 bg-white'>
        
        {/* Summary */}
        {resumeData?.summary && (
          <section className='mb-12'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='h-8 w-1 bg-blue-600 rounded-full'></div>
              <h2 className='text-xl font-bold text-slate-900 uppercase tracking-tight'>Summary</h2>
            </div>
            <div className='text-slate-600 leading-relaxed text-[15px]' dangerouslySetInnerHTML={{__html: resumeData.summary}} />
          </section>
        )}

        {/* Experience */}
        <section className='mb-12'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='h-8 w-1 bg-blue-600 rounded-full'></div>
            <h2 className='text-xl font-bold text-slate-900 uppercase tracking-tight'>Experience</h2>
          </div>
          <div className='space-y-8'>
            {resumeData.experience.map((item, index) => (
              <div key={index} className='relative group'>
                <div className='flex justify-between items-baseline'>
                  <h3 className='text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors'>{item.title}</h3>
                  <span className='text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded'>{item.starting_month} — {item.ending_month}</span>
                </div>
                <p className='text-sm font-semibold text-blue-600 mb-2'>{item.company}</p>
                <p className='text-[14.5px] text-slate-500 leading-snug'>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className='mb-12'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='h-8 w-1 bg-blue-600 rounded-full'></div>
            <h2 className='text-xl font-bold text-slate-900 uppercase tracking-tight'>Education</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {resumeData.education.map((item, index) => (
              <div key={index} className='p-4 rounded-xl border border-slate-100 bg-slate-50/50'>
                <p className='text-xs font-bold text-blue-600 mb-1'>{item.year}</p>
                <h3 className='font-bold text-slate-900 text-sm'>{item.degree}</h3>
                <p className='text-xs text-slate-500'>{item.school}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Sections */}
        {resumeData.other?.map((item, index) => (
          <section key={index}>
            <div className='flex items-center gap-3 mb-4'>
              <div className='h-8 w-1 bg-blue-600 rounded-full'></div>
              <h2 className='text-xl font-bold text-slate-900 uppercase tracking-tight'>{item.heading}</h2>
            </div>
            <p className='text-sm text-slate-600 mb-3'>{item.des}</p>
            <div className='flex flex-wrap gap-2'>
              {item.list.map((itm, ind) => (
                <span key={ind} className='text-[11px] bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold uppercase'>{itm}</span>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default PremiumTemplate;