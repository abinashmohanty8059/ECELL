import React, { useState, useEffect } from 'react';
import SuccessPopup from './SuccessPopup'; // adjust path if needed
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

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

const SignUp = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFirstLogo, setShowFirstLogo] = useState(true); // for alternation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate KIIT email
    if (!formData.email.endsWith('@kiit.ac.in')) {
      setError('Please use your KIIT email (@kiit.ac.in) to sign up.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      setShowSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Check if email ends with @kiit.ac.in
      if (user.email && user.email.endsWith('@kiit.ac.in')) {
        // Successful sign up with KIIT email
        setShowSuccess(true);
      } else {
        // Not a KIIT email - sign out the user
        await auth.signOut();
        setError('Please use your KIIT email (@kiit.ac.in) to sign up.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Toggle logo every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstLogo((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
      <div className="w-full max-w-6xl bg-[#0e0e0e] text-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 mt-6">Create Your Account</h2>

          {/* Google Sign Up */}
          <button 
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full border border-gray-400 rounded-md py-2 flex items-center justify-center gap-3 text-sm mb-4 hover:border-white transition"
          >
            <span className="text-lg font-bold">G</span>
            <span>Sign up with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600" />
            <span className="mx-4 text-sm text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-600" />
          </div>

          {/* Form */}
          <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-500 text-sm text-center p-2 bg-red-900/30 rounded">
                {error}
              </div>
            )}
            
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="Enter your Name" 
                className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                E-mail <span className="text-xs text-gray-400">(Use KIIT Email ID)</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="Enter your KIIT Email ID" 
                className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required 
                placeholder="Enter your Password" 
                className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center text-xs text-gray-400 mt-2">
              <input type="checkbox" className="mr-2" required />
              <span>I accept all the terms and conditions</span>
            </div>

            <button type="submit" className="w-full mt-4 py-2 rounded-md bg-white text-black font-bold tracking-wide hover:bg-gray-200 transition">
              SIGN UP
            </button>
          </form>
        </div>

        {/* Right Side - Alternating Logo */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-10">
          <img
            src={showFirstLogo ? '/Signup logo(1).svg' : '/Signup logo(2).svg'}
            alt="E-Cell Logo"
            className="transition-opacity duration-1000 ease-in-out w-[300px] sm:w-[380px] md:w-[440px]"
          />
        </div>
      </div>

      {/* Show Success Popup */}
      {showSuccess && <SuccessPopup />}
    </div>
  );
};

export default SignUp;