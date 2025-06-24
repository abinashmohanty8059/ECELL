import React from 'react';

const ICampCard = ({ onRegister }) => {
  const event = {
    id: 3,
    title: 'I-Camp',
    mainHeadingText: 'I-Camp',
    image: '/Icamp.png',
    additionalSubtext: 'INTERNSHIP CAMP 2023',
  };

  return (
    <div
      className="w-full max-w-sm bg-neutral-200 rounded-lg shadow-lg overflow-hidden
                 flex flex-col border border-neutral-300 hover:border-blue-500 transition duration-300"
    >
      {/* Image */}
      <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between items-center text-center space-y-2">
        <h3 className="font-extrabold text-lg sm:text-xl text-neutral-800">
          {event.mainHeadingText}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">{event.additionalSubtext}</p>

        <button
          onClick={() => onRegister(event.title)}
          className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1.5 px-6 rounded-full
                     transition duration-200 uppercase text-xs tracking-wide shadow"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default ICampCard;
