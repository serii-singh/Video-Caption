import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Selection from "./pages/Selection";
import EditCaptions from "./pages/EditCaptions";
import CaptionPreview from "./pages/CaptionPreview";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/edit-captions" element={<EditCaptions />} />
          <Route path="/caption-preview" element={<CaptionPreview />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
