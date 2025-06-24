// src/components/ContactUs.jsx
import React from "react";
import mapBg from "/contact us.svg";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background SVG */}
      <img
        src={mapBg}
        alt="Map background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Contact Box */}
      <div className="w-full flex justify-end pr-8">
      <div className="relative z-10 max-w-xl mt-20 p-10 bg-gray-800 bg-opacity-70 rounded-3xl shadow-lg ">
        <h2 className="text-2xl font-semibold mb-6">
          Let’s talk <span className="font-bold text-white">with us!</span>
        </h2>

        <form className="space-y-5">
          <div>
            <label className="text-sm block mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
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
              rows="4"
              placeholder="Type here..."
              className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
