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
      className="
        w-full max-w-[400px] bg-neutral-200 rounded-xl shadow-lg overflow-hidden
        flex flex-row border border-neutral-300 hover:border-blue-500 transition-colors duration-300
      "
    >
      {/* Image section */}
      <div className="w-[160px] h-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content section */}
      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-2xl text-neutral-800">
            {event.mainHeadingText}
          </h3>
        </div>

        <div className="text-right mt-auto">
          <button
            onClick={() => onRegister(event.title)}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-full
                       transition duration-200 uppercase text-sm tracking-wide shadow"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillSprintCard;
