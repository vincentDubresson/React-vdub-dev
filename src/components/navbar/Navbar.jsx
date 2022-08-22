import React from 'react';
import './Navbar.scss';
import { NavbarIcons } from '../../data/NavbarIcons';

export default function Navbar() {
  return (
    <nav className="AppNavbar">
      {NavbarIcons.map((Icon) => (
        <div key={Icon.number} className="AppNavbarButton">
          <img className="AppNavBarIcon" src={Icon.source} alt={Icon.alt} />
        </div>
      ))}
    </nav>
  );
}
