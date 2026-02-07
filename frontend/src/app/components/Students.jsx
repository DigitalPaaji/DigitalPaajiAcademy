"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PiPlayCircleThin } from "react-icons/pi";



const frames = [
  { type: "fashion", url: "https://www.instagram.com/reel/DUYfekBEyH3/" },
  { type: "fashion", url: "https://www.instagram.com/reel/XXXXXXXXXXX/" },
    { type: "fashion", url: "https://www.instagram.com/reel/DUYfekBEyH3/" },
  { type: "fashion", url: "https://www.instagram.com/reel/XXXXXXXXXXX/" },  { type: "fashion", url: "https://www.instagram.com/reel/DUYfekBEyH3/" },
  { type: "fashion", url: "https://www.instagram.com/reel/XXXXXXXXXXX/" },  { type: "fashion", url: "https://www.instagram.com/reel/DUYfekBEyH3/" },
  { type: "fashion", url: "https://www.instagram.com/reel/XXXXXXXXXXX/" },
];

const getInstagramEmbedUrl = (url, isActive) => {
  const cleanUrl = url.split("?")[0];

  const params = new URLSearchParams({
    autoplay: isActive ? "1" : "0",
    muted: "1",          // MUST be muted for autoplay
    loop: "1",
  });

  return `${cleanUrl}embed?${params.toString()}`;
};


gsap.registerPlugin(ScrollTrigger)

