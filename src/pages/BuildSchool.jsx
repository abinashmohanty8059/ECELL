import React from 'react';

const BuildSchoolCard = ({ onRegister }) => {
  const event = {
    id: 1,
    title: 'Build School',
    mainHeadingText: 'BUILD SCHOOL',
    image: "/BuildSchool.png",
  };

  return (
    <div className="w-full bg-neutral-200 rounded-xl shadow-md overflow-hidden flex flex-col border border-neutral-300 hover:border-blue-500 transition duration-300">
      
      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between items-center text-center gap-3">
        <h3 className="font-extrabold text-xl sm:text-2xl text-black leading-tight tracking-wider">
          <span className="block">BUILD</span>
          <span className="block">SCHOOL</span>
        </h3>

        <button
          onClick={() => onRegister(event.title)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-full
                     transition duration-200 uppercase text-xs tracking-wide shadow"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default BuildSchoolCard;
