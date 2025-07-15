'use client';

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown, Code, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { useScrollTo } from '@/hooks/useScrollTo';
import { personalInfo } from '@/data/portfolio';
import Image from 'next/image';

export const Hero = () => {
  const { scrollToSection } = useScrollTo();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut' as const
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: 'easeOut' as const
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.6,
        ease: 'easeOut' as const
      }
    })
  };

  const floatingIcons = [
    { Icon: Code, delay: 0 },
    { Icon: Database, delay: 0.5 },
    { Icon: Globe, delay: 1 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay,
          }}
        >
          <Icon className="h-8 w-8 text-blue-400 opacity-30" />
        </motion.div>
      ))}

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={0}
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                👋 ¡Hola! Soy
              </span>
            </motion.div>
            
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>
            
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={2}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6"
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.p
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={3}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={4}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Ver Proyectos
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Contactar
              </Button>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: personalInfo.contact.social.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.contact.social.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.contact.email}`, label: 'Email' }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  animate="visible"
                  variants={iconVariants}
                  custom={index}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(href, '_blank')}
                    className="w-12 h-12 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:border-gray-600 dark:hover:border-blue-400 dark:hover:bg-blue-900"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                custom={3}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(personalInfo.resume, '_blank')}
                  className="px-4 h-12 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:border-gray-600 dark:hover:border-blue-400 dark:hover:bg-blue-900"
                >
                  <Download className="h-4 w-4 mr-2" />
                  CV
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Image/Avatar */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-xl opacity-30" />
                
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/yo.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
                  />
                </div>
                
                {/* Animated Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-20 animate-pulse" />
                <div className="absolute -inset-4 rounded-full border-2 border-purple-400 opacity-10 animate-ping" />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Scroll para explorar</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600"
          >
            <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};