"use client"
import About from '../components/About';
import Banner2 from '../components/Banner2';
import Slider from '../components/Slider'
import Course from '../components/Course';
import Students from '../components/Students';
import Journey from '../components/Journey';
import Tagline from '../components/Tagline';
export default function page() {
  return (
    <div className="min-h-screen">


<Banner2 className="relative z-[50] pt-[200px]"/>
<Slider/>

<About/>

<Course/>

<Journey/>

<Students />

<Tagline/>



    </div>
  );
}
