import React from 'react';
import { FaUserEdit, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { MdSettings, MdEdit } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-[#1e2a32] text-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4">
      {/* Avatar Placeholder */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-5xl">
          <FaUserCircle />
        </div>
        <button className="absolute bottom-0 right-0 p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          <MdEdit size={18} />
        </button>
      </div>

      {/* Name and Email */}
      <div className="text-center">
        <h2 className="text-xl font-semibold">Name</h2>
        <p className="text-sm text-gray-300">Mail</p>
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
        <div className="flex items-center space-x-2 text-red-500 cursor-pointer hover:underline">
          <FaSignOutAlt />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;