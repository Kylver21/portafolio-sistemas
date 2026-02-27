'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { personalInfo, education, experiences } from '@/data/portfolio';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Download,
  User,
  BookOpen,
  Trophy,
  ChevronRight
} from 'lucide-react';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: 'easeOut' as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg"
            >
              <User className="w-8 h-8" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mí</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Conoce mi historia, formación y experiencia profesional
            </p>
          </motion.div>

          {/* Personal Info */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                variants={cardVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {personalInfo.title}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {personalInfo.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    {personalInfo.contact.location}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} className="flex gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="flex items-center gap-2"
                  onClick={() => window.open(personalInfo.resume, '_blank')}
                >
                  <Download className="w-4 h-4" />
                  Descargar CV
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contactar
                </Button>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  width={500}
                  height={400}
                  className="w-full h-96 object-cover object-[center_20%] transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating decorations */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20 blur-xl"
              />
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '1s' }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full opacity-20 blur-xl"
              />
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Educación
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mi formación académica
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <motion.div
                variants={timelineVariants}
                className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-green-500 to-teal-600 origin-top"
              />
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={cardVariants}
                    custom={index}
                    className="relative pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full border-4 border-white dark:border-gray-800" />
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          {edu.gpa && (
                            <div className="flex items-center text-green-600 dark:text-green-400">
                              <Trophy className="w-4 h-4 mr-1" />
                              {edu.gpa}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Experiencia
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mi trayectoria profesional
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <motion.div
                variants={timelineVariants}
                className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-orange-500 to-red-600 origin-top"
              />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={cardVariants}
                    custom={index}
                    className="relative pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full border-4 border-white dark:border-gray-800" />
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {exp.position}
                          </h4>
                          <p className="text-orange-600 dark:text-orange-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para trabajar juntos?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
              ¡Hablemos sobre cómo puedo ayudarte!
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar Ahora
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};