/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { NavbarIcons } from '../../data/NavbarIcons';
import arrowIcon from '../../assets/images/icons/navbar/dark/arrow-icon.png';

export default function Navbar() {
  const [navbarDisplay, setNavbarDisplay] = useState('DisplayNone');
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
    return navbarOpen;
  };

  const NavbarOpen = navbarOpen ? 'NavbarOpen' : null;

  const navbarOpacity = () => {
    if (
      (window.innerWidth > 600 && window.scrollY > 400)
            || (window.innerWidth < 600 && window.scrollY > 300)
    ) {
      setNavbarDisplay('AppNavbar');
    } else if (window.innerWidth > 600 && window.scrollY < 400) {
      setNavbarDisplay('AppNavbar NavbarRight');
    } else {
      setNavbarDisplay('AppNavbar NavbarBottom');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navbarOpacity);
    return () => {
      window.removeEventListener('scroll', navbarOpacity);
    };
  }, []);

  return (
    <nav className={`${navbarDisplay} ${NavbarOpen}`}>
      <div onClick={handleNavbar} className="AppNavbarButton">
        <img
          style={{ transform: navbarOpen ? 'rotateZ(180deg)' : 'rotateZ(0deg)', transition: '0.3s' }}
          className="AppNavbarIcon"
          src={arrowIcon}
          alt="Icône flèche pour aggrandir le menu"
        />
      </div>
      {NavbarIcons.map((Icon) => (
        <div key={Icon.number} className="AppNavbarButton">
          <img
            className="AppNavbarIcon"
            src={Icon.source}
            alt={Icon.alt}
          />
          <p className="AppNavbarDescription">{Icon.description}</p>
        </div>
      ))}
    </nav>
  );
}
