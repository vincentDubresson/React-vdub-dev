import React, { useRef } from 'react';
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
    <div className="App">
      <Navbar headerRef={headerRef} projectsRef={projectsRef} contactRef={contactRef} />
      <header className="Header">
        <Header headerRef={headerRef} projectsRef={projectsRef} contactRef={contactRef} />
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
  );
}
