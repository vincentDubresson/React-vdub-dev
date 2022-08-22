import homeIcon from '../assets/images/icons/navbar/dark/home-icon.png';
import projectIcon from '../assets/images/icons/navbar/dark/project-icon.png';
import contactIcon from '../assets/images/icons/navbar/dark/contact-icon.png';
import downloadIcon from '../assets/images/icons/navbar/dark/download-icon.png';

export const NavbarIcons = [
  {
    number: 1,
    source: homeIcon,
    alt: 'Icône de retour à l\'accueil du site',
    description: 'Accueil'
  },
  {
    number: 2,
    source: projectIcon,
    alt: 'Icône pour aller à la partie projet',
    description: 'Mes réalisations'
  },
  {
    number: 3,
    source: contactIcon,
    alt: 'Icône pour aller à la partie contact',
    description: 'Contact'
  },
  {
    number: 4,
    source: downloadIcon,
    alt: 'Icône pour télécharger directement mon curriculum vitae',
    description: 'Télécharger mon CV'
  }
];

export default { NavbarIcons };
