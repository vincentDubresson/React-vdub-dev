import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
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
      </main>
    </div>
  );
}
