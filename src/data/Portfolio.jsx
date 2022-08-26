import wilderHelpers from '../assets/images/websites/wilders-helpers.png';
import greenFroggy from '../assets/images/websites/green-froggy.png';
import usedge from '../assets/images/websites/usedge.png';
import bdCult from '../assets/images/websites/bd-cult.png';
import weLoveLyon from '../assets/images/websites/we-love-lyon.png';
import portfolio from '../assets/images/websites/portfolio.png';

import html from '../assets/images/logo/language/html.png';
import css from '../assets/images/logo/language/css.png';
import bootstrap from '../assets/images/logo/language/bootstrap.png';
import sass from '../assets/images/logo/language/sass.png';
import javascript from '../assets/images/logo/language/javascript.png';
import php from '../assets/images/logo/language/php.png';
import symfony from '../assets/images/logo/language/symfony.png';
import react from '../assets/images/logo/language/react.png';

export const Portfolio = [
  {
    number: 1,
    title: 'Mon Portfolio',
    derscription: 'Portfolio réalisé grâce à ReactJS. Premier projet pour lequel j\'ai utilisé cette librairie.',
    link: 'http://portfolio.vdub-dev.fr/',
    src: portfolio,
    languages: [
      javascript,
      react,
      sass
    ],
    filter: ['javascript', 'react']
  },
  {
    number: 2,
    title: 'Wilders Helpers',
    derscription: 'Projet personnel de fin de formation de Développement Web. Site privé de petites annonces entre Wilders. Hommage à la session PHP de la Wild Code School de Lyon.',
    link: 'http://wilders-helpers.vdub-dev.fr/',
    src: wilderHelpers,
    languages: [
      php,
      symfony,
      javascript,
      sass
    ],
    filter: ['php', 'symfony', 'javascript']
  },
  {
    number: 3,
    title: 'Green Froggy',
    derscription: 'Vainqueur du 1er Hackathon de la session Dev 2022. Application de météo du futur, afin de sensibiliser le monde entier sur les enjeux du réchauffement climatique. (Groupe de 5)',
    link: 'http://green-froggy.vdub-dev.fr/',
    src: greenFroggy,
    languages: [
      php,
      javascript,
      css
    ],
    filter: ['php', 'javascript']
  },
  {
    number: 4,
    title: 'Usedge Research Center',
    derscription: 'WCS Projet 3 - Nous avons développé un centre de recherche. Il s\'agit d\'un ensemble de fonctionnalités, dont les outils vont permettre aux UX designers de bénéficier d\'ateliers personnalisés, afin de mener à bien leurs recherches en UX/UI. (Groupe de 5)',
    link: 'https://github.com/WildCodeSchool/2022-03-php-Lyon-P3-Usedge',
    src: usedge,
    languages: [
      php,
      symfony,
      javascript,
      sass
    ],
    filter: ['php', 'symfony', 'javasript']
  },
  {
    number: 5,
    title: 'Bd-Cult\'',
    derscription: 'WCS Projet 2 - Ne cherchez plus votre prochaine BD... Trouvez-la grâce à notre moteur de recherche spécialisé dans le 9ème Art ! Par Auteur, Genre, Titre ou même description, votre recherche n\'aura jamais été aussi simple ! Bonne lecture ! (Groupe de 4)',
    link: 'http://bd-cult.vdub-dev.fr/',
    src: bdCult,
    languages: [
      php,
      javascript,
      bootstrap
    ],
    filter: ['php', 'javascript']
  },
  {
    number: 6,
    title: 'We love Lyon',
    derscription: 'WCS Projet 1 - Site touristique sur la ville de Lyon, créé pour le projet n°1 de la formation de Développeur Web. (Groupe de 4)',
    link: 'http://we-love-lyon.vdub-dev.fr/',
    src: weLoveLyon,
    languages: [
      html,
      php,
      javascript,
      css
    ],
    filter: ['php', 'javascript']
  }
];

export default { Portfolio };
