import "./globals.css";
import Icons from "./components/Icons";
import Footer from "./components/Footer";
import NavPage from "./components/NavPage";



// export const metadata = {
//   title: "Digital Paaji Academy",
//   description: "Gyaan - Kam, Skills Zyada ! Focused on practical learning over theory, we help you master real-world skills for success.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/favicon.webp" sizes="any" />
     <title>Digital Paaji Academy</title>

        <meta
          name="description"
          content="Gyaan - Kam, Skills Zyada! Focused on practical learning over theory, we help you master real-world skills for success."
        />
     
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Digital Paaji Academy",
              "url": "https://digitalpaajiacademy.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://digitalpaajiacademy.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
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
