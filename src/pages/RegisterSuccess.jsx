// src/components/SuccessPopup.jsx
import React from 'react';

const RegistrationSuccess = ({ message, subMessage, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 rounded-xl shadow-2xl w-full max-w-sm transform transition-all text-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="p-6">
          <h2 className="text-green-400 text-2xl font-bold mb-2">{message}</h2>
          <p className="text-gray-400 text-sm">{subMessage}</p>
        </div>
        <div className="border-t border-neutral-700">
          <button
            onClick={onClose}
            className="w-full py-3 text-white font-semibold hover:bg-neutral-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
