/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { softskillsIcons } from '../../data/Softskills';
import './SoftSkills.scss';

export default function SoftSkills() {
  return (
    <section className="AppSoftskills">
      <h2 className="AppSoftskillsTitle">Soft-skills</h2>
      <div className="AppSoftskillsContainer">
        {
          softskillsIcons.map((Icon) => (
            <div key={Icon.number} className="AppSoftskillsIcons">
              <img
                className="AppSoftskillsIcon"
                onMouseOver={(e) => {
                  const newGif = e.currentTarget;
                  const newIcon = e.currentTarget;
                  newGif.src = Icon.sourceGif;
                  setTimeout(() => {
                    newIcon.src = Icon.sourceIcon;
                  }, '2500');
                }}
                src={Icon.sourceIcon}
                alt={Icon.alt}
              />
              <p>{Icon.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}
