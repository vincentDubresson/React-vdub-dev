/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { softskillsIcons } from '../../data/Softskills';
import './SoftSkills.scss';

export default function SoftSkills() {
  const [displayGif, setDisplayGif] = useState(fixedGif);

  const gif = () => {
    setDisplayGif(realGif);
    setTimeout(() => {
      setDisplayGif(fixedGif);
    }, '2500');
  };

  return (
    <section className="AppSoftskills">
      <h2 className="AppSoftskillsTitle">Soft-skills</h2>
      <img
        style={{ width: '8rem' }}
        onMouseOver={gif}
        src={displayGif}
        alt=""
      />
    </section>

  );
}
