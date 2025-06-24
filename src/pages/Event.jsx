import React, { useState } from 'react';
import BuildSchoolCard from './BuildSchool';
import SkillSprintCard from './SkillSprint';
import ICampCard from './Icamp';
import GrowthGarageCard from './GrowthGarage';
import IdeathonCard from './Ideathon';
import HultPrizeCard from './HultPrize';
import ConfirmationPopup from './ConfirmationPopup';
import RegisterSuccess from './RegisterSuccess'; // ✅ Correct import of the second popup

const Events = () => {
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
    <section className="bg-black py-16 text-neutral-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white pt-10">
          Our Prestigious Events
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-6">
          <div className="break-inside-avoid mb-6"><BuildSchoolCard onRegister={handleRegister} /></div>
          <div className="break-inside-avoid mb-6"><SkillSprintCard onRegister={handleRegister} /></div>
          <div className="break-inside-avoid mb-6"><ICampCard onRegister={handleRegister} /></div>
          <div className="break-inside-avoid mb-6"><IdeathonCard onRegister={handleRegister} /></div>
          <div className="break-inside-avoid mb-6"><HultPrizeCard onRegister={handleRegister} /></div>
          <div className="break-inside-avoid mb-6"><GrowthGarageCard onRegister={handleRegister} /></div>
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

export default Events;
