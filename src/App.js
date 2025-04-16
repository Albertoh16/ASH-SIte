import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './index';
import ExperiencePage from './pages/experience';
import ProjectsPage from './pages/projects';
import ContactsPage from './pages/contacts';

function App() { 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Router> 
  );
}

export default App;
