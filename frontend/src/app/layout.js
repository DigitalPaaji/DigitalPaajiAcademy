import "./globals.css";
import Icons from "./components/Icons";
import Footer from "./components/Footer";
import NavPage from "./components/NavPage";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/favicon.webp" sizes="any" />
        <link
  rel="preload"
  as="video"
  href="/Images/cbanner.mp4"
  type="video/mp4"
/>

     <title>Digital Paaji Academy</title>

        <meta
          name="description"
          content="Gyaan - Kam, Skills Zyada! Focused on practical learning over theory, we help you master real-world skills for success."
        />
     
        {/* JSON-LD Structured Data */}
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


           {/* ✅ Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2368838253513946');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2368838253513946&ev=PageView&noscript=1"
          />
        </noscript>
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
