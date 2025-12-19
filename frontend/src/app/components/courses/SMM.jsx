"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {

  const modules =
[
  {
    "title": "MODULE 1: Marketing Foundation",
    "icon": "/Images/course/dmspecialist/4.png",
    "points": [
      "History of Marketing",
      "Traditional vs. Digital Marketing"
    ]
  },
  {
    "title": "MODULE 2: Digital Marketing Ecosystem",
    "icon": "/Images/course/dmspecialist/2.png",
    "points": [
      "The Current Opportunity",
      "Digital Marketing Channels",
      "Careers in Digital Marketing"
    ]
  },
  {
    "title": "MODULE 3: Digital Consumer Behaviour",
    "icon": "/Images/course/dmspecialist/3.png",
    "points": [
      "Digital Consumer Journey",
      "Understanding Online Business Goals"
    ]
  },
  {
    "title": "MODULE 4: Graphic Designing for Business",
    "icon": "/Images/course/dmspecialist/13.png",
    "points": [
      "Graphic Design Fundamentals",
      "Designing Marketing Kits",
      "Designing Online Documents",
      "Advanced Design Principles",
      "Social Media & WhatsApp Banner Design"
    ]
  },
  {
    "title": "MODULE 5: Video Marketing for Business",
    "icon": "/Images/course/dmspecialist/15.png",
    "points": [
      "Video Creation Strategy",
      "Importance of Video Marketing",
      "Types of Online Videos",
      "Building Explainer Video Scripts",
      "Live Exercise: Creating Explainer Videos",
      "Video Scripting",
      "Basic Video Editing",
      "Setting YouTube Channel",
      "Uploading Video on YouTube"
    ]
  },
  {
    "title": "MODULE 6: Introduction to Social Media",
    "icon": "/Images/course/dmspecialist/6.png",
    "points": [
      "Social Media Marketing Concept",
      "Exploring Social Media Channels",
      "Facebook Business Marketing",
      "Twitter Marketing",
      "LinkedIn Marketing",
      "Instagram Marketing"
    ]
  },
  {
    "title": "MODULE 7: Facebook & Instagram Advertising",
    "icon": "/Images/course/dmspecialist/9.png",
    "points": [
      "Introduction to Facebook & IG Ads Importance",
      "Types of Ads: Image, Video, Carousel, Story etc.",
      "Types of Campaigns: Awareness, Consideration, Conversion",
      "Sub Campaigns: Reach, Traffic, Lead Generation, Sales, App Install etc.",
      "FB & Instagram Ad Policies",
      "Creating Your Ad Campaign – Live Walkthrough",
      "Ad Campaign Best Practices",
      "Ad Campaign Case Study"
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

export default AddOn;