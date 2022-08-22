import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import './App.scss';

export default function App() {
  return (
    <div className="App">
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
