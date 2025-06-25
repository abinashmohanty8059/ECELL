import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaGoogle, FaArrowRight, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
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
const db = getFirestore(app);

const LoginPopup = ({ onClose }) => {
  const popupRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const recordLoginSession = async (user) => {
    try {
      await addDoc(collection(db, "userSessions"), {
        userId: user.uid,
        email: user.email,
        loginTime: serverTimestamp(),
        loginMethod: user.providerData?.[0]?.providerId || 'email',
        userAgent: navigator.userAgent
      });
    } catch (e) {
      console.error("Error recording session: ", e);
    }
  };

  const handleEmailLogin = async () => {
    if (!email.endsWith('@kiit.ac.in')) {
      setError('Please use your KIIT email (@kiit.ac.in) to login.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await recordLoginSession(userCredential.user);
      setLoginSuccess(true);
      setTimeout(() => {
        onClose();
      }, 7000);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      if (user.email && user.email.endsWith('@kiit.ac.in')) {
        await recordLoginSession(user);
        setLoginSuccess(true);
        setTimeout(() => {
          onClose();
        }, 7000);
      } else {
        await auth.signOut();
        setError('Please use your KIIT email (@kiit.ac.in) to login.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div
        ref={popupRef}
        className="bg-[#1a2b32] rounded-2xl shadow-lg p-8 md:p-10 max-w-md w-[90%] text-white space-y-6"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/Loginpopup logo.svg" alt="E-Cell Logo" className="h-14" />
        </div>

        {/* Show success message or login form */}
        {loginSuccess ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-500">Login Successful!</h2>
            <p className="text-sm text-gray-300">You will be redirected shortly...</p>
          </div>
        ) : (
          <>
            {/* Title */}
            <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
            <p className="text-sm text-gray-300 text-center">
              Please enter your details to sign in
            </p>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center p-2 bg-red-900/30 rounded">
                {error}
              </div>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="E-mail (use KIIT e-mail ID)"
              className="w-full px-4 py-3 rounded-md bg-[#2b3e45] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <div className="flex items-center space-x-2 bg-[#2b3e45] rounded-md px-3 py-2">
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent focus:outline-none text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleEmailLogin}
                disabled={loading}
                className="p-2 rounded-full border-2 transition"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <FaArrowRight className="text-white" />
                )}
              </button>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-blue-500" />
              <label>Remember Me</label>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <hr className="w-full border-gray-500" />
              <span>OR</span>
              <hr className="w-full border-gray-500" />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 text-white text-xl">
              <FaGoogle 
                className="cursor-pointer hover:text-blue-400" 
                onClick={handleGoogleLogin}
              />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaGithub className="cursor-pointer hover:text-blue-400" />
            </div>

            {/* Bottom Link */}
            <p className="text-sm text-center text-gray-400">
              Don't have an account?{' '}
              <Link to="/Signup" onClick={onClose}>
                <span className="text-white font-semibold cursor-pointer hover:underline">
                  Create Account
                </span>
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;