import React, { useState, useRef, useEffect } from "react";
import Login from "./Loginpopup"; // Adjust path if needed
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const overlayRef = useRef(null);
  const popupRef = useRef(null);

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        overlayRef.current &&
        overlayRef.current.contains(event.target)
      ) {
        setShowLogin(false);
      }
    };

    if (showLogin) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showLogin]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 bg-black text-white w-full px-6 py-4 pt-10">
        <div className="flex justify-between items-center">
          {/* Hamburger (Mobile Only) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Left Tabs */}
        <div className="hidden md:flex flex-1 justify-start space-x-12 text-sm sm:text-base font-medium">
      <Link to="/" className="hover:text-blue-300 cursor-pointer">Home</Link>
      <Link to="/about" className="hover:text-blue-300 cursor-pointer">About Us</Link>
      <Link to="/" className="hover:text-blue-300 cursor-pointer">Blogs</Link>
    </div>

          {/* Center Logo */}
          <div className="text-xl sm:text-2xl font-poppins text-white text-center flex-1 justify-center hidden md:flex">
      KIIT E-CELL
    </div>

          {/* Right Tabs */}
          <div className="hidden md:flex flex-1 justify-end space-x-6 text-sm sm:text-base font-medium items-center">
      <Link to="/event" className="hover:text-blue-300 cursor-pointer">Events</Link>
      <Link to="/Signup" className="hover:text-blue-300 cursor-pointer">Join Us</Link>
      <button
        onClick={() => setShowLogin(true)}
        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-semibold"
      >
        U
      </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 text-sm font-medium">
            <span className="block hover:text-gray-300">Home</span>
            <span className="block hover:text-gray-300">About Us</span>
            <span className="block hover:text-gray-300">Blogs</span>
            <span className="block hover:text-gray-300">Events</span>
            <span className="block hover:text-gray-300">Join Us</span>
            <span
              className="block hover:text-gray-300"
              onClick={() => setShowLogin(true)}
            >
              Profile
            </span>
          </div>
        )}
      </nav>

      {/* Login Popup */}
      {showLogin && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[999]"
        >
          <div
            ref={popupRef}
            className="relative bg-[#1a2b32] rounded-2xl shadow-lg p-8 md:p-10 max-w-md w-[90%] text-white space-y-6"
          >
            <button
              className="absolute top-2 right-3 text-white font-bold text-xl"
              onClick={() => setShowLogin(false)}
            >
               <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[999]">
    <Login onClose={() => setShowLogin(false)} />
  </div>
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;