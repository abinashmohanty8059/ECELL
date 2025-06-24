import React from 'react';

const SkillSprintCard = ({ onRegister }) => {
  const event = {
    id: 2,
    title: 'Skill Sprint',
    mainHeadingText: 'Skill Sprint',
    image: '/SkillSprint.png',
    registerLink: '#',
  };

  return (
    <div
      className="w-full bg-neutral-200 rounded-xl shadow-md overflow-hidden
                 flex flex-col md:flex-row border border-neutral-300 hover:border-blue-500 transition duration-300"
    >
      {/* Image section */}
      <div className="w-full md:w-[160px] h-[200px] md:h-auto overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content section */}
      <div className="flex-grow p-4 flex flex-col justify-between text-center md:text-left">
        <h3 className="font-extrabold text-xl md:text-2xl text-neutral-800 mb-2">
          {event.mainHeadingText}
        </h3>

        <div className="mt-auto">
          <button
            onClick={() => onRegister(event.title)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-full
                       transition duration-200 uppercase text-xs md:text-sm tracking-wide shadow"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillSprintCard;
