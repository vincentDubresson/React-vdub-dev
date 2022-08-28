import React from 'react';
import PropTypes from 'prop-types';
import './TechnologiesIcons.scss';
import { TechLightIcons } from '../../data/Technologies';

export default function TechnologiesIcons(props) {
  // eslint-disable-next-line react/prop-types
  const { type } = props;

  return (
    <div className="AppTechnologiesIconsContainer">
      {
        TechLightIcons
          .filter((Icon) => (Icon.type === type))
          .map((Icon) => (
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
  );
}

TechLightIcons.propTypes = {
  type: PropTypes.string.isRequired
};
