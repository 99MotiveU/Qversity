import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

// Import all the pages
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import StudyPage from "./pages/StudyPage";

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const authenticatedUserToken = Cookies.get('authenticatedUserToken');
    if (authenticatedUserToken) {
      navigate('/main');
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/set/:setId" element={<DetailPage />} />
      <Route path="/study/:setId" element={<StudyPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
