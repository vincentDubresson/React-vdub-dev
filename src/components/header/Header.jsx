import React from 'react';
import PropTypes from 'prop-types';
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
        <button className="AppHeaderProjectButton" type="button" onClick={() => { handleScroll(projectsRef.current); }}>Mes réalisations</button>
        <button className="AppHeaderContactButton" type="button" onClick={() => { handleScroll(contactRef.current); }}>Me contacter</button>
      </div>
    </div>
  );
}

Header.propTypes = {
  headerRef: PropTypes.element.isRequired,
  projectsRef: PropTypes.element.isRequired,
  contactRef: PropTypes.element.isRequired
};
