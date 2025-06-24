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
      className="
        w-full max-w-[250px] h-[300px] bg-neutral-200 rounded-lg shadow-lg overflow-hidden
        flex flex-col border border-neutral-300 hover:border-blue-500 transition duration-300
      "
    >
      {/* Image */}
      <div className="w-full h-[280px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col justify-between items-center text-center h-full">
        <div className="space-y-1">
          {event.subtitle && (
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">
              {event.subtitle}
            </p>
          )}
          <h3 className="font-extrabold text-lg text-neutral-800">
            {event.mainHeadingText}
          </h3>
          {event.additionalSubtext && (
            <p className="text-[10px] text-gray-600">{event.additionalSubtext}</p>
          )}
        </div>

        <button
          onClick={() => onRegister(event.title)}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-1.5 rounded-full
                     transition duration-200 uppercase text-xs tracking-wide shadow"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default IdeathonCard;
