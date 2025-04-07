import React, { useRef } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/index.css'

import Home from './index';
import AboutPage from './pages/about';
import ExperiencePage from './pages/experience';
import ProjectsPage from './pages/projects';

function App() { 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router> 
  );
}

export default App;
