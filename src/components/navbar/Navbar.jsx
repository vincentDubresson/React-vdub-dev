/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import arrowIcon from '../../assets/images/icons/navbar/dark/arrow-icon.png';
import homeIcon from '../../assets/images/icons/navbar/dark/home-icon.png';
import projectIcon from '../../assets/images/icons/navbar/dark/project-icon.png';
import contactIcon from '../../assets/images/icons/navbar/dark/contact-icon.png';
import downloadIcon from '../../assets/images/icons/navbar/dark/download-icon.png';
import pdfCV from '../../assets/documents/Vincent_Dubresson_CV.pdf';

export default function Navbar(props) {
  const { headerRef } = props;
  const { projectsRef } = props;
  const { contactRef } = props;

  const [navbarDisplay, setNavbarDisplay] = useState('DisplayNone');

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

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
    return navbarOpen;
  };

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
    setNavbarOpen(false);
  };

  const NavbarOpenClass = navbarOpen ? 'NavbarOpen' : null;

  return (
    <nav className={`${navbarDisplay} ${NavbarOpenClass}`}>
      <div onClick={handleNavbar} className="AppNavbarButton">
        <img
          style={{ transform: navbarOpen ? 'rotateZ(180deg)' : 'rotateZ(0deg)', transition: '0.3s' }}
          className="AppNavbarIcon"
          src={arrowIcon}
          alt="Icône flèche pour aggrandir le menu"
        />
      </div>
      <div onClick={() => { handleScroll(headerRef.current); }} className="AppNavbarButton">
        <img
          className="AppNavbarIcon"
          src={homeIcon}
          alt="Icône flèche pour aggrandir le menu"
        />
        <p className="AppNavbarDescription">Accueil</p>
      </div>
      <div onClick={() => { handleScroll(projectsRef.current); }} className="AppNavbarButton">
        <img
          className="AppNavbarIcon"
          src={projectIcon}
          alt="Icône flèche pour aggrandir le menu"
        />
        <p className="AppNavbarDescription">Mes réalisations</p>
      </div>
      <div onClick={() => { handleScroll(contactRef.current); }} className="AppNavbarButton">
        <img
          className="AppNavbarIcon"
          src={contactIcon}
          alt="Icône flèche pour aggrandir le menu"
        />
        <p className="AppNavbarDescription">Contact</p>
      </div>
      <div onClick={() => { window.open(pdfCV, '_blank'); }} className="AppNavbarButton">
        <img
          className="AppNavbarIcon"
          src={downloadIcon}
          alt="Icône flèche pour aggrandir le menu"
        />
        <p className="AppNavbarDescription">Télécharger mon CV</p>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  headerRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired
};
