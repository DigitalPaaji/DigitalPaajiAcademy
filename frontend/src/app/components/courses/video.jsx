


"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {

  const modules = [
    {
      "title": "MODULE 1: Introduction to Video Editing",
      "icon": "/Images/course/m1.png",
      "points": [
        "What is video editing",
        "Types of editing: cinematic, vlog, reels",
        "FPS, resolution, bitrate basics",
        "Video formats (MP4, MOV, ProRes)",
        "Understanding codecs"
      ]
    },
    {
      "title": "MODULE 2: Adobe Premiere Pro Workspace & Basics",
      "icon": "/Images/course/m2.png",
      "points": [
        "Interface overview",
        "Importing media",
        "Timeline navigation",
        "Keyboard shortcuts for faster editing",
        "Understanding sequence settings"
      ]
    },
    {
      "title": "MODULE 3: Basic Editing Tools",
      "icon": "/Images/course/m3.png",
      "points": [
        "Razor, Slip, Slide, Ripple, Rolling edits",
        "Trimming techniques",
        "Markers & workspace",
        "Multi-track editing",
        "Linking & unlinking video/audio"
      ]
    },
    {
      "title": "MODULE 4: Audio Editing + Sound Design",
      "icon": "/Images/course/m4.png",
      "points": [
        "Audio levels, keyframes",
        "Reducing noise",
        "Using Essential Sound panel",
        "Adding SFX, whooshes, cinematic hits",
        "Syncing audio with video"
      ]
    },
    {
      "title": "MODULE 5: Color Correction & Grading",
      "icon": "/Images/course/m5.png",
      "points": [
        "Lumetri Color panel",
        "Exposure, contrast, temperature, tint",
        "LUTs: how to use professionally",
        "Cinematic color grading workflow",
        "Skin tone correction"
      ]
    },
    {
      "title": "MODULE 6: Text, Titles & Graphics",
      "icon": "/Images/course/m6.png",
      "points": [
        "Essential Graphics panel",
        "Lower thirds",
        "Title animation",
        "Kinetic typography basics",
        "Creating templates for reuse"
      ]
    },
    {
      "title": "MODULE 7: Transitions (Basic to Advanced)",
      "icon": "/Images/course/m7.png",
      "points": [
        "Cut-on-action",
        "Match cuts",
        "Speed ramping (smooth 60fps ramp)",
        "Morph cut",
        "Custom transitions",
        "Luma fade",
        "Glitch & zoom transitions"
      ]
    },
    {
      "title": "MODULE 8: Effects & Motion",
      "icon": "/Images/course/m8.png",
      "points": [
        "Scale, Position, Rotation",
        "Keyframing",
        "Motion blur",
        "Warp Stabilizer",
        "Green screen editing (Ultra Key)",
        "Nesting clips"
      ]
    },
    {
      "title": "MODULE 9: Exporting for All Platforms",
      "icon": "/Images/course/m9.png",
      "points": [
        "YouTube, Instagram Reel, FB settings",
        "High-quality export",
        "Low-size export (client-friendly)",
        "VBR vs CBR bitrate",
        "Best codecs (H.264 / H.265)"
      ]
    },
    {
      "title": "MODULE 10: After Effects – Introduction",
      "icon": "/Images/course/m10.png",
      "points": [
        "Interface & workflow",
        "Compositions & layers",
        "Importing from Premiere (Dynamic Link)",
        "Keyframes: spatial & temporal",
        "Graph editor basics"
      ]
    },
    {
      "title": "MODULE 11: Text Animation Masterclass",
      "icon": "/Images/course/m11.png",
      "points": [
        "Write-on text animation",
        "Typewriter effect",
        "Kinetic typography",
        "Callouts & infographics",
        "Lower third animations"
      ]
    },
    {
      "title": "MODULE 12: Motion Graphics",
      "icon": "/Images/course/m12.png",
      "points": [
        "Shape layers",
        "Line animations",
        "Logo animation",
        "Icon animation",
        "Animated transitions",
        "Using parenting & pick whip"
      ]
    },
    {
      "title": "MODULE 13: Visual Effects (VFX Essentials)",
      "icon": "/Images/course/m13.jpg",
      "points": [
        "Tracking (point, planar, mocha basics)",
        "Screen replacement",
        "Object removal",
        "Camera Shake effects",
        "Light leaks & overlays",
        "Green screen keying (Keylight 1.2)"
      ]
    },
    {
      "title": "MODULE 14: Advanced After Effects Techniques",
      "icon": "/Images/course/m14.png",
      "points": [
        "Expressions (wiggle, loop, delay)",
        "3D layers",
        "Camera & lights",
        "Parallax animation",
        "Fake 3D text"
      ]
    },
    {
      "title": "MODULE 15: Premiere Pro + After Effects Integration",
      "icon": "/Images/course/m15.png",
      "points": [
        "Dynamic Link workflow",
        "Editing in Premiere, animating in AE",
        "Replacements & final render pipeline",
        "Building reusable templates for clients"
      ]
    },
    {
      "title": "MODULE 16: Content Creation Special Module",
      "icon": "/Images/course/m16.png",
      "points": [
        "Editing YouTube vlogs",
        "Short-form content (reels/tiktok)",
        "Wedding highlights",
        "Corporate videos",
        "Event recaps",
        "Cinematic B-roll editing"
      ]
    },
    {
      "title": "MODULE 17: Real Projects (Portfolio Building)",
      "icon": "/Images/course/m17.png",
      "points": [
        "3 YouTube videos",
        "5 Instagram reels",
        "1 cinematic montage",
        "1 wedding highlight sample",
        "1 logo animation",
        "1 full motion graphics ad",
        "1 special effects clip (tracking / screen replace)"
      ]
    },
    {
      "title": "MODULE 18: Final Exam + Certification",
      "icon": "/Images/course/m18.png",
      "points": [
        "Full video project",
        "Motion graphics task",
        "Export & delivery workflow test",
        "Feedback & certification"
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