/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables `next export`
    images: {
      unoptimized: true,
      domains: ['https://digitalpaajiacademy.com/'],
    }    
  };
  
  export default nextConfig;
  