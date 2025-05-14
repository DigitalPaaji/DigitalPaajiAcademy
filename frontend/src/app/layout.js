// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Icons from "./components/Icons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
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
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<Navbar/>

        {children}
        <Footer/>
        <Icons/>
      </body>
    </html>
  );
}
