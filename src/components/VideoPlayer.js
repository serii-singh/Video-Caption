import React, { useRef, useEffect, useState } from "react";

const VideoPlayer = ({ videoUrl, file, captions }) => {

  const videoRef = useRef(null);
  console.log(videoRef , "vr")
  const [currentTime, setCurrentTime] = useState(0);
  const [isIframe, setIsIframe] = useState(false);

  // Check if the video URL is an iframe URL (YouTube, Vimeo, etc.)
  const isIframeUrl = (url) => {
    return /youtube\.com/.test(url) || /vimeo\.com/.test(url);
  };

  // Handle time update for regular video
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Function to render either video or iframe based on URL type
  const renderVideoPlayer = () => {
    if (isIframe) {
      return (
        <iframe
          width="100%"
          height="500"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video"
        />
      );
    } else {
      return (
        <video
          ref={videoRef}
          controls
          className="w-full"
          src={file ? URL.createObjectURL(file) : videoUrl}
        />
      );
    }
  };

  // On mount, check if it's an iframe URL and set the state accordingly
  useEffect(() => {
    setIsIframe(isIframeUrl(videoUrl));
  }, [videoUrl]);

  // Set up timeupdate listener for regular video
  useEffect(() => {
    if (videoRef.current && !isIframe) {
      const video = videoRef.current;
      video.addEventListener("timeupdate", handleTimeUpdate);
      return () => video.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }, [isIframe]);

  // Debugging: Use a setInterval to log currentTime and check for errors in the time calculation
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Current time (seconds):", currentTime);
    }, 1000); // Log currentTime every second
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentTime]);

  return (
    <div className="relative">
      {renderVideoPlayer()}

      {/* Display captions */}
      {captions &&
        captions.map((caption, index) => {
          const isVisible =
            currentTime >= caption.startTime && currentTime <= caption.endTime;

          if (isVisible) {
            return (
              <div
                key={index}
                className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg opacity-75"
              >
                {caption.captionText}
              </div>
            );
          }

          return null; // Return null when caption is out of the time range
        })}
    </div>
  );
};

export default VideoPlayer;
