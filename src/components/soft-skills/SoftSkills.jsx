/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import fixedGif from '../../assets/images/icons/softskills/pedagogy-icon.png';
import realGif from '../../assets/images/icons/softskills/pedagogy-icon.gif';

export default function SoftSkills() {
  const [displayGif, setDisplayGif] = useState(fixedGif);

  const gif = () => {
    setDisplayGif(realGif);
    setTimeout(() => {
      setDisplayGif(fixedGif);
    }, '2000');
  };

  return (
    <img
      onMouseOver={gif}
      /* onMouseOut={() => { setDisplayGif(fixedGif); }} */
      src={displayGif}
      alt="Croquis d'un bureau de développeur web"
    />
  );
}
