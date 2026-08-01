import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CaseStudyLayout from './pages/CaseStudyLayout';
import Experience from './pages/Experience';
import Expertise from './pages/Expertise';
import Leadership from './pages/Leadership';
import Learning from './pages/Learning';
import Uses from './pages/Uses';
import Changelog from './pages/Changelog';
import MediaKit from './pages/MediaKit';

function AnimatedRoutes() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<CaseStudyLayout />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/media-kit" element={<MediaKit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="grow">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}
