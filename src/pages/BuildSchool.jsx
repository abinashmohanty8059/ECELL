import React from 'react';

const BuildSchoolCard = ({ onRegister }) => {
  const event = {
    id: 1,
    title: 'Build School',
    mainHeadingText: 'BUILD SCHOOL',
    image: "/BuildSchool.png",
  };

  return (
    <div
      className="
        w-full max-w-[400px] bg-neutral-200 rounded-lg shadow-lg overflow-hidden
        flex flex-col border border-neutral-300 hover:border-blue-500 transition-colors duration-300
      "
    >
      {/* Event Image */}
      <div className="w-full overflow-hidden h-[300px] sm:h-[360px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between items-center text-center">
        <h3 className="font-extrabold text-3xl leading-tight text-black tracking-wider mb-4">
          <span className="block">BUILD</span>
          <span className="block">SCHOOL</span>
        </h3>

        <button
          onClick={() => onRegister(event.title)}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full
                     transition-colors duration-200 uppercase text-sm tracking-wider shadow-lg"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default BuildSchoolCard;
