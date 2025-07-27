import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import EventPage from "./pages/eventpage";
import About from "./pages/about";
import GalleryPage from "./pages/gallary";
<Route path="/pics" element={<GalleryPage />} />
export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}