


"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {

  const modules =
 [
  {
    "title": "MODULE 1: Marketing Foundation",
    "icon": "/Images/course/m1.png",
    "points": [
      "History of Marketing",
      "Traditional vs. Digital Marketing"
    ]
  },
  {
    "title": "MODULE 2: Digital Marketing Ecosystem",
    "icon": "/Images/course/m2.png",
    "points": [
      "The Current Opportunity",
      "Digital Marketing Channels",
      "Careers in Digital Marketing"
    ]
  },
  {
    "title": "MODULE 3: Digital Consumer Behaviour",
    "icon": "/Images/course/m3.png",
    "points": [
      "Digital Consumer Journey",
      "Understanding Online Business Goals"
    ]
  },
  {
    "title": "MODULE 4: Building Your Business Website",
    "icon": "/Images/course/m4.png",
    "points": [
      "Buying Domain & Hosting",
      "Understanding cPanel",
      "Installing WordPress",
      "Customizing Theme",
      "Building Home Page & Blog",
      "Adding One Squeeze Page",
      "Customizing Menu",
      "Customization Practice & Doubt Session"
    ]
  },
  {
    "title": "MODULE 5: Introduction to SEO",
    "icon": "/Images/course/m5.png",
    "points": [
      "Search Engine & Its Functions",
      "Why SEO",
      "Definition of SEO",
      "SEO Ranking Factors",
      "SEO Algorithms"
    ]
  },
  {
    "title": "MODULE 6: SEO Keyword Research",
    "icon": "/Images/course/m6.png",
    "points": [
      "What is Keyword",
      "Types of Keywords",
      "Keyword Selection Tools",
      "Keyword Mapping on Pages and Posts"
    ]
  },
  {
    "title": "MODULE 7: On Page SEO – Content Optimization",
    "icon": "/Images/course/m7.png",
    "points": [
      "Importance of SEO Content",
      "Keywords Density & Proximity in Content",
      "Ideal Content Length for Posts and Pages",
      "Unique Content and Avoiding Plagiarism",
      "SEO Content Writing Cheatsheet"
    ]
  },
  {
    "title": "MODULE 8: On Page SEO – Technical & HTML",
    "icon": "/Images/course/m8.png",
    "points": [
      "Title Tag",
      "Description Tags",
      "Robots Tag",
      "Anchor Text",
      "Image & Heading Tags",
      "URL Optimization & Site Structuring"
    ]
  },
  {
    "title": "MODULE 9: Local SEO",
    "icon": "/Images/course/m9.png",
    "points": [
      "Google Business Profile Optimization",
      "Classified Optimization",
      "NAP Optimization"
    ]
  },
  {
    "title": "MODULE 10: Google Search Console Tool",
    "icon": "/Images/course/m10.png",
    "points": [
      "Setting Up Search Console",
      "Key GSC Reports",
      "Sitemap Management",
      "Optimization for Mobile View"
    ]
  },
  {
    "title": "MODULE 11: Off Page SEO – Link Building Techniques",
    "icon": "/Images/course/m11.png",
    "points": [
      "Types of Links",
      "Back Link Analysis",
      "Submission Based Link Building Techniques",
      "Content Based Link Building Techniques",
      "Outreach Based Link Building Techniques"
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
    {/* <div className="w-1/2 h-auto ">

  
        <img
          src={item.icon}
          alt={''}
          className="w-full  h-auto object-cover"
        />
    </div> */}
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

export default AddOn;