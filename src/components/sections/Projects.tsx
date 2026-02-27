'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/portfolio';
import { Github, ExternalLink, Folder, Star } from 'lucide-react';
import Image from 'next/image';

export const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg"
            >
              <Folder className="w-8 h-8" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Proyectos</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Proyectos en los que he trabajado y participado
            </p>

            {/* Filter Buttons */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                onClick={() => setFilter('all')}
                variant={filter === 'all' ? 'primary' : 'outline'}
                className="transition-all duration-300"
              >
                Todos
              </Button>
              <Button
                onClick={() => setFilter('featured')}
                variant={filter === 'featured' ? 'primary' : 'outline'}
                className="transition-all duration-300"
              >
                <Star className="w-4 h-4 mr-2" />
                Destacados
              </Button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -10 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center space-x-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Destacado</span>
                      </div>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder className="w-20 h-20 text-white/30" />
                    </div>
                    {project.image && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5" />
                          <span className="text-sm font-medium">Código</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span className="text-sm font-medium">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <Github className="w-12 h-12 mx-auto mb-4 text-gray-900 dark:text-white" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                ¿Quieres ver más?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Visita mi perfil de GitHub para explorar todos mis proyectos y contribuciones
              </p>
              <Button
                onClick={() => window.open('https://github.com/Kylver21', '_blank')}
                variant="primary"
                className="mx-auto"
              >
                <Github className="w-5 h-5 mr-2" />
                Ver en GitHub
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
