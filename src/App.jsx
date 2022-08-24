import React from 'react';
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
  return (
    <div className="App">
      <Navbar />
      <header className="Header">
        <Header />
        <div className="HeaderTriangle" />
      </header>
      <main className="MainSite">
        <About />
        <Technologies />
        <div className="TechnologiesSeparator" />
        <SoftSkills />
        <Projects />
        <div className="ProjectsSeparator" />
        <Contact />
      </main>
      <footer className="Footer">
        <Footer />
      </footer>
    </div>
  );
}
