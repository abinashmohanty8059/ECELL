

import React from 'react';



const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-4 mt-10">
      <div className="text-center">
        {/* Oops !!! */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 animate-pulse">
          Oops !!!
        </h1>

        {/* 484 - This will require a bit of custom styling or an SVG for the exact 3D effect */}
        {/* For a close approximation using text, you might try font-display (if configured) or a specific font */}
        <img 
  src="/404.svg" // if it's in `public/`
  alt="Error 404"
  className="w-[300px] sm:w-[400px] md:w-[500px] mb-8"
/>

        {/* There's NOTHING here... */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          There's NOTHING here...
        </p>

        {/* GO BACK Button */}
        <button
          onClick={() => window.history.back()} // Basic example for going back
          className="bg-white text-black px-8 py-4 rounded-lg text-xl font-bold uppercase tracking-wide
                     hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
                     transition duration-300 ease-in-out"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;