/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import fixedGif from '../../assets/images/icons/light/gif.png';
import realGif from '../../assets/images/icons/light/gif.gif';

export default function SoftSkills() {
  const [displayGif, setDisplayGif] = useState();

  return (
    <img
      onMouseOver={() => { setDisplayGif(realGif); }}
      onMouseOut={() => { setDisplayGif(fixedGif); }}
      src={displayGif}
      alt="Croquis d'un bureau de développeur web"
    />
  );
}
