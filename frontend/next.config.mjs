/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables `next export`
    images: {
      unoptimized: true, // Required if using Next.js Image component
    },
    
  };
  
  export default nextConfig;
  