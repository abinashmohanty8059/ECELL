import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPopup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500); // Redirect after 2.5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-[#0e0e0e] border border-white px-8 py-6 text-center text-white shadow-xl rounded-2xl max-w-md w-[90%]">
        <p className="text-green-400 font-bold text-base sm:text-lg mb-1">
          You’ve successfully created your account
        </p>
        <p className="text-xs sm:text-sm text-gray-400">
          We’re redirecting you to the login...
        </p>
      </div>
    </div>
  );
};

export default SuccessPopup;