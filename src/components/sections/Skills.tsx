'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { skills } from '@/data/portfolio';
import { Code2, Database, Wrench, Users } from 'lucide-react';

const categoryIcons = {
  frontend: Code2,
  backend: Code2,
  database: Database,
  tools: Wrench,
  other: Users
};

const categoryNames = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Base de Datos',
  tools: 'Herramientas',
  other: 'Habilidades Profesionales'
};

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: 'easeOut' as const,
        delay: 0.3
      }
    })
  };

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg"
            >
              <Code2 className="w-8 h-8" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Habilidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Técnicas</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones eficientes
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {categories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              const Icon = categoryIcons[category as keyof typeof categoryIcons];

              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {categoryNames[category as keyof typeof categoryNames]}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <motion.div
                            variants={skillBarVariants}
                            custom={skill.level}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { label: 'Tecnologías', value: skills.length, icon: '🚀' },
              { label: 'Proyectos', value: '3+', icon: '💼' },
              { label: 'Experiencia', value: '2+ años', icon: '⏱️' },
              { label: 'Hackathons', value: '2', icon: '🏆' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
