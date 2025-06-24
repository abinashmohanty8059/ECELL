import React from 'react';

const HultPrizeCard = ({ onRegister }) => {
  const event = {
    id: 6,
    title: 'Hult Prize',
    mainHeadingText: 'Hult Prize',
    image: '/HultPrize.png',
    subtitle: 'HULT PRIZE',
  };

  return (
    <div
      className="w-full max-w-[500px] min-w-[500px] h-[220px] 
                 bg-neutral-200 rounded-lg shadow-lg overflow-hidden
                 flex flex-row border border-neutral-300 hover:border-blue-500 
                 transition duration-300"
    >
      {/* Image Section */}
      <div className="w-[250px] h-full overflow-hidden flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex flex-col justify-between text-left w-full">
        <div>
          {event.subtitle && (
            <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide">
              {event.subtitle}
            </p>
          )}
          <h3 className="font-extrabold text-xl sm:text-2xl text-neutral-800 mt-1 leading-tight">
            {event.mainHeadingText}
          </h3>
        </div>

        <div className="text-right mt-4">
          <button
            onClick={() => onRegister(event.title)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1.5 px-5 rounded-full
                       transition duration-200 uppercase text-xs sm:text-sm tracking-wide shadow"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HultPrizeCard;
