import "./globals.css";
// import { Rubik_Doodle_Shadow } from 'next/font/google';
import Icons from "./components/Icons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const rubikFont = Rubik_Doodle_Shadow({
//   weight: '400',
//   subsets: ['latin'],
// });

export const metadata = {
  title: "Digital Paaji Academy",
  description: "Gyaan - Kam, Skills Zyada ! Focused on practical learning over theory, we help you master real-world skills for success.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.webp" sizes="any" />
      
      </head>

      <body 
      // className={rubikFont.className}
      >
<Navbar/>

        {children}
        <Icons/>

        <Footer/>
      </body>
    </html>
  );
}
