


"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {

  const modules = [
    {
      "title": "MODULE 1: Introduction to Photoshop",
      "icon": "/Images/course/graphic/1.png",
      "points": [
     "What is Photoshop & where it’s used",
"Workspace tour (Panels, Tools, Menus)",
"Creating documents (Print, Web, Social)",
"Color modes and resolutions",
"Saving formats (PSD, JPEG, PNG, etc...)"

      ]
    },
    {
      "title": "MODULE 2:  Tools Mastery Basics",
      "icon": "/Images/course/graphic/2.png",
      "points": [
      "Move Tool, Marquee Tools",
"Lasso, Polygon, Magnetic Lasso",
"Quick Selection, Magic Wand",
"Crop, Straighten, Perspective Crop",
"Eyedropper, Color Picker"

      ]
    },
    {
      "title": "MODULE 3:  Layers & Layer Management",
      "icon": "/Images/course/graphic/3.png",
      "points": [
"Creating & managing layers",
"Layer order, grouping, locking",
"Layer styles (shadow, stroke, glow)",
"Blend modes (understanding all modes)",
"Opacity vs Fill"

      ]
    },
    {
      "title": "MODULE 4: Selection & Masking (Advanced)",
      "icon": "/Images/course/graphic/4.png",
      "points": [
     "Using Select & Mask",
"Hair selection (Refine Edge)",
"Pen Tool masterclass (paths, anchor points)",
"Vector shapes & custom shapes",
"Clipping masks vs Layer masks"

      ]
    },
    {
      "title": "MODULE 5: Retouching & Manipulation",
      "icon": "/Images/course/graphic/5.png",
      "points": [
        "Spot Healing Brush, Healing Brush",
"Patch Tool, Clone Stamp Tool",
"Frequency Separation (skin retouching)",
"Dodge & Burn",
"Liquify for body & face edits",
"Object removal with Content-Aware Fill"

      ]
    },
    {
      "title": "MODULE 6: Working With Text",
      "icon": "/Images/course/graphic/6.png",
      "points": [
"Typography basics",
"Character & Paragraph panels",
"Text effects (gold, neon, 3D text)",
"Poster typography layout",
"Using downloaded fonts professionally"

      ]
    },
    {
      "title": "MODULE 7: Filters & Smart Objects",
      "icon": "/Images/course/graphic/7.png",
      "points": [
"Convert to smart object",
"Blur, Gaussian, Motion blur for effects",
"Camera Raw Filter",
"Sharpening techniques",
"Creative filters & artistic effects"

      ]
    },
    {
      "title": "MODULE 8:  Image Adjustments",
      "icon": "/Images/course/graphic/8.png",
      "points": [
 "Levels, Curves",
"Hue/Saturation",
"Vibrance",
"Color Balance",
"Exposure",
"Gradient Maps",
"Adjustment layers workflow"

      ]
    },
    {
      "title": "MODULE 9:  Compositing & Photo Manipulation",
      "icon": "/Images/course/graphic/9.png",
      "points": [
       "Blending multiple images",
"Lighting & shadow creation",
"Matching colors",
"Creating fantasy/creative composites",
"Double exposure effects"

      ]
    },
    {
      "title": "MODULE 10: Social Media Design",
      "icon": "/Images/course/graphic/10.png",
      "points": [
      "Instagram posts, reels cover, stories",
"YouTube thumbnails",
"Facebook ads",
"Google ads banners",
"Designing with grids and safe zones",
"Exporting for best quality"

      ]
    },
    {
      "title": "MODULE 11: Print Design",
      "icon": "/Images/course/graphic/11.png",
      "points": [
       "Visiting cards, brochures, posters",
"CMYK workflow",
"Bleeds, margins, print-ready export",
"High-resolution export settings"

      ]
    },
    {
      "title": "MODULE 12: Advanced Tools & Automation",
      "icon": "/Images/course/graphic/12.png",
      "points": [
     "Actions automation",
"Batch processing",
"Image Processor",
"Creating reusable templates"

      ]
    },
    {
      "title": "MODULE 13:  Branding & Mockups",
      "icon": "/Images/course/graphic/13.png",
      "points": [
       "Creating a brand color palette",
"Logo placement guidelines",
"Using smart objects for mockups",
"Packaging mockups",
"Social branding kit designs"

      ]
    },
    {
      "title": "MODULE 14:  Real Projects (Portfolio Building)",
      "icon": "/Images/course/graphic/14.png",
      "points": [
        "10 Instagram posts",
"3 Professional posters",
"3 Product ads",
"3 Thumbnails",
"2 Logo mockups",
"1 full brand kit",
"1 photo manipulation artwork",
"1 complete printable design"

      ]
    },
    {
      "title": "MODULE 15:  Final Exam & Certification",
      "icon": "/Images/course/graphic/15.png",
      "points": [
       "Full design project",
        "File submission & feedback",
"Certification test on Photoshop tools and real-world design tasks"

      ]
    },
  ]


  return (
    <div className="relative   bg-white">

           <div
          className="absolute top-0 inset-0 opacity-20 "
          style={{
            backgroundImage: "url(/Images/course/bg.png)",          }}
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