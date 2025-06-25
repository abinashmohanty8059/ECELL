import React, { useState, useRef, useEffect } from "react";
import Login from "./Loginpopup";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6_fnu1X8Fdv9E8JZJQb-JYl9dfnGG4ZA",
  authDomain: "cell-4edca.firebaseapp.com",
  projectId: "cell-4edca",
  storageBucket: "cell-4edca.firebasestorage.app",
  messagingSenderId: "601339552841",
  appId: "1:601339552841:web:f72b97fcdbaf3b89d08b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null); // Changed from isLoggedIn to user
  const overlayRef = useRef(null);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  // Check auth state - now stores the full user object
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Store the full user object
    });
    return () => unsubscribe();
  }, []);

  const handleProfileClick = () => {
    if (user) { // Changed from isLoggedIn to user
      navigate('/profile');
    } else {
      setShowLogin(true);
    }
  };

  // Close popup on outside click (unchanged)
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
          {/* Hamburger (Mobile Only) - unchanged */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Left Tabs (Desktop Only) - unchanged */}
          <div className="hidden md:flex flex-1 justify-start space-x-12 text-sm sm:text-base font-medium">
            <Link to="/" className="hover:text-blue-300">Home</Link>
            <Link to="/about" className="hover:text-blue-300">About Us</Link>
            <Link to="/" className="hover:text-blue-300">Blogs</Link>
          </div>

          {/* Center Logo (Desktop Only) - unchanged */}
          <div className="hidden md:flex flex-1 justify-center text-xl sm:text-2xl font-poppins text-white">
            KIIT E-CELL
          </div>

          {/* Right Tabs (Desktop Only) - modified profile icon */}
          <div className="hidden md:flex flex-1 justify-end space-x-6 text-sm sm:text-base font-medium items-center">
            <Link to="/event" className="hover:text-blue-300">Events</Link>
            <Link to="/Signup" className="hover:text-blue-300">Join Us</Link>
            <button
              onClick={handleProfileClick}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black overflow-hidden"
            >
              {user?.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <User size={18} />
              )}
            </button>
          </div>

          {/* Profile Button (Mobile Only) - modified profile icon */}
          <div className="md:hidden absolute right-0 top-0  pr-6">
            <button
              onClick={handleProfileClick}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black overflow-hidden"
            >
              {user?.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <User size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - unchanged */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 text-sm font-medium">
            <Link to="/" className="block hover:text-gray-300">Home</Link>
            <Link to="/about" className="block hover:text-gray-300">About Us</Link>
            <Link to="/" className="block hover:text-gray-300">Blogs</Link>
            <Link to="/event" className="block hover:text-gray-300">Events</Link>
            <Link to="/Signup" className="block hover:text-gray-300">Join Us</Link>
          </div>
        )}
      </nav>

      {/* Login Popup - unchanged */}
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
              &times;
            </button>
            <Login onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;