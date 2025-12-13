


"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {

  const modules = [
    {
      "title": "Marketing Foundation",
      "icon": "/Images/course/m1.png",
      "points": [
        "History of Marketing",
        "Traditional vs Digital Marketing",
        "Soft Skills and Grooming ",
        
      ]
    },
    {
      "title": "Kickstart Your Journey in Digital Marketing",
      "icon": "/Images/course/m2.png",
      "points": [
        "The Current Opportunity",
        "Digital Marketing Channels",
        "Careers in Digital Marketing",
        
      ]
    },
    {
      "title": "Digital Consumer Behaviour",
      "icon": "/Images/course/m3.png",
      "points": [
        "Digital Consumer Journey",
        "Understanding Online Business Goals",
      
      ]
    },
    {
      "title": "Digital Visiblity Strategy",
      "icon": "/Images/course/m4.png",
      "points": [
        "Website Planning",
        " Local VisibilityStrategy",
        "Social Media Strategy",
      
      ]
    },
    {
      "title": "Online Lead Strategy",
      "icon": "/Images/course/m5.png",
      "points": [
        "Need of online Advertising",
        "Types of Online Ads",
        "Media Buying Principles",
        "Cinematic color grading workflow",
        "Nurturing & Lead Funnels"
      ]
    },
    {
      "title": "Transform Your Brand with Powerful Graphic Design",
      "icon": "/Images/course/m6.png",
      "points": [
        "Graphic Design Fundamentals",
        "Designing- Marketing Kits",
        "Designing Online Documents",
        "Advanced Design Principles",
        "Social Media & Whatsapp Banner Design"
      ]
    },
    {
      "title": "Proven Video Marketing Strategies + How to Launch a Powerful YouTube Channel",
      "icon": "/Images/course/m7.png",
      "points": [
        "Video Creation Strategy",
        "Importance of Video Marketing •",
        "Types of Online Videos",
        "Building Explainer Video Scripts",
        "Live Exercise: Creating Explainer Videos • Video Scripting",
        "Basic Video Editing",
        "Setting Youtube Channel",
        "Uploading Video on Youtube"
      ]
    },
    {
      "title": "Master the Art of Website Design with Powerful UI/UX Principles",
      "icon": "/Images/course/m8.png",
      "points": [
      "Buying Domain & Hosting",
  "Understanding cPanel",
  "Installing WordPress",
  "Customizing Theme",
  "Building Home Page, Blog & E-Commerce Pages",
  "Adding One Squeeze Page",
  "Customizing Menu",
  "Customization Practice & Doubt Session",
      ]
    },
    {
      "title": "Introduction to Social Media Mastery",
      "icon": "/Images/course/m9.png",
      "points": [
        "Introduction to social media marketing with Case Study",
        "Social Media Gameplan: Tools, Tips & Growth Hacks",
       
      ]
    },
    {
      "title": "Building Brands on Facebook",
      "icon": "/Images/course/m10.png",
      "points": [
         "The Power of Facebook for Digital Marketing Success",
  "Facebook Profile vs Page vs Group",
  "Creating Facebook Pages and Groups",
  "Optimizing Facebook Profile Settings",
  "How to Grow Your Facebook Page",
  "Meta Business Suite Tools",
  "Social Media Audit",
  "Strategic Best Practices",
  "Facebook Messenger Optimization",
  "Facebook Posting Ideas",
  "Creating a Content Calendar",
  "Facebook Monetization",
      ]
    },
    {
      "title": "Harnessing the Power of X Marketing",
      "icon": "/Images/course/m11.png",
      "points": [
       "Introduction to X",
  "Setting Up an Optimized X Profile",
  "Content Strategy on X",
  "X Analytics",
  "Quick Guided Setup",
  "Success Stories and Case Studies",
      ]
    },
    {
      "title": "Mastering LinkedIn & LinkedIn Marketing",
      "icon": "/Images/course/m12.png",
      "points": [
          "Build a Powerful LinkedIn Presence to Attract Jobs & Projects",
  "Introduction to LinkedIn",
  "Setting Up a LinkedIn Profile: Essential Components",
  "Optimizing Your LinkedIn Profile",
  "LinkedIn Analytics",
  "What Is LinkedIn SSI ?",
      ]
    },
    {
      "title": "Mastering Instagram for Digital Marketing",
      "icon": "/Images/course/m13.jpg",
      "points": [
        "Instagram Profile Optimization",
  "Instagram Competitor & Brand Audit",
  "Instagram Tools",
  "Instagram Account Audit",
  "Campaign Bucket Sheet",
  "Social Media Content Planning (Content Calendar)",
  "Influencer Marketing & Research",
  "Instagram Marketing for Influencers",
      ]
    },
    {
      "title": "Landing Page Strategies That Work",
      "icon": "/Images/course/m14.png",
      "points": [
         "Key Elements of a Landing Page",
  "User Flow Designing",
  "Landing Page Copywriting",
  "Building Action, Trust & Thank-You Pages",
  "A/B Versions of Landing Pages",
  "Key Landing Page Creation Tools",
      ]
    },
    {
      "title": "Meta Advertising (Instagram & Facebook)",
      "icon": "/Images/course/m15.png",
      "points": [
        "Meta Ads: From Beginner to Advanced",
  "Meta Ads Ecosystem",
  "Meta Ad Campaign Structure",
  "Campaign Objective Types",
  "Audience Targeting Basics",
  "Meta Ad Formats",
  "Meta Ads Policy & Compliance",
  "Scaling Your Meta Ad Campaign",
      ]
    },
    {
      "title": "Search Engine Optimization Introduction to SEO",
      "icon": "/Images/course/m16.png",
      "points": [
       "What Is a Search Engine?",
  "Types of SEO",
  "SEO Techniques",
  "Algorithms & Updates",
  "Keyword Research in SEO",
    "Blogging",
      " On-Page Optimization",
        "HTML Optimization For Search Engine",
          "Off-Page SEO",
          "Google Search Console & Webmaster Tools",
          "Technical SEO",

          "SEO Audit",

      ]
    },
    {
      "title": "Google Analytics & Ga4",
      "icon": "/Images/course/m17.png",
      "points": [
        "what is Google Analytics 4",
        "Google Analytics Hierarchy Overview",
        "Steps For Configuring GA4 & Installation in Website",
        "Types Of Analytics Reports"
        
      ]
    },
    {
      "title": "Google Ads Complete Guide ",
      "icon": "/Images/course/m18.png",
      "points": [
   "Google Search Ads",
  "Bing Ads",
  "Search Ad Case Study (Real Estate)",
  "Display Advertising",
  "Rebranding & Remarketing",
  "Video Advertising",
  "Shopping Advertising",
      ]
    }








    ,
    {
      "title": "Email Marketing ",
      "icon": "/Images/course/m18.png",
      "points": [
   "Strategic Significance of Email Marketing",
  "Core Objectives and Strategic Benefits of Remarketing",
  "Application and ROI Optimization Through Remarketing",
  "Key Categories of Email Campaigns",
  "Leading Email Marketing Platforms",
  "Email Copywriting and Optimization Best Practices",
  "Marketing Automation & Drip Campaigns",
  "Email List Building and Lead Capture Tools",
      ]
    },
    {
      "title": "Quora Marketing ",
      "icon": "/Images/course/m18.png",
      "points": [
  "Overview of Quora for Brand Visibility",
  "Creating and Optimizing Quora Profiles",
  "Identifying and Answering High-Value Questions",
  "Crafting Engaging, SEO-Friendly Answers",
  "Using Quora Spaces for Community Growth",
  "Quora Content Strategy and Consistency",
  "Driving Website Traffic via Quora",
  "Introduction to Quora Ads",
  "Tracking Performance and Analytics",
      ]
    },
    {
      "title": "Pinterest Marketing",
      "icon": "/Images/course/m18.png",
      "points": [
     "Pinterest as a Visual Search Engine",
  "Setting Up a Business Profile and Boards",
  "Pinterest SEO and Keyword Optimization",
  "Seasonal Trends and Campaign Ideas",
  "Introduction to Promoted Pins (Ads)",
  "Analyzing Pin Performance with Pinterest Analytics",
      ]
    },
    {
      "title": "Growth Hacking  ",
      "icon": "/Images/course/m18.png",
      "points": [
     "Introduction to Growth Hacking",
  "Understanding the AARRR Framework",
  "Identifying Growth Loops and Funnels",
  "Customer Persona and Data-Driven Targeting",
  "Landing Page and Conversion Rate Optimization (CRO)",
  "Email and Automation for Scalable Growth",
      ]
    },
    {
      "title": "Online Reputation Managment",
      "icon": "/Images/course/m18.png",
      "points": [
    "Introduction to Online Reputation Management (ORM)",
  "Key Elements of Reputation Management",
  "Monitoring Brand Mentions and Sentiments",
  "Handling Negative Reviews and Feedback",
  "Building a Positive Online Image",
  "ORM for Individuals vs Businesses",
  "Search Engine Reputation Management (SERM)",
  "Social Media and ORM Integration",
  "Crisis Management in Digital Reputation",
  "ORM Tools and Reporting",
      ]
    },
    {
      "title": "Inbound Marketing ",
      "icon": "/Images/course/m18.png",
      "points": [
   "Inbound Marketing vs Outbound Marketing",
  "Audience Profiling and Buyer Persona Mapping",
  "Customer Journey and Buyer Touchpoint Mapping",
  "High-Impact Content Formats by Funnel Stage",
  "Strategic Content Distribution Channels",
  "Content Ideation and Topic Generation",
  "Creating a Content Ideation Framework",
  "Content Repurposing Strategy",
      ]
    },
    {
      "title": "Web Content Writing ",
      "icon": "/Images/course/m18.png",
      "points": [
     "Key Fundamentals of Content Writing",
  "Content Writing for Business Websites",
  "Leading Tools for Content Creation",
  "AI-Powered Tools for Content Development",
  "Conversational Content for Social Media",
  "E-commerce Content Writing",
  "Content Writing vs Copywriting",
  "Best Practices for Copywriting",
  "Creating Effective Ad Copy",
  "Writing for Landing Pages",
  "Funnel Copywriting – WhatsApp and Newsletters",
  "Storytelling in Content",
      ]
    },
    {
      "title": "Selling On Amazon & Market Places  ",
      "icon": "/Images/course/m18.png",
      "points": [
 "Prerequisites for Creating an Amazon Seller Account",
  "Product Listing Best Practices",
  "Order Management and Shipping",
  "Pricing and Payments",
  "Amazon SEO (Search Engine Optimization)",
  "Amazon Ads (Advertising)",
      ]
    },
    {
      "title": "Starting an Agency",
      "icon": "/Images/course/m18.png",
      "points": [
   "Leading Freelancing Platforms",
  "Crafting a Compelling Freelancer/Business Profile",
  "Strategic Pricing for Services",
  "Live Walkthrough: Project Acquisition Strategies",
  "Small Agency/Freelancer Lead Generation",
  "Case Studies",
      ]
    },
    {
      "title": "Blogging, Adsense & Affiliate Marketing",
      "icon": "/Images/course/m18.png",
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
      "title": "AI Powered Digital Marketing",
      "icon": "/Images/course/m18.png",
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
      "title": "Interview Process and Preparation",
      "icon": "/Images/course/m18.png",
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
          alt={item.title}
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