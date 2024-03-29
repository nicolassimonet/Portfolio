//  icons
import {
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';

// projects images
import Project1 from './assets/img/projects/p1.png';
import Project2 from './assets/img/projects/p2.jpg';
import Project3 from './assets/img/projects/p3.png';
import Project4 from './assets/img/projects/p4.jpg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/typescript.png';
import SkillImg6 from './assets/img/skills/firebase.png';
import SkillImg7 from './assets/img/skills/nextjs.png';
import SkillImg8 from './assets/img/skills/git.png';
// navigation
export const navigation = [
  {
    name: 'accueil',
    href: 'home',
  },
  {
    name: 'à propos',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/nicolassimonet',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: 'https://www.malt.fr/profile/nicolassimonet',
  },
  {
    img: UpworkBrandIcon,
    href: 'https://www.upwork.com/freelancers/~016e0099bceb3dd736',
  },
  {
    img: FiverBrandIcon,
    href: 'https://fr.fiverr.com/nicolas_s13/develop-react-front-end-web-app-100-seo',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    link: 'https://nicolas-simonet.web.app/',
    name: 'Portfolio',
    category: 'Développement Front-End',
    description: 'Portfolio personnel, vous êtes actuellement dessus.',
    tech: 'React, TailwindCSS, CSS, JavaScript',
  },
  {
    id: '2',
    image: Project2,
    link: 'https://mimi-evenementiel.web.app/',
    name: 'Mimi-Événementiel',
    category: 'Développement Front-End',
    description: "Landing page pour présentation d'événement.",
    tech: 'React, Firebase, EmailJS, JavaScript, CSS',
  },
  {
    id: '3',
    image: Project3,
    link: 'https://selec-freetoplay.web.app/',
    name: 'Selec - FreeToPlay',
    category: 'Développement Front-End',
    description: 'Site internet répertoriant une panoplie de jeux gratuits.',
    tech: 'React, TypeScript, CSS, JavaScript'
  },
  {
    id: '4',
    image: Project4,
    link: 'https://landing-page-datawarehouse.web.app/',
    name: 'DataWarehouse',
    category: 'Développement Front-End',
    description: 'Fausse Landing page basé sur les Entrepôt de données.',
    tech: 'React, , CSS, JavaScript, Tailwind'
  },
];

// projects
export const projectsNav = [
  {
    name: '',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },

];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Cadrer votre projet',
    description:
      'Identification des besoins de vos clients/utilisateurs pour définir les contours de votre projet.',
  },
  {
    icon: <FiSettings />,
    name: 'Développer',
    description:
      'Développement de votre site web avec une méthodologie claire: Développer / tester / Valider / livrer.',
  },
  {
    icon: <FiPenTool />,
    name: 'SEO (Référencement)',
    description: "Engagement à obtenir un score de 100% sur le Référencement de Google (Lighthouse).",
  },
  {
    icon: <FiTag />,
    name: 'Méthode Agile',
    description:
      "Livraison de versions fonctionnelles à court terme plutôt que sur la planification de tout le projet en détail dès le début, afin de garantir un développement rapide et de qualité.",
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Vous avez une question ?',
    subtitle: 'Je suis là pour vous aider.',
    description: 'Remplissez le formulaire ou envoyez-moi un courriel à :',
    emaildescription: 'nicolas-simonet@live.fr / Téléphone : 07.67.49.99.84',
  },
  {
    icon: <FiMapPin />,
    title: 'Localisation actuelle',
    subtitle: 'Miramas, France',
    description: 'Au service de clients du monde entier.',
  },
];
