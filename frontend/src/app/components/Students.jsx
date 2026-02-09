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
   { type: "video", src: "/Images/student1.mp4" },
  { type: "video", src: "/Images/student2.mp4" },
  { type: "video", src: "/Images/student3.mp4" },
  { type: "video", src: "/Images/student4.mp4" },

];




gsap.registerPlugin(ScrollTrigger)

function Students() {

  // const [isPlaying, setIsPlaying] = useState({})

  // const videos = [
  //   '/Images/student1.mp4',
  //   '/Images/student2.mp4',
  //   '/Images/student3.mp4',
  //   '/Images/student4.mp4',
  // ]

  // const handlePlayPause = (index)=>{
  //   const video = videoRefs.current[index];
  //   if(!video) return;
  //   if(video.paused){
  //     video.play();
  //     setIsPlaying((prev)=>({...prev,[index]:true}))
  //   }else{
  //     video.pause();
  //     setIsPlaying((prev)=>({...prev,[index]:false}))

  //   }
  // }
const swiperRef = useRef(null);
const videoRefs = useRef([]);
let resumeTimeout;

const pauseAutoplay = () => {
  swiperRef.current?.autoplay?.stop();
};

const resumeAutoplay = () => {
  clearTimeout(resumeTimeout);
  resumeTimeout = setTimeout(() => {
    swiperRef.current?.autoplay?.start();
  }, 2000);
};

const handlePlay = (index) => {
  pauseAutoplay();

  // pause other videos
  videoRefs.current.forEach((vid, i) => {
    if (vid && i !== index) {
      vid.pause();
    }
  });
};

const handlePause = () => {
  resumeAutoplay();
};


  return (
    <div 
    
    className='mx-6 lg:mx-12 xl:mx-24 py-24'>
      {/* Text Row */}
      <div className='text-center mb-16 space-y-8'>
        <h3 className="bungee-shade-regular text-5xl md:text-5xl xl:text-7xl font-bold leading-tight">
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


<div className="relative h-[65vh] md:h-[75vh]">
 <Swiper
  effect="coverflow"
  centeredSlides
  grabCursor
  loop
  slidesPerView={1}
  spaceBetween={20}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
        spaceBetween: 0,
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
  className=" "
>
{frames.map((frame, index) => (
  <SwiperSlide key={index}>
    <div className="relative h-[550px] 2xl:h-[690px] w-fit rounded-xl">

      <video
        ref={(el) => (videoRefs.current[index] = el)}
        src={frame.src}
        className="w-full h-full object-cover"
        playsInline
        controls
        preload="metadata"
        onPlay={() => handlePlay(index)}
        onPause={handlePause}
        onEnded={handlePause}
      />

      {/* Gradient mask */}
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" /> */}

    </div>
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



      {/* 
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
              className='w-full h-full object-contain'
            />
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Students
