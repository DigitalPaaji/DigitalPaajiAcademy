


"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {

  const modules = [
    {
      "title": "MODULE 1: Marketing Foundation",
      "icon": "/Images/course/dmspecialist/1.png",
      "points": [
        "History of Marketing",
        "Traditional vs. Digital Marketing",
   
      ]
    },
    {
      "title": "MODULE 2: Digital Marketing Ecosystem",
      "icon": "/Images/course/dmspecialist/2.png",
      "points": [
        "The Current Opportunity",
        "Digital Marketing Channels",
        "Careers in Digital Marketing",
       
      ]
    },
    {
      "title": "MODULE 3: Digital Consumer Behaviour",
      "icon": "/Images/course/dmspecialist/3.png",
      "points": [
        "Digital Consumer Journey",
        "Understanding Online Business Goals",
       
      ]
    },
    {
      "title": "MODULE 4: Digital Visibility Strategy",
      "icon": "/Images/course/dmspecialist/4.png",
      "points": [
        "Website Planning",
        "Local Visibility",
        "Social Media Visibility",
     
      ]
    },
    {
      "title": "MODULE 5: Online Lead Strategy",
      "icon": "/Images/course/dmspecialist/5.png",
      "points": [
        "Need of Online Advertising",
        "Types of Online Ads",
        "Media Buying Principles",
        "Nurturing & Lead Funnels",
        
      ]
    },
    {
      "title": "MODULE 6: Graphic Designing For Business",
      "icon": "/Images/course/dmspecialist/6.png",
      "points": [
        "Graphic Design Fundamentals",
        "Designing- Marketing Kits",
        "Designing Online Documents",
        "Advanced Design Principles",
        "Social Media & Whatsapp Banner Design"
      ]
    },
    {
      "title": "MODULE 7: Video Marketing For Business",
      "icon": "/Images/course/dmspecialist/7.png",
      "points": [
        "Video Creation Strategy",
        "Importance of Video Marketing",
        "Types of Online Videos",
        "Building Explainer Video Scripts",
        "Live Exercise: Creating Explainer Videos",
        "Video Scripting",
        "Basic Video Editing",
            "Setting Youtube Channel",
        "Uploading Video on Youtube"
      ]
    },
    {
      "title": "MODULE 8: Building Your Business Website",
      "icon": "/Images/course/dmspecialist/8.png",
      "points": [
        "Buying Domain & Hosting",
        "Understanding C-panel",
        "Installing WordPress",
        "Customizing Theme",
        "Building Home Page & Blog",
        "Adding One Squeeze Page",
        "Customizing Menu",
        "Customization Practice & Doubt Session"
      ]
    },
    {
      "title": "MODULE 9: Introduction to Social Media",
      "icon": "/Images/course/dmspecialist/9.png",
      "points": [
        "Social Media Marketing Concept",
        "Exploring Social Media Channels",
        "Facebook Business Marketing",
              "Twitter Marketing",
        "LinkedIn Marketing",
        "Instagram Marketing",
      
      ]
    },
    {
      "title": "MODULE 10: Landing Page Optimization",
      "icon": "/Images/course/dmspecialist/10.png",
      "points": [
        "Things to Know when planning a Lead Generation Campaign",
        "Key Elements of a Landing Page",
        "User Flow Designing",
        "LP Copywriting",
        "Building: Action, Trust & Thank-You Page",
        "A/B Versions Of LP",
        "Key LP Creation Tools"
      ]
    },
    {
      "title": "MODULE 11: Facebook & Instagram Advertising",
      "icon": "/Images/course/dmspecialist/11.png",
      "points": [
        "Introduction to Facebook & IG Ads Importance",
        "Types of Ads- Image, Video, Carousel, Story etc.",
        "Types of Campaigns- Awareness, Consideration, Conversion",
        "Sub campaigns- Reach, Traffic, Lead Generation, Sales, App Install etc.",
        "FB & Instagram Ad Policies",
        "Creating Your Ad Campaign- Live Walkthrough",
        "Ad Campaign Best Practices",
        "Ad Campaign Case-Study"
      ]
    },
    {
      "title": "MODULE 12: Introduction to SEO",
      "icon": "/Images/course/dmspecialist/12.png",
      "points": [
        "Google Search Console Tool",
        "SEO Keyword Research",
        "Off Page SEO: Link Building Techniques",
        "On Page SEO: Content Optimization",
        "Local SEO",
        "On Page SEO: Technical & HTML"
      ]
    },
    {
      "title": "MODULE 13: Web Analytics & Traffic Reporting",
      "icon": "/Images/course/dmspecialist/13.png",
      "points": [
        "Introduction to Web Analytics",
        "Introduction to Google Analytics",
        "Google Analytics Account Structure",
        "Google Analytics Audience Report",
        "Google Analytics Acquisition Report",
        "Google Analytics Behaviour Report",
        "Installing Google Analytics On Website"
      ]
    },
       {
      "title": "Module 14: Online Advertising & Google Ads",
      "icon": "/Images/course/dmspecialist/14.png",
      "points": [
        "Introduction to Paid Marketing & GA",
        "Bidding, Auctions and Budget",
        "Account & Billing Setup",
        "Google Ads - Search Campaign (Live Creation)",
        "Keyword Research, Campaign, Adgroup, Conversion Tracking Setup",
        "Google Ad Campaign Case Study (Real Estate)",

      ]
    },   {
      "title": "Module 15: Display Advertising",
      "icon": "/Images/course/dmspecialist/15.png",
      "points": [
        "Display vs Search Ads – Difference",
        "Google Display Ad Campaigns",
        "Targeting Methods",
        "Most Popular Display Ad Sizes",
        "Display Campaign Creation – Live Walkthrough",
        "Display Campaign Best Practices",

      ]
    },   {
      "title": "Module 16: Video Advertising",
      "icon": "/Images/course/video/m3.png",
      "points": [
        "Introduction to Video Ads",
        "Video Ad Types",
        "Video Ad Campaign Types",
        "Bidding, Budget, Network & Inventory Options",
        "Video Campaign Targeting Options",
      ]
    },   {
      "title": "Module 17: Remarketing & Rebranding",
      "icon": "/Images/course/dmspecialist/1.png",
      "points": [
        "How Remarketing Improves ROI",
        "Types of Remarketing Audience",
        "Essentials Components of Remarketing",
        "Remarketing – Top Case Studies",
        "Setting Up Google Remarketing Tag",
        "Creating Different Lists with GA",
        "Display & Video Remarketing Campaign – Live Walkthrough",
        "Google Search Remarketing",
        "Facebook & Instagram Remarketing"
      ]
    },   {
      "title": "Module 18: Email Marketing",
      "icon": "/Images/course/dmspecialist/18.png",
      "points": [
        "Importance of Email Marketing",
        "Usage, ROI, Objectives, Email Benefits",
        "Top Email Marketing Tools",
        "Key Features of a Good Email Tool",
        "Step-by-Step Guide for Email Marketing",
        "Types of Marketing Emailers",
        "Email Writing Best Practices",
        "Email Marketing Strategy Creation",
        "Email List Building Tools"
      ]
    },   {
      "title": "Module 19: Inbound Marketing",
      "icon": "/Images/course/video/m8.png",
      "points": [
        "Inbound vs. Outbound Marketing",
        "Audience Identification",
        "Buyer Touch Point Analysis",
        "Top Content Types for Each Buyer Stage",
        "Where to Distribute Content",
        "How to Generate Content Ideas",
        "Creating Content Idea Sheet",
        "Content Repurposing"
      ]
    },   {
      "title": "Module 20: Web Content Writing",
      "icon": "/Images/course/video/m6.png",
      "points": [
        "Essentials of Content Writing",
        "Content Writing for Business Sites",
        "Top Tools for Content Research",
        "Top Tools for Content Writing",
        "AI-Based Tools for Content Writing",
        "Conversational Writing for Social Media",
        "Ecommerce Content Writing","Content Writing vs. Copywriting",
        "Copywriting Best Practices","Creating Ad Copies","Writing for Landing Pages","Funnel Copywriting – WhatsApp & Newsletters"
      ]
    }, 
    {
      "title": "MODULE 21: Blogging, Adsense & Affiliate Marketing",
      "icon": "/Images/course/video/m5.png",
      "points": [
   "Blog Planning & Strategy",
  "Setting Up Your Blog in WordPress",
  "Email Marketing Setup For Your Blog",
  "SEO For Your Blog",
  "Monetizing Your Blog With Affiliates, Adsense & Collabs",
  "Top 15 Content Planning & Production Tools For Your Blogs",
  "Creating & Disseminating Your 1st Blog Post",
  "Blog Success Blueprint"
      ]
    },  
   {
  "title": "MODULE 22: Selling On Amazon & Market Places",
  "icon": "/Images/course/dmspecialist/12.png",
  "points": [
    "How to Create Amazon Account",
    "Product Listing – Best Practices",
    "Pricing and Payments",
    "Order Management and Shipping",
    "Amazon Ads",
    "Listing Beyond Amazon – Best Practices"
  ]
},
{
  "title": "MODULE 23: Earning As A Freelancer / Starting Agency",
  "icon": "/Images/course/dmspecialist/3.png",
  "points": [
    "Top Freelancing Platforms",
    "Building Business / Freelancer Profile",
    "Live Walkthrough: How to Grab Projects",
    "How to Price Your Services",
    "Small Agency / Freelancer Lead Generation Case Studies"
  ]
},

        {
      "title": "MODULE 24: AI Powered Digital Marketing",
      "icon": "/Images/course/dmspecialist/10.png",
      "points": [
   "What is AI-Based Digital Marketing?",
  "Applications of AI in Digital Marketing",
  "ChatGPT & Prompt Engineering",
  "AI for Content & Copywriting",
  "AI Video & Audio Creation",
  "AI Branding & Design",
  "AI Marketing & Outreach",
      ]
    },
    {
      "title": "MODULE 25: Interview Process and Preparation",
      "icon": "/Images/course/graphic/15.png",
      "points": [
   "Advanced Masterclasses by Indusrty Experts",
  "Portfolio Creation with Dedicated Career Mentor",
  "3 Bonus Earning Courses",
  "2 Month Industrial Internship with LOR",
  "Access to DigiPerformer Online Community Forum",
  "Video Advertising",
  "Certification and Interview Preparation",
      ]
    },
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