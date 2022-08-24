import React from 'react';
import './Footer.scss';
import githubIcon from '../../assets/images/icons/footer/github-logo-24.png';
import linkedinIcon from '../../assets/images/icons/footer/linkedin-square-logo-24.png';

export default function Footer() {
  return (
    <div className="AppFooter">
      <div className="FooterFirstTextContainer">
        <img src={githubIcon} alt="Github" />
        <a className="FooterFirstLink" href="https://github.com/vincentDubresson" target="_blank" rel="noreferrer">@vincentDubresson</a>
        <p className="FooterFirstText">-</p>
        <img src={linkedinIcon} alt="Github" />
        <a className="FooterFirstLink" href="https://www.linkedin.com/in/vincent-dubresson/" target="_blank" rel="noreferrer">vincent-dubresson</a>
      </div>
      <p className="FooterSecondText">
        © 2022 - vDub(&#39;dev&#39;) -
        {' '}
        <a className="FooterSecondLink" href="https://storyset.com/" target="_blank" rel="noreferrer">Illustrations by Storyset</a>
      </p>
    </div>
  );
}
