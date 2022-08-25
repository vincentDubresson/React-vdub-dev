/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import './SoftSkills.scss';
import { softskillsIcons } from '../../data/Softskills';

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
                src={Icon.sourceGif}
                alt={Icon.alt}
              />
              <p className="AppSoftskillsIconText">{Icon.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}
