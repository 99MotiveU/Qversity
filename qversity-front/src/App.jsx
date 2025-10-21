import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all the pages
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import StudyPage from "./pages/StudyPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/set/:setId" element={<DetailPage />} />
        <Route path="/study/:setId" element={<StudyPage />} />
      </Routes>
    </Router>
  );
}
