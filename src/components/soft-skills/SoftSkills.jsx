/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import fixedGif from '../../assets/images/icons/softskills/organisation-icon.png';
import realGif from '../../assets/images/icons/softskills/organisation-icon.gif';

export default function SoftSkills() {
  const [displayGif, setDisplayGif] = useState(fixedGif);

  const gif = () => {
    setDisplayGif(realGif);
    setTimeout(() => {
      setDisplayGif(fixedGif);
    }, '2500');
  };

  return (
    <img
      style={{ width: '8rem' }}
      onMouseOver={gif}
      src={displayGif}
      alt=""
    />
  );
}
