import React from 'react';

const About = () => {
  return (
    <div
      className="w-full bg-black pt-32  min-h-[100vh] text-white px-6 bg-top bg-no-repeat bg-contain"
      style={{
        backgroundImage: "url('/about us section bg.svg')", // Replace with your actual image path
      }}
    >
      {/* Heading */}
      <h2 className="text-blue-400 text-4xl sm:text-5xl font-bold font-[Pixelify_Sans] text-center mb-8">
        About Us
      </h2>
       <h3 className="text-white text-center text-xl sm:text-2xl md:text-3xl font-semibold font-serif mt-4">
  We’re an organization, <span className="font-extrabold tracking-wide">“NOT A SOCIETY”</span>
</h3>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between bg-black bg-opacity-70 p-6 rounded-lg">
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

        {/* Right - Logos */}
       <div className="w-full flex justify-center">
  <div className="flex flex-row gap-8 items-center">
    <img src="/KIIT logo white.png" alt="E-Cell" className="h-24 sm:h-28" />
    <img src="/KIIT logo.png" alt="KIIT" className="h-24 sm:h-28 grayscale" />
  </div>
  
</div>


      </div>
    </div>
  );
};

export default About;