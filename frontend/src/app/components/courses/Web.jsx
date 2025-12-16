"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AddOn() {
  const modules = [
    {
      title: "MODULE 1: Introduction to Web Design",
      icon: "/Images/course/web/1.png",
      points: [
        "Web Design vs Development",
        "Domain, Hosting, DNS",
        "Types of Websites",
        "UI/UX Basics",
        "Wireframes & Layout Planning",
      ],
    },
    {
      title: "MODULE 2: WordPress Basics",
      icon: "/Images/course/web/2.png",
      points: [
        "Installing WordPress (Local + Hosting)",
        "Dashboard Overview",
        "Posts vs Pages",
        "Media Library",
        "Users & Roles",
      ],
    },
    {
      title: "MODULE 3: Themes & Customization",
      icon: "/Images/course/web/3.png",
      points: [
        "Installing Themes",
        "Customizer",
        "Child Theme Creation",
        "Theme File Structure",
        "Safe Editing Methods",
      ],
    },
    {
      title: "MODULE 4: Elementor Page Builder (Master Module)",
      icon: "/Images/course/web/4.png",
      points: [
        "Elementor Interface",
        "Containers vs Sections",
        "Global Styles",
        "Responsive Editing",
        "Template Building",
        "Popup Builder",
      ],
    },
    {
      title: "MODULE 5:  Essential WordPress Plugins",
      icon: "/Images/course/web/5.png",
      points: [
        "Security, Backup",
        "SEO Plugins",
        "Cache & Speed",
        "Form Builders",
        "Analytics, SMTP, Redirections",
      ],
    },
    {
      title: "MODULE 6: HTML & CSS for WordPress",
      icon: "/Images/course/web/6.png",
      points: [
        "Inspect Element",
        "Editing CSS in Elementor",
        "Adding Custom CSS",
        "Fixing Layout Issues",
        "Animations & Hover Effects",
      ],
    },
    {
      title: "MODULE 7: Advanced Elementor Workflow",
      icon: "/Images/course/web/7.png",
      points: [
        "Flexbox Containers",
        "Hero Sections",
        "Motion Effects",
        "Lottie Animations",
        "Reusable Blocks",
        "Full Website Templates",
      ],
    },
    {
      title: "MODULE 8: Canva for Website Graphics",
      icon: "/Images/course/web/8.png",
      points: [
    "Canva Basics",
    "Creating Hero Banners for Website",
    "Website Icons, Illustrations, Buttons",
    "Product banners / service graphics",
    "Website section backgrounds",
    "Canva → Web Export (PNG, JPG, WEBP)",
      ],
    },
    {
      title: "MODULE 9: ACF + Custom Post Types",
      icon: "/Images/course/web/9.png",
      points: [
        "ACF Field Types",
       "CPT Creation",
       "Dynamic Content",
        "Elementor + ACF Templates",
       "Loops & Repeaters"
      ],
    },
    {
      title: "MODULE 10: Theme File Modifications",
      icon: "/Images/course/web/10.png",
      points: [
       "Theme Hierarchy",
"Editing header.php, footer.php, etc.",
"Using Child Themes Safely",
"Code Snippets Plugin",
"Adding Tracking Codes"

      ],
    },
    {
      title: "MODULE 11: WooCommerce",
      icon: "/Images/course/web/11.png",
      points: [
 "WooCommerce Setup",
"Product Types",
"Payment Gateways",
"Designing Product + Shop Pages",
"Cart & Checkout Customization",
"Shipping Settings"

      ],
    },
    {
      title: "MODULE 12: Speed Optimization",
      icon: "/Images/course/web/12.png",
      points: [
        "Image Compression, WebP",
"Preloading Fonts",
"Caching & Minification",
"Removing Heavy Plugins",
"Lightweight Themes"

      ],
    },
    {
      title: "MODULE 13:  Security & Maintenance",
      icon: "/Images/course/web/13.png",
      points: [
"Regular Backups",
"Security Scans",
"Safe Updates",
"Spam Blocking",
"SSL/HTTPS",
"Malware Cleaning Basics"

      ],
    },
    {
      title: "MODULE 14: Real Client Workflow",
      icon: "/Images/course/web/14.png",
      points: [
       "Taking Requirements",
"Creating Sitemap + Content Structure",
"Choosing Theme Builder",
"Homepage First Approach",
"Designing Inner Pages",
"Final QA + Speed Check",
"Delivering Websites Professionally"

      ],
    },
    {
      title: "MODULE 15:  Hosting, Migration & Deployment",
      icon: "/Images/course/web/15.png",
      points: [
"Installing WordPress on Server",
"DNS + Email Setup",
"Subdomains",
"Migration Tools",
"Staging Sites"

      ],
    },
    {
      title: "MODULE 16: Portfolio Projects",
      icon: "/Images/course/web/16.png",
      points: [
        "Business Site",
"Portfolio (ACF + CPT)",
"Blog",
"E-commerce",
"Landing Page",
"Resume Website"

      ],
    },
    {
      title: "Final Exam + Certification",
      icon: "/Images/course/web/17.png",
      points: [
        "Build a Full Website",
"Speed, Design, Mobile Score",
"Certification"
      ],
    }
  ];

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
        src="/Images/course/web.png"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 w-full h-auto  opacity-10"
        src="/Images/course/web.png"
        alt=""
      />
      <div className=" bg-linear-to-b from-[#e9872436] py-24 via-transparent to-[#e9872428]">
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
                      alt={""}
                      className="w-full  h-auto object-cover"
                    />
                  </div>
                  <div className=" text-start">
                    {/* Title */}
                    <h2 className=" text-2xl text-black">{item.title}</h2>

                    {/* Points */}
                    <ul className="text-base md:text-lg space-y-2  ">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start  gap-2 text-left"
                        >
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
