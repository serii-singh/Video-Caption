// src/pages/Home.js

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; 

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar /> 

      <div className="flex flex-col-reverse md:flex-row h-full mt-20">
        {/* Left side - Video Section */}
        <div className="w-full md:w-1/2 h-full relative overflow-hidden">
          {/* Embed the YouTube Video using iframe with mute and hidden controls */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fY1j47agiFA?autoplay=1&loop=1&playlist=fY1j47agiFA&mute=1&controls=0&showinfo=0&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-500"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div> {/* Gradient overlay */}
        </div>

        {/* Right side - User Creation Section */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center bg-black text-white">
          <div className="text-center p-10 bg-opacity-90 rounded-3xl shadow-2xl max-w-lg mx-auto transform transition-all duration-500 hover:scale-105">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-500 mb-8">
              Create Your Account
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Register to start editing your videos with captions and much more!
            </p>

            {/* Register Form or Action */}
            <div className="space-y-6">
              {/* <input
                type="text"
                placeholder="Enter Username"
                className="w-full p-4 bg-transparent text-white placeholder-gray-500 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
              /> */}
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-4 bg-transparent text-white placeholder-gray-500 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full p-4 bg-transparent text-white placeholder-gray-500 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
              />
            </div>

            <div className="mb-6 mt-8">
              <Link
                to="/selection"
                className="bg-gradient-to-r from-blue-100 via-slate-500 to-purple-300 text-white px-8 py-3 rounded-full text-2xl font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-l"
              >
                Register & Start Adding Captions
              </Link>
            </div>

            {/* Or skip the registration and go to the next page */}
            <div>
              <Link
                to="/selection"
                className="text-blue-300 underline text-lg"
              >
                Skip Registration & Go to Next Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
