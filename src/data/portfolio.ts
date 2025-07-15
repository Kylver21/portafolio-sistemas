import { PersonalInfo, Project, Skill, Experience, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Osver Kylver",
  title: "Estudiante de Ingeniería de Sistemas",
  description: "Apasionado por la tecnología y el desarrollo de software. Especializado en desarrollo web full-stack con experiencia en React, Node.js y bases de datos. Siempre buscando nuevos desafíos y oportunidades para crecer profesionalmente.",
  image: "/Kylver.jpg",
  resume: "/cv-kylver-paucar.pdf",
  contact: {
    email: "kilverpaucar1@gmail.com",
    phone: "+ 51 960 857 646",
    location: "Coishco, Perú",
    social: {
      github: "https://github.com/Kylver21",
      linkedin: "https://www.linkedin.com/in/kylver-paucar/",
      twitter: "https://twitter.com/tuusuario"
    }
  }
};

export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", level: 85, category: "frontend", icon: "🟨" },
  { name: "TypeScript", level: 80, category: "frontend", icon: "🔷" },
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 85, category: "frontend", icon: "▲" },
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "🎨" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "💨" },
  
  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: "🟢" },
  { name: "Express", level: 75, category: "backend", icon: "🚀" },
  { name: "Python", level: 70, category: "backend", icon: "🐍" },
  { name: "Java", level: 65, category: "backend", icon: "☕" },
  { name: "PHP", level: 60, category: "backend", icon: "🐘" },
  
  // Database
  { name: "MySQL", level: 80, category: "database", icon: "🐬" },
  { name: "PostgreSQL", level: 75, category: "database", icon: "🐘" },
  { name: "MongoDB", level: 70, category: "database", icon: "🍃" },
  { name: "Redis", level: 65, category: "database", icon: "🔴" },
  
  // Tools
  { name: "Git", level: 90, category: "tools", icon: "📝" },
  { name: "Docker", level: 70, category: "tools", icon: "🐳" },
  { name: "AWS", level: 65, category: "tools", icon: "☁️" },
  { name: "Vercel", level: 85, category: "tools", icon: "▲" },
  { name: "Figma", level: 75, category: "tools", icon: "🎨" },
  
  // Other
  { name: "Metodologías Ágiles", level: 80, category: "other", icon: "🔄" },
  { name: "Testing", level: 70, category: "other", icon: "🧪" },
  { name: "API REST", level: 85, category: "other", icon: "🔌" },
  { name: "GraphQL", level: 65, category: "other", icon: "📊" }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Gestión Académica",
    description: "Aplicación web full-stack para gestión de estudiantes, profesores y cursos. Incluye sistema de autenticación, dashboard interactivo y reportes.",
    technologies: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS"],
    image: "/projects/project1.jpg",
    githubUrl: "https://github.com/tuusuario/gestion-academica",
    liveUrl: "https://gestion-academica.vercel.app",
    featured: true
  },
  {
    id: "2",
    title: "E-Commerce Responsive",
    description: "Tienda online con carrito de compras, sistema de pagos, gestión de productos y panel de administración.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    image: "/projects/project2.jpg",
    githubUrl: "https://github.com/tuusuario/ecommerce-app",
    liveUrl: "https://ecommerce-app.vercel.app",
    featured: true
  },
  {
    id: "3",
    title: "API REST Blog",
    description: "API REST completa para un blog con autenticación JWT, CRUD de posts, comentarios y sistema de likes.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Postman"],
    image: "/projects/project3.jpg",
    githubUrl: "https://github.com/tuusuario/blog-api",
    featured: false
  },
  {
    id: "4",
    title: "Dashboard Analytics",
    description: "Panel de control con gráficos interactivos, métricas en tiempo real y exportación de datos.",
    technologies: ["React", "Chart.js", "Firebase", "Material-UI"],
    image: "/projects/project4.jpg",
    githubUrl: "https://github.com/tuusuario/analytics-dashboard",
    liveUrl: "https://analytics-dashboard.vercel.app",
    featured: false
  },
  {
    id: "5",
    title: "App Móvil Tareas",
    description: "Aplicación móvil para gestión de tareas con sincronización offline, notificaciones push y colaboración en equipo.",
    technologies: ["React Native", "Expo", "SQLite", "AsyncStorage"],
    image: "/projects/project5.jpg",
    githubUrl: "https://github.com/tuusuario/tasks-mobile",
    featured: false
  },
  {
    id: "6",
    title: "Sistema de Reservas",
    description: "Plataforma web para reservas de citas con calendario interactivo, notificaciones por email y panel administrativo.",
    technologies: ["Vue.js", "Laravel", "MySQL", "EmailJS"],
    image: "/projects/project6.jpg",
    githubUrl: "https://github.com/tuusuario/sistema-reservas",
    liveUrl: "https://reservas-app.vercel.app",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    position: "Desarrollador Freelance",
    company: "Proyectos Independientes",
    period: "2022 - Presente",
    description: "Diseño y desarrollo de sitios web para emprendimientos locales. Uso de tecnologías modernas para el despliegue y mantenimiento.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "WordPress"]
  },
  {
    id: "2",
    position: "Practicante de Desarrollo Web",
    company: "Proyecto Académico UTP",
    period: "Mar 2023 - Nov 2023",
    description: "Desarrollo de un sistema de gestión documental en Java utilizando arquitectura MVC y conexión a base de datos MySQL.",
    technologies: ["Java", "MySQL", "MVC", "Swing"]
  }
];

export const education: Education[] = [
 {
    id: "1",
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Tecnológica del Perú (UTP)",
    period: "2022 - 2026",
    description: "Formación integral en desarrollo de software, bases de datos, seguridad informática y metodologías ágiles. Participación activa en proyectos académicos y extracurriculares.",
    gpa: "4.2/5.0"
  },
  
];