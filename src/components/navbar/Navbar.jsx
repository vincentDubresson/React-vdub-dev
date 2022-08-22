import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { NavbarIcons } from '../../data/NavbarIcons';

export default function Navbar() {
  const [navbarDisplay, setNavbarDisplay] = useState('AppNavbar navbarBottom');

  const navbarOpacity = () => {
    if (window.scrollY > 300 && window.innerWidth < 600) {
      setNavbarDisplay('AppNavbar');
    } else {
      setNavbarDisplay('AppNavbar navbarBottom');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navbarOpacity);
    return () => {
      window.removeEventListener('scroll', navbarOpacity);
    };
  }, []);

  return (
    <nav className={navbarDisplay}>
      {NavbarIcons.map((Icon) => (
        <div key={Icon.number} className="AppNavbarButton">
          <img
            className="AppNavbarIcon"
            src={Icon.source}
            alt={Icon.alt}
          />
        </div>
      ))}
    </nav>
  );
}
