/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import './Technologies.scss';
import { TechLightIcons } from '../../data/Technologies';

export default function Technologies() {
  const [isHover, setIsHover] = useState(false);

  const mouseOver = () => {
    setIsHover(true);
  };

  const mouseOut = () => {
    setIsHover(false);
  };

  return (
    <div className="AppTechnologies">
      <h2 className="AppTechnologiesTitle">Techologies</h2>
      <div className="AppTechnologiesContainer">
        {
            TechLightIcons.map((Icon) => (
              <div key={Icon.number} className="AppTechnologiesIcons">
                <img className="" onMouseOver={mouseOver} onMouseOut={mouseOut} src={(isHover) ? Icon.sourceLight : Icon.sourceDark} alt={Icon.alt} />
                <p>{Icon.description}</p>
              </div>
            ))
        }
      </div>
    </div>
  );
}
