import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import SignUp from "./pages/Signup";
import LoginPopup from "./pages/Loginpopup";
import ProfileCard from "./pages/ProfileCard";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Liaison from "./pages/Liaison";
import Events from "./pages/Event";
import ConfirmationPopup from "./pages/ConfirmationPopup";
import RegistrationSuccess from "./pages/RegisterSuccess"; // Correct import
import "./index.css";

function App() {
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleEventRegisterClick = () => {
    setShowRegisterPopup(true);
  };

  const handleConfirmRegistration = () => {
    setShowRegisterPopup(false);
    setShowSuccessPopup(true);

    setTimeout(() => setShowSuccessPopup(false), 2000); // Auto close success popup after 2s
  };

  const handleCancelRegistration = () => {
    setShowRegisterPopup(false);
  };

  const handleClosePopup = () => {
    setShowRegisterPopup(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Liaison />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPopup />} />
          <Route path="/profilecard" element={<ProfileCard />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/event"
            element={<Events onRegisterButtonClick={handleEventRegisterClick} />}
          />
        </Routes>

        <Footer />

        {/* Global popups */}
        {showRegisterPopup && (
          <ConfirmationPopup
            message="Do you want to register?"
            onConfirm={handleConfirmRegistration}
            onCancel={handleCancelRegistration}
            onClose={handleClosePopup}
          />
        )}

        {showSuccessPopup && (
          <RegistrationSuccess
            message="You're Registered"
            subMessage="Let's check for more events"
          />
        )}
      </div>
    </Router>
  );
}

export default App;
