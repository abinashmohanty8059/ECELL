import React from 'react';

const About = () => {
  const bubbles = [
    { top: '10%', left: '20%', title: 'I-Camp' },
    { top: '25%', right: '15%', title: 'Ideathon' },
    { top: '45%', left: '10%', title: 'Build School' },
    { top: '65%', right: '20%', title: 'Hult Prize' },
    { bottom: '10%', left: '35%', title: 'Growth Garage' },
  ];

  return (
    <>
      {/* Desktop Background Container */}
      <div
        className="hidden md:block w-full bg-top bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/about us section bg.svg')",
        }}
      >
        <AboutContent bubbles={bubbles} />
      </div>

      {/* Mobile Background Container */}
      <div className="block md:hidden w-full bg-black">
        <AboutContent bubbles={bubbles} />
      </div>
    </>
  );
};

// Extracted reusable content
const AboutContent = ({ bubbles }) => (
  <div className="w-full pt-32 min-h-[100vh] text-white px-6 relative">
    {/* Heading */}
    <h2 className="text-blue-400 text-4xl sm:text-5xl font-bold font-[Pixelify_Sans] text-center mb-8">
      About Us
    </h2>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between bg-black bg-opacity-70 p-6 rounded-lg relative">
      {/* Left - Text */}
      <div className="lg:w-2/3 text-blue-100 text-lg leading-relaxed space-y-6 font-inter">
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

      {/* Right - Logos & Bubbles */}
      <div className="w-full flex justify-center relative">
        <div className="flex flex-row gap-8 items-center">
          <img src="/KIIT logo white.png" alt="E-Cell" className="h-24 sm:h-28" />
          <img src="/KIIT logo.png" alt="KIIT" className="h-24 sm:h-28 grayscale" />
        </div>

        {/* Floating Bubbles */}
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className={`absolute ${bubble.top || ''} ${bubble.bottom || ''} ${bubble.left || ''} ${bubble.right || ''}
              w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-500/40 backdrop-blur-sm shadow-md
              transition-all duration-500 hover:scale-150 group cursor-pointer overflow-hidden`}
          >
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-xs sm:text-sm font-semibold bg-black/80 px-2 py-1 rounded text-white text-center">
                {bubble.title}
              </div>
            </div>
          </div>
        ))}
      </div>
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
