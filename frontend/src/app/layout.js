import "./globals.css";
import Icons from "./components/Icons";
import Footer from "./components/Footer";
import NavPage from "./components/NavPage";



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
<NavPage />


        {children}
        <Icons/>

        <Footer/>
      </body>
    </html>
  );
}
