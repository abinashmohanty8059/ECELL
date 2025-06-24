import React from 'react';

const GrowthGarageCard = ({ onRegister }) => {
  const event = {
    id: 4,
    title: 'Growth Garage',
    mainHeadingText: 'Growth Garage',
    image: '/GrowthGarage.png',
    subtitle: 'E-CELL KIIT',
    additionalSubtext: 'ENTREPRENEURSHIP CELL INITIATIVE'
  };

  return (
    <div
      className="
        w-full max-w-[240px] bg-neutral-200 rounded-lg shadow-lg overflow-hidden
        flex flex-col border border-neutral-300 hover:border-blue-500 transition duration-300
      "
    >
      {/* Image */}
      <div className="w-full h-[160px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col justify-between items-center text-center space-y-2">
        {event.subtitle && (
          <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">
            {event.subtitle}
          </p>
        )}

        <h3 className="font-extrabold text-xl text-neutral-800 leading-tight">
          {event.mainHeadingText}
        </h3>

        {event.additionalSubtext && (
          <p className="text-[11px] text-gray-600">{event.additionalSubtext}</p>
        )}

        <button
          onClick={() => onRegister(event.title)}
          className="mt-2 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1.5 px-4 rounded-full
                     transition duration-200 uppercase text-xs tracking-wide shadow"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default GrowthGarageCard;
