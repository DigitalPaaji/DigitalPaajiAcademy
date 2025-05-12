// import Image from "next/image";
// import Banner from "./components/Banner";
// import New from './components/New'
import About from './components/About';
import Banner2 from './components/Banner2';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Courses from './components/Courses';
import Course from './components/Course';
import Students from './components/Students';
import Journey from './components/Journey';
import Tagline from './components/Tagline';
import Scroll from './components/Scroll';
export default function Home() {
  return (
    <div className="min-h-screen">
<Navbar/>
{/* <Banner/> */}

<Banner2/>
<Slider/>

<About/>
<Journey/>
<Course/>

<Students/>
<Tagline/>
<Scroll/>

{/* <Courses/> */}
    </div>
  );
}
