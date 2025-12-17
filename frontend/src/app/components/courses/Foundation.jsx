


"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Foundation() {

  const modules = [
   {
    "title": "MODULE 01: Digital Marketing Ecosystem",
    "icon": "/Images/course/dmspecialist/2.png",
    "points": [
      "The Current Opportunity",
      "Digital Marketing Channels",
      "Careers in Digital Marketing"
    ]
  },
  {
    "title": "MODULE 02: Computers & Internet Basics",
    "icon": "/Images/course/dmspecialist/1.png",
    "points": [
      "Computers & Internet Basics",
      "Networking Terms & Concepts",
      "Web Browser & The Internet",
      "MS Office",
      "Internet Research"
    ]
  },
  {
    "title": "MODULE 03: Google Workspace Mastery",
    "icon": "/Images/course/dmspecialist/3.png",
    "points": [
      "Gmail Customization",
      "Google Docs",
      "Google Slides",
      "Google Forms",
      "Google Sites"
    ]
  },
  {
    "title": "MODULE 04: SEO (Search Engine Optimization)",
    "icon": "/Images/course/dmspecialist/12.png",
    "points": [
      "SEO Keyword Research",
      "On-Page SEO",
      "HTML for SEO",
      "Off-Page & Local SEO"
    ]
  },
  {
    "title": "MODULE 05: Digital Graphics Creation",
    "icon": "/Images/course/dmspecialist/13.png",
    "points": [
      "Basics of Banner Creation",
      "Resume Creation in Canva",
      "Social Media Post Creation in Canva",
      "YouTube Thumbnail Creation in Canva"
    ]
  },
  {
    "title": "MODULE 06: Social Media Optimization",
    "icon": "/Images/course/dmspecialist/6.png",
    "points": [
      "What is Social Media & Why Care",
      "Facebook for Business Marketing",
      "Instagram for Business Marketing",
      "LinkedIn Profile Setup"
    ]
  },
  {
    "title": "MODULE 07: Video Creation & Editing",
    "icon": "/Images/course/dmspecialist/7.png",
    "points": [
      "Video Script & Shooting",
      "Explainer Video Creation",
      "Social Media Reel Creation",
      "Basic Video Editing",
      "Setting YouTube Channel",
      "Uploading Video on YouTube"
    ]
  },
  {
    "title": "MODULE 08: Online Advertising",
    "icon": "/Images/course/dmspecialist/11.png",
    "points": [
      "Introduction to Ad Types",
      "Types of Bidding",
      "Ad Auction Process",
      "Ad Targeting Methods",
      "Ad Budgeting"
    ]
  },
   {
    "title": "MODULE 09: Communicative English",
    "icon": "/Images/course/dmspecialist/eng.png",
    "points": [
      "Importance of Communication",
      "Communicating in English (Necessity or Worthless)",
      "Getting Started with Talk About Self",
      "Understanding the Building Blocks of English Language"
    ]
  },
  {
    "title": "MODULE 10: Introduction to Tenses",
    "icon": "/Images/course/dmspecialist/tenses.png",
    "points": [
      "Understanding Tenses and Their Usage",
      "Sentence Structuring Using Correct Tense Forms",
      "Speech (Topic Assignment Based on Situation)"
    ]
  },
  {
    "title": "MODULE 11: Communication Activities & Role Plays",
    "icon": "/Images/course/dmspecialist/1.png",
    "points": [
      "Extempore Speeches",
      "Role Plays Based on Situations",
      "Group Discussion",
      "Team Work",
      "Debates"
    ]
  },
  {
    "title": "MODULE 12: Corporate Grooming",
    "icon": "/Images/course/dmspecialist/team.png",
    "points": [
      "Body Language",
      "Dressing Etiquettes – Dressing as per the Occasion",
      "Telephonic Communication",
      "Do's and Don'ts of Corporate World",
      "Professional E-mail Etiquettes"
    ]
  },
  {
    "title": "MODULE 13: Interview Preparation",
    "icon": "/Images/course/graphic/15.png",
    "points": [
      "Resume Building",
      "Mock Interview Session",
      "Common Interview Questionnaire and Relevant Answers"
    ]
  }
  ]


  return (
    <div className="relative   bg-white">

           <div
          className="absolute top-0 inset-0 opacity-20 "
          style={{
            backgroundImage: "url(/Images/course/bg.png)",

          }}
        ></div>
                   <img
        className="absolute top-0 left-0 w-full h-auto  opacity-10"
       src='/Images/course/web.png'
       alt=""/>     
                <img
        className="absolute bottom-0 right-0 w-full h-auto  opacity-10"
       src='/Images/course/web.png'
       alt=""/>
    <div 
    className=" bg-linear-to-b from-[#e9872436] py-24 via-transparent to-[#e9872428]"
    >
     {/* <div className="text-center py-24 px-4 md:px-12 lg:px-32 xl:px-72 ">
        <h2 className="  bungee-shade-regular text-4xl md:text-5xl xl:text-7xl font-bold text-center ">
          Learning Roadmap
        </h2>

        <p
          className="  text-base md:text-md my-4 mx-8 xl:mx-0 text-center"
          style={{ textAlign: "center" }}
        >
         Here at Digital Paaji, we provide an extensive array of SEO services aimed at increasing your online presence and search engine rankings.
        </p>
      </div>*/}

      <div className="relative text-center px-4 md:px-12 xl:px-32  ">

  <div className="relative z-10">
    
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  place-items-center">
  {modules.map((item, index) => (
    <div key={index} className="p-2 lg:p-8 w-full  space-y-6  ">
      
      {/* Icon */}
    <div className="w-1/2 h-auto ">

  
        <img
          src={item.icon}
            alt={''}
          className="w-full  h-auto object-cover"
        />
    </div>
<div className=" text-start">

      {/* Title */}
      <h2 className=" text-2xl text-black">
        {item.title}
      </h2>

      {/* Points */}
      <ul className="text-base md:text-lg space-y-2  ">
        {item.points.map((point, i) => (
          <li key={i} className="flex items-start  gap-2 text-left">
            {/* Bullet Icon */}
            <Image
              src="/Images/course/point.png" // ← change icon path if needed
              width={22}
              height={22}
              alt="check"
              className="  mt-1"
            />                                                            
            <span>{point}</span>
          </li>
        ))}
      </ul>
</div>

    </div>
  ))}
</div>


  
    </div>
      </div>
    </div>
     </div>
  );
}

export default Foundation;