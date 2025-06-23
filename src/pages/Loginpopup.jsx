import React, { useEffect, useRef } from 'react';
import { FaGithub, FaGoogle, FaArrowRight, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Added useNavigate

const LoginPopup = ({ onClose }) => {
  const popupRef = useRef(null);
  const navigate = useNavigate(); // ✅ Initialize navigate
  const handleClose = () => {
    navigate('/'); // or navigate(-1) to go back
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div
        ref={popupRef}
        className="bg-[#1a2b32] rounded-2xl shadow-lg p-8 md:p-10 max-w-md w-[90%] text-white space-y-6"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/Loginpopup logo.svg" alt="E-Cell Logo" className="h-14" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
        <p className="text-sm text-gray-300 text-center">
          Please enter your details to sign in
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="E-mail (use KIIT e-mail ID)"
          className="w-full px-4 py-3 rounded-md bg-[#2b3e45] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <div className="flex items-center space-x-2 bg-[#2b3e45] rounded-md px-3 py-2">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent focus:outline-none text-sm"
          />
         <button
  onClick={handleClose}
  className="p-2 rounded-full border-2 transition"
>
  <FaArrowRight className="text-white" />
</button>
        </div>

        {/* Remember Me */}
        <div className="flex items-center space-x-2 text-sm">
          <input type="checkbox" className="accent-blue-500" />
          <label>Remember Me</label>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <hr className="w-full border-gray-500" />
          <span>OR</span>
          <hr className="w-full border-gray-500" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-white text-xl">
          <FaGoogle className="cursor-pointer hover:text-blue-400" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaGithub className="cursor-pointer hover:text-blue-400" />
        </div>

        {/* Bottom Link */}
        <p className="text-sm text-center text-gray-400">
          Don’t have an account?{' '}
          <Link to="/Signup">
            <span className="text-white font-semibold cursor-pointer hover:underline">
              Create Account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;