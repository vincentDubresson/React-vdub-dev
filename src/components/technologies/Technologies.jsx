import React from 'react';
import './Technologies.scss';
import { TechLightIcons } from '../../data/Technologies';

export default function Technologies() {
  return (
    <section className="AppTechnologies">
      <h2 className="AppTechnologiesTitle">Technologies</h2>
      <div className="AppTechnologiesContainer">
        {
            TechLightIcons.map((Icon) => (
              <div key={Icon.number} className="AppTechnologiesIcons">
                <img
                  className="AppTechnologiesIcon"
                  onMouseEnter={(e) => { e.currentTarget.src = Icon.sourceLight; }}
                  onMouseLeave={(e) => { e.currentTarget.src = Icon.sourceDark; }}
                  src={Icon.sourceDark}
                  alt={Icon.alt}
                />
                <p className="AppTechnologiesText">{Icon.description}</p>
              </div>
            ))
        }
      </div>
    </section>
  );
}
