import { PersonalInfo, Project, Skill, Experience, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Osver Kylver Paucar Clavijo",
  title: "Desarrollador Backend Java",
  description: "Estudiante de Ingeniería de Sistemas e Informática con enfoque en desarrollo de aplicaciones web full stack. Experiencia en proyectos académicos utilizando Java, Spring Boot y frameworks frontend como React y Angular. Con conocimientos en diseño de APIs REST, bases de datos relacionales y trabajo bajo metodologías ágiles. Interesado en seguir desarrollando soluciones tecnológicas escalables y orientadas a buenas prácticas de software.",
  image: "/osver-profesional.jpeg",
  resume: "/CV-OsverPaucar-Profesional.pdf",
  contact: {
    email: "kilverpaucar1@gmail.com",
    phone: "+51 960 857 646",
    location: "Coishco, Perú",
    social: {
      github: "https://github.com/Kylver21",
      linkedin: "https://linkedin.com/in/osver-paucar",
      twitter: "https://x.com/OsverPaucar"
    }
  }
};

export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", level: 85, category: "frontend", icon: "🟨" },
  { name: "TypeScript", level: 80, category: "frontend", icon: "🔷" },
  { name: "React", level: 85, category: "frontend", icon: "⚛️" },
  { name: "Angular", level: 80, category: "frontend", icon: "🅰️" },
  { name: "HTML/CSS", level: 90, category: "frontend", icon: "🎨" },
  
  // Backend
  { name: "Java", level: 90, category: "backend", icon: "☕" },
  { name: "Spring Boot", level: 85, category: "backend", icon: "🍃" },
  { name: "API REST", level: 90, category: "backend", icon: "🔌" },
  { name: "JWT", level: 85, category: "backend", icon: "🔐" },
  
  // Database
  { name: "MySQL", level: 85, category: "database", icon: "🐬" },
  { name: "SQL Server", level: 80, category: "database", icon: "💾" },
  
  // Tools
  { name: "Git", level: 90, category: "tools", icon: "📝" },
  { name: "GitHub", level: 90, category: "tools", icon: "🐙" },
  { name: "Figma", level: 75, category: "tools", icon: "🎨" },
  { name: "Vercel", level: 80, category: "tools", icon: "▲" },
  
  // Other
  { name: "Scrum", level: 85, category: "other", icon: "🔄" },
  { name: "ITIL", level: 75, category: "other", icon: "📋" },
  { name: "Resolución de problemas", level: 90, category: "other", icon: "🧩" },
  { name: "Comunicación técnica", level: 85, category: "other", icon: "💬" },
  { name: "Inglés (Intermedio)", level: 70, category: "other", icon: "🌐" }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Documentación Legal",
    description: "Desarrollo de un sistema de documentación legal utilizando arquitectura MVC. Implementé módulos de autenticación, gestión de usuarios y conexión a base de datos. Desarrollé operaciones CRUD aplicando el patrón DAO para la persistencia de datos. Utilicé Java, Swing y MySQL para la construcción de interfaces y lógica de negocio.",
    technologies: ["Java", "MySQL", "MVC", "Swing", "DAO"],
    image: "/projects/project1.jpg",
    githubUrl: "https://github.com/Kylver21",
    featured: true
  },
  {
    id: "2",
    title: "Hackathon UTP+ by Xpedition",
    description: "Integrante del equipo 'Los Migajeros' en el desarrollo de una solución tecnológica. Participación activa en la ideación, análisis y propuesta de solución. Trabajo colaborativo bajo presión y cumplimiento de tiempos establecidos.",
    technologies: ["Trabajo en equipo", "Ideación", "Análisis", "Propuesta de solución"],
    image: "/projects/project2.jpg",
    githubUrl: "https://github.com/Kylver21",
    featured: true
  },
  {
    id: "3",
    title: "Hackathon Comercio - UTP",
    description: "Desarrollo de propuesta de solución tecnológica orientada al sector comercio. Trabajo en equipo multidisciplinario y presentación de resultados.",
    technologies: ["Propuesta tecnológica", "Sector comercio", "Trabajo en equipo"],
    image: "/projects/project3.jpg",
    githubUrl: "https://github.com/Kylver21",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    position: "Desarrollador Backend Java",
    company: "Proyecto Académico - Universidad Tecnológica del Perú",
    period: "Marzo 2023 - Diciembre 2025",
    description: "Participé en el desarrollo de un sistema de documentación legal utilizando arquitectura MVC. Implementé módulos de autenticación, gestión de usuarios y conexión a base de datos. Desarrollé operaciones CRUD aplicando el patrón DAO para la persistencia de datos. Utilicé Java, Swing y MySQL para la construcción de interfaces y lógica de negocio. Realicé testing de funcionales y validación de módulos en entorno local. Colaboré con el equipo en la corrección de errores y mejoras del sistema.",
    technologies: ["Java", "MySQL", "MVC", "Swing", "DAO"]
  },
  {
    id: "2",
    position: "Participante",
    company: "Hackathon UTP+ by Xpedition",
    period: "Junio 2025 - Julio 2025",
    description: "Integrante del equipo 'Los Migajeros' en el desarrollo de una solución tecnológica. Participación activa en la ideación, análisis y propuesta de solución. Trabajo colaborativo bajo presión y cumplimiento de tiempos establecidos.",
    technologies: ["Trabajo en equipo", "Ideación", "Análisis"]
  },
  {
    id: "3",
    position: "Participante",
    company: "Hackathon Comercio - UTP",
    period: "Noviembre 2025 - Diciembre 2025",
    description: "Desarrollo de propuesta de solución tecnológica orientada al sector comercio. Trabajo en equipo multidisciplinario y presentación de resultados.",
    technologies: ["Propuesta tecnológica", "Presentación"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Ingeniería de Sistemas e Informática",
    institution: "Universidad Tecnológica del Perú (UTP)",
    period: "Marzo 2022 - Actualidad",
    description: "Formación en desarrollo de software, arquitectura de aplicaciones web y gestión de bases de datos. Participación activa en proyectos académicos orientados a la solución de problemas reales.",
    gpa: ""
  }
];