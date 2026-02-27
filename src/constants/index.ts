export const SITE_CONFIG = {
  name: "Portafolio - Ingeniería de Sistemas",
  description: "Portafolio profesional de estudiante de Ingeniería de Sistemas",
  url: "https://portafolio-sistemas-one.vercel.app/",
  ogImage: "/og-image.jpg",
  themeColor: "#000000",
};

export const NAVIGATION_ITEMS = [
  {
    name: "Inicio",
    href: "#home",
    id: "home"
  },
  {
    name: "Sobre Mí",
    href: "#about",
    id: "about"
  },
  {
    name: "Habilidades",
    href: "#skills",
    id: "skills"
  },
  {
    name: "Proyectos",
    href: "#projects",
    id: "projects"
  },
  {
    name: "Contacto",
    href: "#contact",
    id: "contact"
  }
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

export const SKILL_CATEGORIES = {
  frontend: "Frontend",
  backend: "Backend", 
  database: "Base de Datos",
  tools: "Herramientas",
  other: "Otros"
};

export const SOCIAL_LINKS = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  twitter: "https://twitter.com/",
  email: "mailto:"
};