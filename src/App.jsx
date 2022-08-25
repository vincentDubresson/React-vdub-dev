import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Technologies from './components/technologies/Technologies';
import SoftSkills from './components/soft-skills/SoftSkills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.scss';

export default function App() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="Header">
          <Routes>
            <Route path="/" element={<Header headerRef={headerRef} projectsRef={projectsRef} contactRef={contactRef} />} />
          </Routes>
          <div className="HeaderTriangle" />
        </header>
        <main className="MainSite">
          <About />
          <Technologies />
          <div className="TechnologiesSeparator" />
          <SoftSkills />
          <Projects projectsRef={projectsRef} />
          <div className="ProjectsSeparator" />
          <Contact contactRef={contactRef} />
        </main>
        <footer className="Footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
