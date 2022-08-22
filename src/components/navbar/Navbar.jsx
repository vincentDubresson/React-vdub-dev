import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { NavbarIcons } from '../../data/NavbarIcons';

export default function Navbar() {
  const [navbarDisplay, setNavbarDisplay] = useState('displayNone');

  const navbarOpacity = () => {
    console.log(window.scrollY);
    if (
      (window.innerWidth > 600 && window.scrollY > 400)
            || (window.innerWidth < 600 && window.scrollY > 300)
    ) {
      setNavbarDisplay('AppNavbar');
    } else if (window.innerWidth > 600 && window.scrollY < 400) {
      setNavbarDisplay('AppNavbar navbarRight');
    } else {
      setNavbarDisplay('AppNavbar navbarBottom');
    }

    /*     if (window.scrollY > 300 && window.innerWidth < 600) {
      setNavbarDisplay('AppNavbar');
    } else {
      setNavbarDisplay('AppNavbar navbarBottom');
    }
    if (window.scrollY > 400 && window.innerWidth > 600) {
      setNavbarDisplay('AppNavbar');
    } else {
      setNavbarDisplay('AppNavbar navbarRight');
    } */
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
