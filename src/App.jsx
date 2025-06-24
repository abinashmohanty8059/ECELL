import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import SignUp from "./pages/Signup";
import LoginPopup from "./pages/Loginpopup";
import ProfileCard from "./pages/ProfileCard";
import Navbar from "./pages/Navbar";
import "./index.css";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Liaison from "./pages/Liaison";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
             <Liaison/>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPopup />} />
        <Route path="/profilecard" element={<ProfileCard />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;