import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import CaptionList from "../components/CaptionList";
import Navbar from "../components/Navbar"; // Assuming you have a Navbar component

const CaptionPreview = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  
  const { videoUrl, captions, file } = location.state || {};
  
  // Function to download video
  const handleDownload = () => {
    if (file) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(file);
      a.download = "video_with_captions.mp4"; // Set the default download filename
      a.click();
    } else {
      alert("No video file available to download.");
    }
  };

  // Function to save captions (in this example, we'll log them, but you can modify it)
  const handleSaveCaptions = () => {
    // For example, saving the captions in the localStorage or sending them to an API
    localStorage.setItem("captions", JSON.stringify(captions));
    alert("Captions saved!");
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar /> {/* Add the Navbar here */}

      <div className="p-8 bg-white rounded-lg shadow-lg w-full md:w-1/2 mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Preview Video with Captions</h2>

        {/* Video player */}
        <VideoPlayer videoUrl={videoUrl} file={file} captions={captions} />
        
        {/* Caption List */}
        <CaptionList captions={captions} />

        {/* Buttons */}
        <div className="mt-4 flex space-x-4">
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Download Video
          </button>

          {/* Save Button */}
          <button
            onClick={handleSaveCaptions}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Save Captions
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaptionPreview;
