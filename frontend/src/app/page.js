import About from './components/About';
import Banner2 from './components/Banner2';
import Slider from './components/Slider'
import Course from './components/Course';
import Students from './components/Students';
import Journey from './components/Journey';
import Tagline from './components/Tagline';
// import Scroll from './components/Scroll'
export default function Home() {
  return (
    <div className="min-h-screen">
{/* <Banner/> */}

<Banner2/>
<Slider/>

<About/>
{/* <Scroll/> */}

<Journey/>

<Students />
<Course/>

<Tagline/>



{/* <Courses/> */}
    </div>
  );
}
