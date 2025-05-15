'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMotion() {
  useEffect(() => {
    const splitText = () => {
      const elements = document.querySelectorAll('[data-split]');
      elements.forEach((el) => {
        const text = el.innerText;
        const split = text.split('').map((char) =>
          char === ' ' ? '<span>&nbsp;</span>' : `<span>${char}</span>`
        );
        el.innerHTML = split.join('');
      });
    };

    splitText();

    gsap.to('.scroll-gif img', {
      repeat: -1,
      duration: 10,
      rotate: 360,
      ease: "steps(40)",
    });

    // gsap.to('.scroll-text span', {
    //   repeat: -1,
    //   duration: 1,
    //   y: 'random(6, -6)',
    //   rotate: 'random(8, -8)',
    //   scale: 'random(0.8, 1.1)',
    //   ease: 'steps(2)',
    //   repeatRefresh: true,
    //   stagger: 0.1,
    // });

    const scrollAnim = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll-wrapper',
        scrub: 0.6,
        toggleActions: 'restart none none none',
      },
    });

    scrollAnim
      .to('.gifbox--1', {
        x: '50vw',
        ease: 'steps(30)',
      })
      .to(
        '.gifbox--2',
        {
          x: '-50vw',
          ease: 'steps(20)',
        },
        '<'
      )
      // .to(
      //   '.scroll-text',
      //   {
      //     y: -30,
      //     ease: 'steps(6)',
        // },
        // '<'
      // );
  }, []);

  return (
    <div className="scroll-wrapper relative h-[300px] lg:h-[600px] xl:min-h-screen overflow-hidden">
      {/* <h1
        className="scroll-text fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wider text-4xl z-10"
        data-split
      >
        Scroll Down!
      </h1> */}

      {/* GIF 1 */}
      <div className="scroll-gif gifbox--1 absolute left-0 top-1/2 mt-[-75px] w-[80px] lg:w-[150px]">
        <img src="/Images/arrow.gif" alt="GIF 1" className="w-full" />
      </div>

      {/* GIF 2 */}
      <div className="scroll-gif gifbox--2 absolute right-0 top-1/2 mt-[-75px] w-[80px] lg:w-[150px]">
        <img src="/Images/arrow.gif" alt="GIF 2" className="w-full" />
      </div>
    </div>
  );
}
