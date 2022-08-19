import React from 'react';
import './App.scss';
import homeIcon from './assets/images/icons/light/home-icon.png';
import projectIcon from './assets/images/icons/light/project-icon.png';
import contactIcon from './assets/images/icons/light/contact-icon.png';
import downloadIcon from './assets/images/icons/light/download-icon.png';
import SoftSkills from './components/soft-skills/SoftSkills';

export default function App() {
  return (
    <div className="App">
      <h1>Hello world !</h1>
      <p>Hello World !</p>
      <img src={homeIcon} alt="Croquis d'un bureau de développeur web" />
      <img src={downloadIcon} alt="Croquis d'un bureau de développeur web" />
      <img src={projectIcon} alt="Croquis d'un bureau de développeur web" />
      <img src={contactIcon} alt="Croquis d'un bureau de développeur web" />
      <SoftSkills />
    </div>
  );
}
