/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';
import './Header.scss';
import websiteLogo from '../../assets/images/logo/logo.gif';

export default function Header(props) {
  const { headerRef } = props;
  const { projectsRef } = props;
  const { contactRef } = props;
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="AppHeader" ref={headerRef}>
      <img className="AppHeaderLogo" src={websiteLogo} alt="Logo du site" />
      <div className="AppHeaderTitleContainer">
        <h1 className="AppHeaderTitle">Bienvenue sur mon Portfolio</h1>
        <button className="AppHeaderProjectButton" type="button"><Link className="AppHeaderButtonLink" to="/#projects" onClick={() => { handleScroll(projectsRef.current); }}>Mes réalisations</Link></button>
        <button className="AppHeaderContactButton" type="button"><Link className="AppHeaderButtonLink" to="/#contact" onClick={() => { handleScroll(contactRef.current); }}>Me contacter</Link></button>
      </div>
    </div>
  );
}
