import React from 'react';
import logo from '/KIIT logo white.png'; // Adjust the path as necessary


function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and Subscription */}
        {/* Adjusted alignment for mobile (center) and desktop (left) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-4">
            <img src={logo} alt="E-Cell Logo" className="h-12 w-auto mb-2" />
        
          </div>
          <p className="text-sm mb-4">Subscribe to Our Blogs</p>
  <div className="flex w-full max-w-xs relative items-center">
            <input
              type="email"
              placeholder="Enter your E-mail"
              className="flex-grow p-2 relative rounded-full bg-gray-700 border border-blue-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-0 bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200 flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Column 2: Our Initiatives */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-blue-300">OUR INITIATIVES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300 text-sm">I-Camp</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">BuildSchool</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Hult Prize</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Ideathon</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Growth Garage</a></li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-blue-300">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300 text-sm">Home</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">About Us</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Gallery</a></li>
            <li><a href="#" className="hover:text-blue-300 text-sm">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-blue-300">CONTACT</h3>
          <ul className="space-y-2">
<li className="flex items-center justify-center md:justify-start text-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
  E-cell KIIT Bhubaneswar, Odisha
</li>
            <li className="flex items-center justify-center md:justify-start text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              support@ecell.in
            </li>
          </ul>
        </div>
      </div>

      {/* Social Networks Section */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-col ">
        <p className="text-sm mb-4 sm:mb-0 text-center sm:text-left">Get Connected with us on social networks:</p>
        <div className="flex space-x-4">
          {/* Social icons with border and background to match screenshot */}
          {/* LinkedIn */}
          <a href="#" className="flex  justify-center w-8 h-8 sm:text-left py-4">
            <svg xmlns="http://www.w3.org" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.766s.784-1.766 1.75-1.766 1.75.79 1.75 1.766-.783 1.766-1.75 1.766zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="flex  justify-center w-8 h-8 sm:text-left py-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.772 1.668 4.92 4.92.058 1.265.07 1.645.07 4.85 0 3.204-.012 3.584-.07 4.85-1.92 3.252-1.668 4.772-4.92 4.92-1.265.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-1.92-4.772-1.668-4.92-4.92-.058-1.265-.07-1.645-.07-4.85 0-3.204.012-3.584.07-4.85 1.92-3.252 1.668-4.772 4.92-4.92 1.265-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.623-6.98 6.98-.059 1.28-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.623 6.78 6.98 6.98 1.28.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.358-.2 6.78-2.623 6.98-6.98.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.358-2.623-6.78-6.98-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" className="flex justify-center w-8 h-8 sm:text-left py-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.262 16.281c-.183.671-.62 1.258-1.205 1.716-.606.471-1.309.774-2.115.895-1.503.228-3.328.322-5.023.322-1.696 0-3.52-.094-5.023-.322-.806-.121-1.509-.424-2.115-.895-.585-.458-1.022-1.045-1.205-1.716-.183-.671-.277-1.564-.277-2.481 0-.917.094-1.81.277-2.481.183-.671.62-1.258 1.205-1.716.606-.471 1.309-.774 2.115-.895 1.503-.228 3.328-.322 5.023-.322 1.696 0 3.52.094 5.023.322.806.121 1.509.424 2.115.895.585.458 1.022 1.045 1.205 1.716.183.671.277 1.564.277 2.481 0 .917-.094 1.81-.277 2.481zm-7.262-6.281l4.998 2.5-4.998 2.5v-5z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" className="flex justify-center w-8 h-8 sm:text-left py-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.353c-.567 0-.713.298-.713.847v1.653h2.353l-.261 2.353h-2.092v7.147h-3v-7.147h-2v-2.353h2v-1.908c0-1.092.516-2.739 2.771-2.739h2.229v3z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-500">
        &copy; 2025 Copyright: KIIT E-Cell
      </div>
    </footer>
  );
}

export default Footer;