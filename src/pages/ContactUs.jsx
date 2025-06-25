import React from "react";
import mapBg from "/contact us.svg";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col md:block">
      {/* Mobile: Static SVG on top */}
      <img
        src={mapBg}
        alt="Map background"
        className="block md:hidden w-full h-[40vh] object-cover"
      />

      {/* Desktop: Fullscreen background */}
      <img
        src={mapBg}
        alt="Map background"
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Contact Form */}
      <div className="relative z-10 w-full md:flex md:justify-end md:pr-8 mt-auto">
        <div
          className="
            md:mt-20 md:p-10 p-6
            bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg
            md:rounded-3xl rounded-t-3xl
            w-full md:max-w-xl
          "
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Let’s talk <span className="font-bold">with us!</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="px-6 py-2 bg-white text-black font-semibold rounded-br-2xl hover:bg-gray-200 transition"
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
