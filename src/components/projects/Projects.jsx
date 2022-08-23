import React from 'react';
import './Projects.scss';
import { Portfolio } from '../../data/Portfolio';

export default function Projects() {
  return (
    <section id="app_projects" className="AppProjects">
      <h2 className="AppProjectsTitle">Mes réalisations</h2>
      <div className="AppProjectsCarousel" style={{ zIndex: '0' }}>
        {
            Portfolio.map((website) => (
              <div className="WebsiteCarousel">
                <img className="WebsiteCarouselPicture" src={website.src} alt={`Représantation du site ${website.title}`} />
                <div className="WebsiteCarouselDetails">
                  <h3 className="WebsiteCarouselTitle">{website.title}</h3>
                  <p className="WebsiteCarouselDescription">{website.derscription}</p>
                  <h4 className="WebsiteCarouselTechTitle">Technologies</h4>
                  <div className="WebsiteCarouselTecnologies">
                    {
                    website.languages.map((language) => (
                      <img className="WebsiteCarouselTechPicture" src={language} alt="langage utilisé" />
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
