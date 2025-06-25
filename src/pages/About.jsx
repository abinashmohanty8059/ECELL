import React from 'react';

const About = () => {
  return (
    <>
      {/* Desktop Background Container */}
      <div
        className="hidden md:block w-full bg-top bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/about us section bg.svg')",
        }}
      >
        <AboutContent isMobile={false} />
      </div>

      {/* Mobile Background Container */}
      <div className="block md:hidden w-full bg-black">
        <AboutContent isMobile={true} />
      </div>
    </>
  );
};

// Reusable AboutContent
const AboutContent = ({ isMobile }) => (
  <div className="w-full pt-32 min-h-[100vh] text-white px-6 relative">
    {/* Heading */}
    <h2 className="text-blue-400 text-4xl sm:text-5xl font-bold font-[Pixelify_Sans] text-center mb-8">
      About Us
    </h2>

    {/* Logos on Mobile */}
   {isMobile && (
  <>
    {/* Logos first */}
    <div className="w-full flex justify-center mb-6 lg:hidden">
      <div className="flex flex-row gap-8 items-center">
        <img src="/KIIT logo white.png" alt="E-Cell" className="h-24 sm:h-28" />
        <img src="/KIIT logo.png" alt="KIIT" className="h-24 sm:h-28 grayscale" />
      </div>
    </div>

    {/* Paragraph section */}
    <div className="text-blue-100 text-lg leading-relaxed space-y-6 font-inter mb-8">
      <p>
        KIIT E-Cell believes that emerging economies like India need the drive
        of the new and young breed of worthy entrepreneurs who target their
        efforts on innovative ways to technologically address the
        entrepreneurship challenges of millions of people.
      </p>
      <p>
        KIIT E-Cell targets on fostering the culture among the students by
        establishing necessary support systems for aspiring entrepreneurs with
        the East India’s largest inbuilt technology business incubator KIIT TBI.
      </p>
    </div>

    {/* V-structured Event Bubbles */}
    <div className="flex flex-col items-center gap-4">
      {/* Top */}
      <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full font-[Pixelify_Sans]">I-Camp</div>

      {/* Middle Row */}
      <div className="flex gap-6">
        <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full font-[Pixelify_Sans]">Ideathon</div>
        <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full">Build School</div>
      </div>

      {/* Bottom Row */}
      <div className="flex gap-4">
        <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full font-[Pixelify_Sans]">Growth Garage</div>
        <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full font-[Pixelify_Sans]">Hult Prize</div>
        
      </div>
    </div>
  </>
)}


    {/* Main Content */}
    <div className="max-w-7xl mx-auto flex lg:flex-row gap-10 items-center justify-between bg-black bg-opacity-70 p-6 rounded-lg relative">
      {/* Left - Text */}
      <div className="lg:w-2/3 text-blue-100 text-lg leading-relaxed space-y-6 font-inter hidden lg:block">
        <p>
          KIIT E-Cell believes that emerging economies like India need the drive
          of the new and young breed of worthy entrepreneurs who target their
          efforts on innovative ways to technologically address the
          entrepreneurship challenges of millions of people.
        </p>
        <p>
          KIIT E-Cell targets on fostering the culture among the students by
          establishing necessary support systems for aspiring entrepreneurs with
          the East India’s largest inbuilt technology business incubator KIIT TBI.
        </p>
      </div>

      {/* Right - Logos (only for desktop) */}
     {!isMobile && (
  <div className="w-full relative px-12">
    {/* Logos aligned right */}
    <div className="flex justify-end pr-[20%] relative z-10">
      <div className="flex flex-row gap-8 items-center">
        <img src="/KIIT logo white.png" alt="E-Cell" className="h-24 sm:h-28" />
        <img src="/KIIT logo.png" alt="KIIT" className="h-24 sm:h-28 grayscale" />
      </div>
    </div>

    {/* Positioned Bubbles */}
    {/* 1 */}
{/* 1 - I-Camp */}
<div className="absolute top-[-100px] right-[40%] group bg-gray-700 text-white text-sm w-10 h-10 rounded-full transition-all duration-300 ease-in-out hover:rounded-xl hover:w-32 flex items-center justify-center overflow-hidden">
  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    I-Camp
  </span>
</div>

{/* 2 - Ideathon */}
<div className="absolute top-[-65px] right-[12%] group bg-gray-700 text-white text-sm w-10 h-10 rounded-full transition-all duration-300 ease-in-out hover:rounded-xl hover:w-36 flex items-center justify-center overflow-hidden">
  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    Ideathon
  </span>
</div>

{/* 3 - Build School */}
<div className="absolute top-[10px] right-[0%] group bg-gray-700 text-white text-sm w-10 h-10 rounded-full transition-all duration-300 ease-in-out hover:rounded-xl hover:w-40 flex items-center justify-center overflow-hidden">
  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    Build School
  </span>
</div>

{/* 4 - Hult Prize */}
<div className="absolute top-[100px] right-[10%] group bg-gray-700 text-white text-sm w-10 h-10 rounded-full transition-all duration-300 ease-in-out hover:rounded-xl hover:w-36 flex items-center justify-center overflow-hidden">
  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    Hult Prize
  </span>
</div>

{/* 5 - Growth Garage */}
<div className="absolute top-[200px] right-[36%] group bg-gray-700 text-white text-sm w-10 h-10 rounded-full transition-all duration-300 ease-in-out hover:rounded-xl hover:w-44 flex items-center justify-center overflow-hidden">
  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    Growth Garage
  </span>
</div>

    
  </div>
)}

    </div>

    {/* Marquee Section */}
    <div className="relative w-full overflow-hidden bg-[#252525] border-y border-neutral-600 py-2 mt-10">
      <div className="flex animate-marquee whitespace-nowrap text-sm font-semibold tracking-widest">
        {[...Array(20)].map((_, i) => (
          <span
            key={`first-${i}`}
            className={`px-4 ${i % 2 === 0 ? 'text-white' : 'text-blue-400'}`}
          >
            KIIT ECELL
          </span>
        ))}
        {[...Array(20)].map((_, i) => (
          <span
            key={`second-${i}`}
            className={`px-4 ${i % 2 === 0 ? 'text-white' : 'text-blue-400'}`}
            aria-hidden="true"
          >
            KIIT ECELL
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  </div>
);

export default About;
