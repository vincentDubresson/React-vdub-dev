import React from 'react';
import './Header.scss';
import websiteLogo from '../../assets/images/logo/logo.png';

export default function Header() {
  return (
    <div className="AppHeader">
      <img className="AppHeaderLogo" src={websiteLogo} alt="Logo du site" />
      <div className="AppHeaderTitleContainer">
        <h1 className="AppHeaderTitle">Bienvenue sur mon Portfolio</h1>
        <button className="AppHeaderProjectButton" type="button">Mes réalisations</button>
        <button className="AppHeaderContactButton" type="button">Me contacter</button>
      </div>
    </div>
  );
}
