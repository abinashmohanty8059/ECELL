import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Components imports (keep all existing ones)
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
import RegistrationSuccess from "./pages/RegisterSuccess";
import "./index.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6_fnu1X8Fdv9E8JZJQb-JYl9dfnGG4ZA",
  authDomain: "cell-4edca.firebaseapp.com",
  projectId: "cell-4edca",
  storageBucket: "cell-4edca.firebasestorage.app",
  messagingSenderId: "601339552841",
  appId: "1:601339552841:web:f72b97fcdbaf3b89d08b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleEventRegisterClick = () => {
    setShowRegisterPopup(true);
  };

  const handleConfirmRegistration = () => {
    setShowRegisterPopup(false);
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 2000);
  };

  const handleCancelRegistration = () => {
    setShowRegisterPopup(false);
  };

  const handleClosePopup = () => {
    setShowRegisterPopup(false);
  };

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center">Loading...</div>;
  }

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar user={user} />

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
          <Route 
            path="/login" 
            element={user ? <Navigate to="/profile" /> : <LoginPopup />} 
          />
          <Route 
            path="/profile" 
            element={user ? <ProfileCard /> : <Navigate to="/login" />} 
          />
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