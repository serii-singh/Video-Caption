import React, { useState } from "react";

const CaptionEditor = ({ addCaption }) => {
  const [captionText, setCaptionText] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState("");

  const handleAddCaption = () => {
    const start = parseFloat(startTime);
    const end = parseFloat(endTime);

    // Validate inputs
    if (!captionText || isNaN(start) || isNaN(end)) {
      setError("Please enter valid caption text and time values.");
      return;
    }

    if (start >= end) {
      setError("Start time must be less than end time.");
      return;
    }

    // Call addCaption function passed from parent to add the caption
    addCaption(captionText, start, end);

    // Clear the input fields
    setCaptionText("");
    setStartTime("");
    setEndTime("");
    setError(""); // Clear error
  };

  return (
    <div>
      <input
        type="text"
        value={captionText}
        onChange={(e) => setCaptionText(e.target.value)}
        placeholder="Enter caption text"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        placeholder="Start Time (seconds)"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        placeholder="End Time (seconds)"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      {/* Show error message */}
      {error && <div className="text-red-500 text-sm">{error}</div>}

      <button
        onClick={handleAddCaption}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Add Caption
      </button>
    </div>
  );
};

export default CaptionEditor;
