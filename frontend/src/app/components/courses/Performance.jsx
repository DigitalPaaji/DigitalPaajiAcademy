


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
    "title": "MODULE 4: Online Lead Strategy",
    "icon": "/Images/course/m4.png",
    "points": [
      "Need of Online Advertising",
      "Types of Online Ads",
      "Media Buying Principles",
      "Nurturing & Lead Funnels"
    ]
  },
  {
    "title": "MODULE 5: Landing Page Optimization",
    "icon": "/Images/course/m5.png",
    "points": [
      "Things to Know when Planning a Lead Generation Campaign",
      "Key Elements of a Landing Page",
      "User Flow Designing",
      "Landing Page Copywriting",
      "Building Call-to-Action, Trust & Thank You Page",
      "A/B Versions of Landing Pages",
      "Key Landing Page Creation Tools"
    ]
  },
  {
    "title": "MODULE 6: Facebook & Instagram Advertising",
    "icon": "/Images/course/m6.png",
    "points": [
      "Introduction to Facebook & Instagram Ads Importance",
      "Types of Ads – Image, Video, Carousel, Story, etc.",
      "Types of Campaigns – Awareness, Consideration, Conversion",
      "Sub Campaigns – Reach, Traffic, Lead Generation, Sales, App Install",
      "Facebook & Instagram Ad Policies",
      "Creating Your Ad Campaign – Live Walkthrough",
      "Ad Campaign Best Practices",
      "Ad Campaign Case Study"
    ]
  },
  {
    "title": "MODULE 7: Online Advertising & Google Ads",
    "icon": "/Images/course/m7.png",
    "points": [
      "Introduction to Paid Marketing & Google Ads",
      "Types of Campaigns",
      "Bidding, Auctions & Budget",
      "Account Structure",
      "Account & Billing Setup",
      "Google Ad Campaign Case Study – Real Estate",
      "Ad Copy & Keyword Optimization",
      "Landing Page Design Testing",
      "Budget Testing",
      "Bid Amount & Bidding Methods Test",
      "Ad Schedules",
      "Google Analytics Recommendations"
    ]
  },
  {
    "title": "MODULE 8: Display Advertising",
    "icon": "/Images/course/m8.png",
    "points": [
      "Display vs Search Ads – Difference",
      "Google Display Ad Campaigns",
      "Targeting Methods",
      "Most Popular Display Ad Sizes",
      "Display Campaign Creation – Live Walkthrough",
      "Display Campaign Best Practices"
    ]
  },
  {
    "title": "MODULE 9: Video Advertising",
    "icon": "/Images/course/m9.png",
    "points": [
      "Introduction to Video Ads",
      "Video Ad Types",
      "Video Ad Campaign Types",
      "Bidding, Budget, Network & Inventory Options",
      "Video Campaign Targeting Options"
    ]
  },
  {
    "title": "MODULE 10: Remarketing & Rebranding",
    "icon": "/Images/course/m10.png",
    "points": [
      "How Remarketing Improves ROI",
      "Types of Remarketing Audience",
      "Essential Components of Remarketing",
      "Remarketing – Top Case Studies",
      "Setting Up Google Remarketing Tag",
      "Creating Different Lists with Google Analytics",
      "Display & Video Remarketing Campaign – Live Walkthrough",
      "Google Search Remarketing",
      "Facebook & Instagram Remarketing"
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