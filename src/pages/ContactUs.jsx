import React, { useState } from "react";
import mapBg from "/contact us.svg";
import { X } from "lucide-react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Firebase configuration (add this with your existing imports)
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
const db = getFirestore(app);

const ContactUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Backgrounds */}
      <img
        src={mapBg}
        alt="Map"
        className="block md:hidden w-full h-[40vh] object-cover"
      />
      <img
        src={mapBg}
        alt="Map"
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Desktop Form */}
      <div className="hidden md:flex relative z-10 w-full justify-end pr-8">
        <div className="mt-20 p-10 bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg rounded-3xl w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-6">Let’s talk <span className="font-bold">with us!</span></h2>
          <ContactForm />
        </div>
      </div>

      {/* Mobile Slide Form + Footer */}
      <div className="md:hidden mt-[-70px] z-20 relative">
        <div
          className={`
            transition-all duration-500 ease-in-out
            ${isExpanded ? "translate-y-0" : "translate-y-[60%]"}
          `}
        >
          {/* Slide-up Form */}
          <div className="bg-[#1a1a1a]/90 backdrop-blur-md rounded-t-3xl px-6 pt-4 pb-8 shadow-2xl relative">
            {/* Handle */}
            <div
              onClick={() => setIsExpanded(true)}
              className="w-full flex justify-center cursor-pointer"
            >
              <div className="w-12 h-1.5 bg-gray-500 rounded-full mb-2"></div>
            </div>

            {/* Close button */}
            {isExpanded && (
              <button
                className="absolute top-3 right-4 text-gray-300 hover:text-white"
                onClick={() => setIsExpanded(false)}
              >
                <X className="w-6 h-6" />
              </button>
            )}

            {/* Heading */}
            <h2 className="text-xl font-semibold mb-4 text-white text-center">
              Let’s talk <span className="font-bold">with us!</span>
            </h2>

            {/* Actual Form */}
            <ContactForm />
          </div>

          {/* Footer (always follows the form) */}
          
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add a new document to the "contactMessages" collection
      await addDoc(collection(db, "contactMessages"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date()
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Status Message */}
      {submitStatus === 'success' && (
        <div className="p-2 bg-green-900/30 text-green-400 text-sm rounded mb-2">
          Message sent successfully!
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-2 bg-red-900/30 text-red-400 text-sm rounded mb-2">
          Failed to send message. Please try again.
        </div>
      )}

      <div>
        <label className="text-sm block mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm block mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email ID"
            className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="text-sm block mb-1">Phone No.</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone No."
            className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-sm block mb-1">Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          placeholder="Type here..."
          className="w-full p-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-white text-black font-semibold rounded-br-lg hover:bg-gray-200 transition disabled:opacity-50"
      >
        {isSubmitting ? 'SENDING...' : 'SEND'}
      </button>
    </form>
  );
};

export default ContactUs;