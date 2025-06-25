import React, { useState } from "react";
import mapBg from "/contact us.svg";
import { X } from "lucide-react";

const ContactUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Backgrounds */}
      <img
        src={mapBg}
        alt="Map"
        className="block md:hidden w-full h-[40vh] object-cover"
      />
      <img
        src={mapBg}
        alt="Map"
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Desktop Form */}
      <div className="hidden md:flex relative z-10 w-full justify-end pr-8">
        <div className="mt-20 p-10 bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg rounded-3xl w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-6">Let’s talk <span className="font-bold">with us!</span></h2>
          <ContactForm />
        </div>
      </div>

      {/* Mobile Slide Form + Footer */}
      <div className="md:hidden mt-[-70px] z-20 relative">
        <div
          className={`
            transition-all duration-500 ease-in-out
            ${isExpanded ? "translate-y-0" : "translate-y-[60%]"}
          `}
        >
          {/* Slide-up Form */}
          <div className="bg-[#1a1a1a]/90 backdrop-blur-md rounded-t-3xl px-6 pt-4 pb-8 shadow-2xl relative">
            {/* Handle */}
            <div
              onClick={() => setIsExpanded(true)}
              className="w-full flex justify-center cursor-pointer"
            >
              <div className="w-12 h-1.5 bg-gray-500 rounded-full mb-2"></div>
            </div>

            {/* Close button */}
            {isExpanded && (
              <button
                className="absolute top-3 right-4 text-gray-300 hover:text-white"
                onClick={() => setIsExpanded(false)}
              >
                <X className="w-6 h-6" />
              </button>
            )}

            {/* Heading */}
            <h2 className="text-xl font-semibold mb-4 text-white text-center">
              Let’s talk <span className="font-bold">with us!</span>
            </h2>

            {/* Actual Form */}
            <ContactForm />
          </div>

          {/* Footer (always follows the form) */}
          
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => (
  <form className="space-y-4">
    <div>
      <label className="text-sm block mb-1">Name</label>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="text-sm block mb-1">E-mail</label>
        <input
          type="email"
          placeholder="Your Email ID"
          className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
      <div>
        <label className="text-sm block mb-1">Phone No.</label>
        <input
          type="tel"
          placeholder="Your Phone No."
          className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
    </div>

    <div>
      <label className="text-sm block mb-1">Your Message</label>
      <textarea
        rows="3"
        placeholder="Type here..."
        className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
      ></textarea>
    </div>

    <button
      type="submit"
      className=" px-6 py-3 bg-white text-black font-semibold rounded-br-lg hover:bg-gray-200 transition"
    >
      SEND
    </button>
  </form>
);

export default ContactUs;
