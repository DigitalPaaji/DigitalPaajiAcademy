// import Image from "next/image";
// import Banner from "./components/Banner";
// import New from './components/New'
import About from './components/About';
import Banner2 from './components/Banner2';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Courses from './components/Courses';
import Course from './components/Course';
export default function Home() {
  return (
    <div className="min-h-screen">
{/* <Banner/> */}
<Navbar/>
{/* <Banner2/> */}
<Slider/>

<About/>
<Course/>
{/* <Courses/> */}
    </div>
  );
}
