import React from 'react';

const ExitPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#2a2a2a] text-white rounded-xl w-[90%] max-w-md shadow-lg">
        <div className="p-6 text-center font-medium text-sm sm:text-base">
          <p>Are you sure to exit from experiencing the next moment with us?</p>
        </div>

        <div className="flex border-t border-gray-500">
          <button
            onClick={onConfirm}
            className="w-1/2 py-3 text-red-500 font-bold hover:bg-red-500 hover:text-white rounded-bl-xl transition-all duration-200"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="w-1/2 py-3 text-white font-bold hover:bg-gray-700 rounded-br-xl transition-all duration-200"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;