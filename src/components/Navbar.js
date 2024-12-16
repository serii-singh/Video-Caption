import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Set initial state based on localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Save the dark mode preference in localStorage and apply it to document root
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Add dark mode class to the root
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark mode class from the root
    }
  }, [darkMode]);

  return (
    <nav className="bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-300 p-5 fixed w-full top-0 z-50 shadow-xl transition-all duration-300 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white">
          <Link
            to="/"
            className="text-transparent bg-clip-text text text-slate-800"
          >
            Captions
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="space-x-6 hidden md:flex">
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-300 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-500 hover:text-gray-300 transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/profile"
            className="text-gray-500 hover:text-gray-300 transition-all duration-300"
          >
            Profile
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-white p-2 rounded-full bg-gray-700 dark:bg-gray-300 hover:bg-gray-600 dark:hover:bg-gray-500 transition-all duration-300"
          >
            {/* Sun Icon for light mode */}
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v3m0 12v3m9-9h-3m-12 0H3m16.95-7.05l-2.12 2.12m-9.9 9.9l-2.12 2.12m9.9-9.9l-2.12-2.12m-9.9 9.9l-2.12-2.12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v3m0 12v3m9-9h-3m-12 0H3m16.95-7.05l-2.12 2.12m-9.9 9.9l-2.12 2.12m9.9-9.9l-2.12-2.12m-9.9 9.9l-2.12-2.12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
