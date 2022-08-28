import React from 'react';
import TechnologiesIcons from '../technologies-icons/TechnologiesIcons';
import './Technologies.scss';

export default function Technologies() {
  return (
    <section className="AppTechnologies">
      <h2 className="AppTechnologiesTitle">Technologies & Outils</h2>
      <div className="AppTechnologiesContainer">
        <h4 className="AppTechnologiesSubTitle">Front-end</h4>
        <TechnologiesIcons type="frontend" />
      </div>
      <div className="AppTechnologiesContainer">
        <h4 className="AppTechnologiesSubTitle">Back-end</h4>
        <TechnologiesIcons type="backend" />
      </div>
      <div className="AppTechnologiesContainer">
        <h4 className="AppTechnologiesSubTitle">Outils</h4>
        <TechnologiesIcons type="tools" />
      </div>
    </section>
  );
}
