import React, { useState, useRef, useEffect } from "react";
import Login from "./Loginpopup";
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
      <nav className="fixed top-0 left-0 z-50 w-full px-6 py-4  text-white bg-black">
        <div className="flex justify-between items-center relative">
          {/* Hamburger (Mobile Only) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Left Tabs (Desktop Only) */}
          <div className="hidden md:flex flex-1 justify-start space-x-12 text-sm sm:text-base font-medium">
            <Link to="/" className="hover:text-blue-300">Home</Link>
            <Link to="/about" className="hover:text-blue-300">About Us</Link>
            <Link to="/" className="hover:text-blue-300">Blogs</Link>
          </div>

          {/* Center Logo (Desktop Only) */}
          <div className="hidden md:flex flex-1 justify-center text-xl sm:text-2xl font-poppins text-white">
            KIIT E-CELL
          </div>

          {/* Right Tabs (Desktop Only) */}
          <div className="hidden md:flex flex-1 justify-end space-x-6 text-sm sm:text-base font-medium items-center">
            <Link to="/event" className="hover:text-blue-300">Events</Link>
            <Link to="/Signup" className="hover:text-blue-300">Join Us</Link>
            <button
              onClick={() => setShowLogin(true)}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-semibold"
            >
              U
            </button>
          </div>

          {/* Profile Button (Mobile Only, top-right absolute) */}
          <div className="md:hidden absolute right-0 top-0 pt-10 pr-6">
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
            <Link to="/" className="block hover:text-gray-300">Home</Link>
            <Link to="/about" className="block hover:text-gray-300">About Us</Link>
            <Link to="/" className="block hover:text-gray-300">Blogs</Link>
            <Link to="/event" className="block hover:text-gray-300">Events</Link>
            <Link to="/Signup" className="block hover:text-gray-300">Join Us</Link>
            {/* No Profile button here */}
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
      {/* Proper close button */}
      <button
        className="absolute top-2 right-3 text-white font-bold text-xl"
        onClick={() => setShowLogin(false)}
      >
        &times;
      </button>

      {/* Login Component */}
      <Login onClose={() => setShowLogin(false)} />
    </div>
  </div>
)}

    </>
  );
};

export default Navbar;
