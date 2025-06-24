import React from 'react';

const IdeathonCard = ({ onRegister }) => {
  const event = {
    id: 5,
    title: 'Ideathon',
    mainHeadingText: 'Ideathon',
    image: '/Ideathon.png',
    subtitle: 'IDEATHON',
    additionalSubtext: 'For Classes VII–XII',
  };

  return (
    <div
      className="w-full max-w-sm bg-neutral-200 rounded-lg shadow-lg overflow-hidden
                 flex flex-col border border-neutral-300 hover:border-blue-500
                 transition duration-300"
    >
      {/* Image */}
      <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col items-center text-center space-y-2">
        {event.subtitle && (
          <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide">
            {event.subtitle}
          </p>
        )}
        <h3 className="font-extrabold text-xl text-neutral-800">
          {event.mainHeadingText}
        </h3>
        {event.additionalSubtext && (
          <p className="text-[12px] text-gray-600">
            {event.additionalSubtext}
          </p>
        )}

        <button
          onClick={() => onRegister(event.title)}
          className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full
                     transition duration-200 uppercase text-sm tracking-wide shadow"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default IdeathonCard;
