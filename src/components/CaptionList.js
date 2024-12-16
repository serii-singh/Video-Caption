import React from "react";

const CaptionList = ({ captions, currentTime, onCaptionClick }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl text-gray-600 font-semibold">Captions</h3>
      <ul className="space-y-2">
        {captions.map((caption, index) => {
          const isActive = currentTime >= caption.startTime && currentTime <= caption.endTime;
          return (
            <li
              key={index}
              className={`p-2 rounded-lg ${isActive ? "bg-blue-300" : "bg-gray-200"}`}
              onClick={() => onCaptionClick(caption.startTime)} // Jump to caption time
            >
              <strong>{caption.captionText}</strong> (Start: {caption.startTime}s, End: {caption.endTime}s)
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CaptionList;
