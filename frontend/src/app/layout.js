import "./globals.css";
import Icons from "./components/Icons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



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
      >
<Navbar/>

        {children}
        <Icons/>

        <Footer/>
      </body>
    </html>
  );
}
