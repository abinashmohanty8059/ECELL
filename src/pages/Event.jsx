import React, { useState } from 'react';
import { ArrowRightCircle } from 'lucide-react';
import ConfirmationPopup from './ConfirmationPopup';
import RegisterSuccess from './RegisterSuccess';

const events = [
  {
    name: 'Build School',
    image: '/BuildSchool.png',
    bg: 'bg-purple-600',
    colSpan:'col-span-2 sm:col-span-1 sm:row-span-2'

  },
  {
    name: 'Skill Sprint',
    image: '/SkillSprint.png',
    bg: 'bg-blue-300',
    colSpan: 'col-span-2 sm:col-span-2',
  },
  {
    name: 'I-Camp',
    image: '/Icamp.png',
    bg: 'bg-blue-500',
    colSpan: 'col-span-2 sm:col-span-1',
  },
  {
    name: 'Growth Garage',
  image: '/GrowthGarage.png',
  bg: 'bg-blue-400',
  colSpan: 'col-span-2 sm:col-span-1',
  className: 'h-[320px] sm:h-[220px]', 
  },
  {
    name: 'Ideathon',
    image: '/Ideathon.png',
    bg: 'bg-blue-700',
    colSpan: 'col-span-2 sm:col-span-1',
  },
  {
     name: 'Hult Prize',
  image: '/HultPrize.png',
  bg: 'bg-purple-600',
  colSpan: 'col-span-2 sm:col-span-1',
  },
];

const EventsGrid = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [detailsVisible, setDetailsVisible] = useState(false);

  const handleRegister = (eventName) => {
    setSelectedEvent(eventName);
    setPopupVisible(true);
  };

  const handleClosePopup = () => setPopupVisible(false);

  const handleConfirmYes = () => {
    setPopupVisible(false);
    setDetailsVisible(true);
  };

  const handleCloseDetails = () => setDetailsVisible(false);

  return (
    <section className="bg-black py-16 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Prestigious Events</h2>

        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-4            
            auto-rows-[minmax(180px,auto)] 
            gap-4"
        >
        {events.map((event, index) => (
    <div
      key={index}
      className={`
        rounded-2xl p-4 flex flex-col justify-between items-start
        ${event.bg} ${event.colSpan}
        md:opacity-60 md:hover:opacity-100
  transition duration-300
      `}
    >
      <img
        src={event.image}
        alt={event.name}
        className="rounded-xl w-full h-auto max-h-[220px] object-contain mb-4"
      />
      <div className="flex justify-between items-center w-full mt-auto">
        <h3 className="font-bold text-lg sm:text-xl">{event.name}</h3>
        <button onClick={() => handleRegister(event.name)}>
          <ArrowRightCircle className="h-6 w-6 sm:h-7 sm:w-7 hover:text-black transition" />
        </button>
      </div>
    </div>
  ))}
        </div>
      </div>

      {/* First Confirmation Popup */}
      {popupVisible && (
        <ConfirmationPopup
          eventName={selectedEvent}
          onClose={handleClosePopup}
          onConfirm={handleConfirmYes}
          onCancel={handleClosePopup}
        />
      )}

      {/* Second Success Popup */}
      {detailsVisible && (
        <RegisterSuccess
          message="You're Registered!"
          subMessage={`Thanks for registering for ${selectedEvent}.`}
          onClose={handleCloseDetails}
        />
      )}
    </section>
  );
};

export default EventsGrid;
