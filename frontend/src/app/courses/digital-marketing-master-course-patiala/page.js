import React from 'react'
import Modules from '../../components/courses/dm'
import InnerBanner from '@/app/components/InnerBanner'

export const metadata = {
  title: "Best Website Development & Web Design Course in Patiala | DigitalPaajiAcademy",
  description:
    "Join the best website development and web design course in Patiala with practical modules, real projects, and expert training. DigitalPaajiAcademy offers the most affordable and advanced web design & development course in Patiala for students, beginners, and freelancers.",
};

function page() {
  return (
    <div className='text-black  pt-[100px]  text-7xl min-h-screen  '>
<InnerBanner heading='Video Editing Course' />
<Modules/>



    </div>
  )
}

export default page