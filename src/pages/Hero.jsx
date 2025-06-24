import React from 'react';
import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';



const Hero = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setIsLogoVisible((prev) => !prev);
  }, 2000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="bg-black">
      <div
        className=" hidden md:block w-full min-h-screen bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/hero section bg.svg')" }}
      >
        <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 text-center">

          {/* Desktop Layout */}
          <div className="hidden md:block relative w-full max-w-[500px] aspect-[1440/1024] my-10">
            <div className="group relative w-full h-full flex items-center justify-center">
              
              {/* Triangle SVG */}
              <img
                src="/Invisible triangle.svg"
                alt="Centered Logo"
                className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[400px] md:w-[500px] z-30 opacity-100 group-hover:opacity-0 transition-opacity duration-300 animate-pulseSlow"
              />

              {/* KIIT Logo */}
              <img
                src="/KIIT logo white.png"
                alt="Stacked Overlay"
                className="absolute top-[80%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[400px] md:w-[450px] z-40 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              />

              {/* 3 Triangle SVGs with Hover Transition */}
              <div className="flex items-end justify-center">
                {/* SVG 1 */}
                <svg
                  viewBox="0 0 300 434"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] translate-y-16"
                >
                  <path
                    d="M300 217L0 433.506V0.493652L300 217Z"
                    fill="#26A8DA"
                    fillOpacity="0.6"
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold align-baseline"
                  >
                    Imagine
                  </text>
                </svg>

                {/* SVG 2 */}
                <svg
                  viewBox="0 0 300 434"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-0 rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] translate-y-16"
                >
                  <path
                    d="M300 217L0 433.506V0.493652L300 217Z"
                    fill="#26A8DA"
                    fillOpacity="0.6"
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold align-baseline"
                  >
                    Innovate
                  </text>
                </svg>

                {/* SVG 3 */}
                <svg
                  viewBox="0 0 300 434"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-0 -rotate-45 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] translate-y-16"
                >
                  <path
                    d="M300 217L0 433.506V0.493652L300 217Z"
                    fill="#26A8DA"
                    fillOpacity="0.6"
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold align-baseline"
                  >
                    Implement
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Tagline (Desktop) */}
          <p className="hidden md:block text-base sm:text-xl md:text-2xl lg:text-3xl text-blue-300 font-bold font-poppins px-4 justify-start pt-10">
            For Entrepreneurs <span className="hidden sm:inline">||</span> By Entrepreneurs
          </p>
        </main>
</div>
      {/* Mobile Layout */}
      <div className="md:hidden relative flex flex-col items-center justify-center pt-20 pb-10 px-4 text-center min-h-screen bg-black">
        {/* Wrap all mobile elements in a fragment to avoid adjacent JSX error */}
        
        {/* Title */}
        <img
          src="/Circle mobile.svg"
          alt="Mobile Background"
          className="absolute inset-0 w-full h-full object-contain opacity-60 pointer-events-none z-0"
        />

        {/* Heading (z-10 ensures it’s above the image) */}
        <h1 className="text-white text-2xl font-semibold mb-6 z-10">KIIT E-CELL</h1>
        
        <div className="relative w-full max-w-xs h-60 flex items-center justify-center z-10 pt-72">
          {/* Triangle SVG */}
          <img
            src="/Invisible triangle.svg"
            alt="Triangle"
            className="absolute top-1/2 left-1/2 w-60 h-36 -translate-x-1/2 -translate-y-1/2 z-10"
          />

          {/* KIIT Logo */}
           <div className="relative w-full max-w-xs h-60 flex items-center justify-center z-10 pt-5">
    {isLogoVisible ? (
      // Show KIIT Logo
      <img
        src="/KIIT logo white.png"
        alt="KIIT Logo"
        className="w-60 h-36 transition-opacity duration-700 ease-in-out opacity-100"
      />
    ) : (
      // Show 3 Triangles in a row
      <div className="flex  items-end justify-center transition-opacity duration-700 ease-in-out opacity-100">
        {['Imagine', 'Innovate', 'Implement'].map((title, idx) => (
          <svg
            key={idx}
            viewBox="0 0 300 434"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-auto"
          >
            <path
              d="M300 217L0 433.506V0.493652L300 217Z"
              fill="#26A8DA"
              fillOpacity="0.6"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white text-5xl font-semibold"
            >
              {title}
            </text>
          </svg>
        ))}
      </div>
    )}
  </div>
        </div>

        {/* Tagline */}
        <p className="text-blue-400 font-medium text-lg mt-80 mb-8">
          For Entrepreneurs <span className="inline-block">||</span> By Entrepreneurs
        </p>

        {/* Buttons */}
        <div className="z-10 flex gap-4">
          <Link
            to="/login"
            className="bg-gray-800 text-white text-xs font-semibold px-12 py-4 rounded-2xl"
          >
            LOGIN
          </Link>

          <Link
            to="/contact"
            className="bg-gray-800 text-white text-xs font-semibold px-12 py-4 rounded-2xl "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

// TriangleCarousel component (if you want to use it elsewhere)
const TriangleCarousel = () => {
  const [current, setCurrent] = useState(0);
  const titles = ['Imagine', 'Innovate', 'Implement'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 2000); // Change every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Example usage of the carousel */}
      <svg
        viewBox="0 0 300 434"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] translate-y-16"
      >
        <path
          d="M300 217L0 433.506V0.493652L300 217Z"
          fill="#26A8DA"
          fillOpacity="0.6"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold align-baseline"
        >
          {titles[current]}
        </text>
      </svg>
    </div>
  );
};

export default Hero;
