/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Projects.scss';
import { Portfolio } from '../../data/Portfolio';
import { filterTechIcons } from '../../data/Technologies';

export default function Projects(props) {
  const { projectsRef } = props;

  const [filter, setFilter] = useState('all');

  return (
    <section id="app_projects" className="AppProjects" ref={projectsRef}>
      <h2 className="AppProjectsTitle">Mes réalisations</h2>
      <div className="AppProjectsFilter">
        {filterTechIcons.map((icon) => (
          <img
            key={icon.number}
            className="AppProjectsFilterIcon"
            src={icon.sourceDark}
            alt={icon.alt}
            onClick={() => { setFilter(icon.filter); }}
          />
        ))}
      </div>
      <div className="AppProjectsCarousel" style={{ zIndex: '0' }}>
        {
            Portfolio
              .filter((website) => website.filter.includes(filter))
              .map((website) => (
                <div key={website.title} className="WebsiteCarousel">
                  <img className="WebsiteCarouselPicture" src={website.src} alt={`Représantation du site ${website.title}`} />
                  <div className="WebsiteCarouselDetails">
                    <h3 className="WebsiteCarouselTitle">{website.title}</h3>
                    <p className="WebsiteCarouselDescription">{website.derscription}</p>
                    <h4 className="WebsiteCarouselTechTitle">Technologies</h4>
                    <div className="WebsiteCarouselTecnologies">
                      {
                      website.languages.map((language) => (
                        <img key={language} className="WebsiteCarouselTechPicture" src={language} alt="langage utilisé" />
                      ))
                      }
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(website.link, '_blank');
                      }}
                      className="WebsiteCarouselButton"
                    >
                      Accéder au site
                    </button>
                  </div>
                </div>
              ))
        }
      </div>
    </section>
  );
}

Projects.propTypes = {
  projectsRef: PropTypes.object.isRequired
};
