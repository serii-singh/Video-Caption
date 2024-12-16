import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import the Navbar component

const Selection = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [file, setFile] = useState(null);
  const [urlError, setUrlError] = useState(false); // Track if URL is invalid
  const navigate = useNavigate();

  const handleVideoUrlChange = (e) => {
    const url = e.target.value;
    setVideoUrl(url);

    // Validate the URL to check if it ends with a valid video file extension
    const videoUrlPattern = /\.(mp4|webm|ogg)$/i; // Allow .mp4, .webm, .ogg
    setUrlError(!videoUrlPattern.test(url)); // Set error state based on URL pattern
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Only allow video files (MP4, WebM, Ogg, etc.)
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid video file (MP4).");
      setFile(null); // Clear the file if it's invalid
    }
  };

  const handleStartEditing = () => {
    // Navigate to the edit page if file or valid URL is provided
    if (videoUrl || file) {
      navigate("/edit-captions", { state: { videoUrl, file } });
    } else {
      alert("Please upload a file or provide a video URL.");
    }
  };

  const isButtonDisabled = !(videoUrl || file) || urlError; // Disable button if no input or invalid URL

  return (
    <div className="bg-slate-300 dark:bg-gray-900 transition-all duration-300 min-h-screen">
      {/* Add Navbar */}
      <Navbar />

      <div className="flex justify-center items-center h-screen pt-24 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-7xl p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg gap-8">
          {/* Left Side - File Upload Section */}
          <div className="w-full md:w-1/2 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md flex flex-col justify-start items-start space-y-6">
            <div className="text-6xl text-gray-600 dark:text-white">
              <i className="fas fa-upload"></i> {/* Upload Icon */}
            </div>
            <input
              type="file"
              onChange={handleFileChange}
              accept="video/mp4,video/webm,video/ogg,video/*" // Restrict to video files only
              className="w-full p-6 mb-6 border-2 border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer text-xl bg-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300"
            />
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
              Upload your video file from your device (MP4.)
            </p>
          </div>

          {/* Right Side - URL Input Section */}
          <div className="w-full md:w-1/2 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md flex flex-col justify-start items-start space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center md:text-left">
              Add the URL to Hosted Video
            </h2>
            <input
              type="url"
              value={videoUrl}
              onChange={handleVideoUrlChange}
              placeholder="Enter Video URL"
              className="w-full p-6 mb-6 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-xl bg-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300"
            />
            {urlError && (
              <p className="text-slate-500 text-sm text-center">
                Please enter a valid video URL (e.g., https://example.com/video.mp4)
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Start Editing Button, placed directly below the sections */}
      <div className="flex justify-center mt-4 mb-6">
        <button
          onClick={handleStartEditing}
          disabled={isButtonDisabled}
          className={`bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-4 rounded-lg w-full md:w-1/2 font-semibold transition-all duration-300 hover:scale-105 hover:bg-gradient-to-l shadow-xl ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Start Editing
        </button>
      </div>
    </div>
  );
};

export default Selection;
