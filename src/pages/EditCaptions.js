import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CaptionEditor from "../components/CaptionEditor";
import VideoPlayer from "../components/VideoPlayer";
import CaptionList from "../components/CaptionList";
import Navbar from "../components/Navbar";

const EditCaptions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoUrl, file } = location.state || {}; // Destructure videoUrl and file from location.state

  // State management
  const [captions, setCaptions] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  // Add caption handler
  const addCaption = (captionText, startTime, endTime) => {
    setCaptions((prevCaptions) => [
      ...prevCaptions,
      { captionText, startTime, endTime },
    ]);
  };

  // Handle time update from video player
  const handleTimeUpdate = (time) => {
    setCurrentTime(time); // Update current video time
  };

  // Navigate to caption preview page
  const handlePreview = () => {
    navigate("/caption-preview", { state: { videoUrl, captions, file } });
  };

  useEffect(() => {
    if (!videoUrl) {
      alert("No video found!");
      navigate("/");
    }
  }, [videoUrl, navigate]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar /> {/* Navbar Component */}

      {/* Main Content */}
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full md:w-1/2 mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-purple-900 dark:text-white">Edit Captions</h2>

        {videoUrl ? (
          <VideoPlayer
            videoUrl={videoUrl}
            file={file}
            onTimeUpdate={handleTimeUpdate}
            captions={captions}
          />
        ) : (
          <div className="text-center text-red-500">Video not found!</div>
        )}

        {/* Caption Editor with the addCaption function passed as prop */}
        <CaptionEditor addCaption={addCaption} />

        {/* Caption List */}
        <CaptionList
          captions={captions}
          currentTime={currentTime}
          onCaptionClick={(startTime) => {
            const video = document.querySelector("video");
            if (video) video.currentTime = startTime;
          }}
        />

        {/* Preview Button */}
        <button
          onClick={handlePreview}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-4"
        >
          Preview Captions
        </button>
      </div>
    </div>
  );
};

export default EditCaptions;