function Students() {
  const videoRefs = useRef([])
  const [isPlaying, setIsPlaying] = useState({})

  const videos = [
    '/Images/student1.mp4',
    '/Images/student2.mp4',
    '/Images/student3.mp4',
    '/Images/student4.mp4',
  ]

  const handlePlayPause = (index)=>{
    const video = videoRefs.current[index];
    if(!video) return;
    if(video.paused){
      video.play();
      setIsPlaying((prev)=>({...prev,[index]:true}))
    }else{
      video.pause();
      setIsPlaying((prev)=>({...prev,[index]:false}))

    }
  }

    const [loadedFrames, setLoadedFrames] = useState(new Array(frames.length).fill(false));
  
    const handleIframeLoad = (index) => {
      setLoadedFrames(prev => {
        const newLoaded = [...prev];
        newLoaded[index] = true;
        return newLoaded;
      });
    };
  return (
    <div 
    
    className='mx-6 lg:mx-12 xl:mx-24 py-24'>
      {/* Text Row */}
      <div className='flex flex-col  justify-between items-start mb-16 gap-8'>
        <h3 className="bungee-shade-regular text-5xl md:text-5xl xl:text-7xl font-bold leading-tight text-center lg:text-left ">
          Hear from Our Learners
        </h3>
        <p>
          From landing jobs to launching freelance careers, our learners share how the Digital Paaji Academy experience helped them grow personally and professionally. Our expert instructors go beyond theory. They focus on real-world problem-solving, professional communication, and personality development — making sure you're not just industry-ready, but future-ready.
        Whether it's cracking their first client project, clearing an interview, building a portfolio from scratch, or becoming confident speakers — our learners continue to break barriers and set new standards for success.

        <br />
        <br />
        <strong className='poppins text-2xl '>Real stories, Real results, Real impact</strong>
   
        </p>
      </div>


<section className=" w-full py-20">


<div className="relative">
  <Swiper
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={1}
    spaceBetween={20}
    loop={true}
    autoplay={{
      delay:3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }}
    breakpoints={{
      // Mobile (0px - 639px)
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }
      },
      // Small tablet (640px - 767px)
      640: {
        slidesPerView: 1.4,
        spaceBetween: 25,
        coverflowEffect: {
          rotate: 0,
          stretch: -20,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }
      },
      // Tablet (768px - 1023px)
      768: {
        slidesPerView: 2.4,
        spaceBetween: 30,
        coverflowEffect: {
          rotate: 0,
          stretch: -60,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }
      },
      // Desktop (1024px - 1279px)
      1024: {
        slidesPerView: 2.8,
        spaceBetween: 35,
        coverflowEffect: {
          rotate: 0,
          stretch: -70,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }
      },
      // Large desktop (1280px+)
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
        coverflowEffect: {
          rotate: 0,
          stretch: -80,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }
      },
    }}
    modules={[EffectCoverflow, Navigation, Autoplay]}
    className="h-[65vh] md:h-[75vh]"
  >
    {frames.map((frame, index) => (
      <SwiperSlide key={index}>
        {({ isActive }) => (
          <div className="relative overflow-hidden h-full">
            {/* Loading overlay */}
            {!loadedFrames[index] && (
              <div className="absolute inset-0 bg-transparent animate-pulse flex items-center justify-center z-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-[#cc5f4d]/20 border-t-[#cc5f4d] rounded-full animate-spin mb-4"></div>
                  <span className="text-[#cc5f4d] font-medium">Loading...</span>
                </div>
              </div>
            )}

            {/* Video container */}
            <div
              className={`transition-all duration-700 overflow-hidden h-full
                ${
                  isActive
                    ? 'scale-100 blur-0 opacity-100'
                    : 'scale-90 blur-[2px] opacity-90'
                }
                ${!loadedFrames[index] ? 'opacity-0' : 'opacity-100'}
              `}
            >
              {/* YouTube embed for Shorts */}
             {/* Instagram Reel embed */}
<div className="w-full h-full overflow-hidden bg-transparent flex justify-center items-center">
  <iframe
    key={`${frame.url}-${isActive}`} // 🔥 forces reload on active change
    src={getInstagramEmbedUrl(frame.url, isActive)}
    loading="lazy"
    className="w-full h-full border-0 transition-opacity duration-700"
    onLoad={() => handleIframeLoad(index)}
    style={{
      opacity: loadedFrames[index] ? 1 : 0,
    }}
    title={`Instagram Reel - ${frame.type} ${index + 1}`}
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowFullScreen
  />
</div>



              {/*
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className={`transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#cc5f4d]/80 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Navigation buttons - Visible on ALL screen sizes */}
  <div className="swiper-button-prev 
    !flex !items-center !justify-center
    !text-[#cc5f4d] 
    !w-8 !h-8 md:!w-10 md:!h-10 lg:!w-12 lg:!h-12 
    !bg-white/80 !rounded-full 
    !shadow-lg
    after:!text-[18px] md:after:!text-[22px] lg:after:!text-[28px]
    !left-2 md:!left-4
    !top-1/2 !-translate-y-1/2
  "></div>
  
  <div className="swiper-button-next 
    !flex !items-center !justify-center
    !text-[#cc5f4d] 
    !w-8 !h-8 md:!w-10 md:!h-10 lg:!w-12 lg:!h-12 
    !bg-white/80 !rounded-full 
    !shadow-lg
    after:!text-[18px] md:after:!text-[22px] lg:after:!text-[28px]
    !right-2 md:!right-4
    !top-1/2 !-translate-y-1/2
  "></div>
</div>



</section>



      {/* Video Grid */}
      <div 
      
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center justify-items-center  gap-6'>
        {videos.map((video, index) => (
          <div
            key={index}
            // ref={el => (videosRef.current[index] = el)}
            className={`relative group overflow-hidden w-full h-[550px] 2xl:h-[690px] rounded-xl ${
              index % 2 === 1 ? 'lg:mt-12' : ''
            }`}
          >
            {!isPlaying[index] && (
              <button onClick={()=>handlePlayPause(index)}
               className="absolute z-10 inset-0 flex items-center justify-center bg-black/40 hover:bg-black/0 transition duration-300"
               ><PiPlayCircleThin  className='w-20 h-20 text-gray-200'/></button>
            )}
            <video
              src={video}
              ref={(el)=>(videoRefs.current[index] = el)}
              loading="lazy"
              onClick={()=> handlePlayPause(index)}
              controls={false}
              // autoPlay
              // muted
              playsInline
              loop
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students
