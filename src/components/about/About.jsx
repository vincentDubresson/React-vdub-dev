import React from 'react';
import './About.scss';
import freelancerGif from '../../assets/images/background/freelancer.gif';

export default function About() {
  return (
    <section className="AppAbout">
      <div className="AppAboutContent">
        <div className="AppAboutTextContainer">
          <h2 className="AppAboutTitle">Qui suis-je ?</h2>
          <p className="AppAboutText">
            Fort d&#39;une expérience de 12 ans dans le secteur du transport
            sanitaire, et de 4 ans en tant que technico-commercial dans
            la mécanique de précision, j&#39;ai su acquérir des compétences
            et des connaissances primordiales à l&#39;accomplissement de mon
            projet de reconversion.
          </p>
          <p className="AppAboutText">
            Je réalise aujourd&#39;hui mon rêve de pouvoir me former aux métiers
            du numérique. Après 5 mois de formation intensive en cursus
            <b> PHP/Symfony </b>
            à la
            <b> Wild Code School </b>
            de Lyon, je commence en Septembre
            2022 une année supplémentaire en alternance en cursus
            <b> React/React Native/Typescript </b>
            au sein de la même école.
          </p>
        </div>
        <img
          className="AppAboutGif"
          src={freelancerGif}
          alt="Illustration animée représantant un développeur travaillant
          confortablement dans un fauteuil"
        />
      </div>
    </section>
  );
}
