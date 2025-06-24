import React from 'react';

const ConfirmationPopup = ({ onConfirm, onCancel, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 rounded-xl shadow-2xl w-full max-w-md transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title & Description */}
        <div className="px-6 pt-6 pb-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Confirm Registration</h2>
          <p className="text-sm text-gray-400">
            Are you sure you want to register for this event?
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex border-t border-neutral-800 divide-x divide-neutral-800">
          <button
            onClick={onConfirm}
            className="w-1/2 py-3 text-green-400 font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="w-1/2 py-3 text-red-400 font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
