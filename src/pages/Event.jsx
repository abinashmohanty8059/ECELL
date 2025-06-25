import React from 'react';
import { ArrowRightCircle } from 'lucide-react';

const events = [
  {
    name: 'Build School',
    image: '/BuildSchool.png',
    bg: 'bg-purple-600',
    colSpan: 'col-span-2 sm:col-span-1 sm:row-span-2', 
    imageHeight: 280,
    imageWidth: '100%',
  },
  {
    name: 'Skill Sprint',
    image: '/SkillSprint.png',
    bg: 'bg-blue-300',
    colSpan: 'col-span-2',
    imageHeight: 180,
    imageWidth: '100%',
  },
  {
    name: 'I-Camp',
    image: '/Icamp.png',
    bg: 'bg-blue-500',
    colSpan: 'col-span-1',
    imageHeight: 160,
    imageWidth: '100%',
  },
  {
    name: 'Growth Garage',
    image: '/GrowthGarage.png',
    bg: 'bg-blue-400',
    colSpan: 'col-span-1',
    imageHeight: 140,
    imageWidth: '100%',
  },
  {
    name: 'Ideathon',
    image: '/Ideathon.png',
    bg: 'bg-blue-700',
    colSpan: 'col-span-1',
    imageHeight: 160,
    imageWidth: '100%',
  },
  {
    name: 'Hult Prize',
    image: '/HultPrize.png',
    bg: 'bg-purple-600',
    colSpan: 'col-span-1',
    imageHeight: 200,
    imageWidth: '100%',
  },
];

const EventsGrid = () => {
  return (
    <div className="bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-12">
          Our Prestigious Events
        </h2>

        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-4 
            auto-rows-[minmax(180px,auto)] 
            gap-4 
            text-white
          "
        >
          {events.map((event, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 flex flex-col justify-between ${event.bg} ${event.colSpan}`}
            >
              <img
                src={event.image}
                alt={event.name}
                className="rounded-xl object-contain mb-4"
                style={{
                  height: `${event.imageHeight}px`,
                  width: event.imageWidth,
                }}
              />
              <div className="flex justify-between items-center mt-auto">
                <h3 className="font-bold text-lg sm:text-xl">{event.name}</h3>
                <ArrowRightCircle className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
