import React, { useEffect, useState } from 'react';
import { FaUserEdit, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { MdSettings, MdEdit } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
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

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // If not logged in, redirect to login
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // If user data is not loaded yet
  if (!user) {
    return <div className="max-w-sm mx-auto mt-10 bg-[#1e2a32] text-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4">Loading...</div>;
  }

  return (
    <div className="max-w-sm mx-auto mt-10 bg-[#1e2a32] text-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4">
      {/* Avatar Placeholder */}
      <div className="relative">
        {user.photoURL ? (
          <img 
            src={user.photoURL} 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-5xl">
            <FaUserCircle />
          </div>
        )}
        <button className="absolute bottom-0 right-0 p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          <MdEdit size={18} />
        </button>
      </div>

      {/* Name and Email */}
      <div className="text-center">
        <h2 className="text-xl font-semibold">{user.displayName || 'User'}</h2>
        <p className="text-sm text-gray-300">{user.email}</p>
      </div>

      {/* Options */}
      <div className="w-full flex flex-col space-y-3 text-left px-6">
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
          <BsPerson />
          <span>My Profile</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
          <FaUserEdit />
          <span>Edit Info</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
          <MdSettings />
          <span>Settings</span>
        </div>
        <div 
          className="flex items-center space-x-2 text-red-500 cursor-pointer hover:underline"
          onClick={handleSignOut}
        >
          <FaSignOutAlt />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;