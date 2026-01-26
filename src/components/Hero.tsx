'use client'

import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/KusumKr', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/kusumkr', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:kusumkr2004@gmail.com', label: 'Email' },
]

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-conic from-primary-500/20 via-secondary-500/20 to-primary-500/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 px-4 py-2 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for work
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Kusum Kharayat</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-dark-600 dark:text-dark-300 mb-4"
          >
            Full Stack Developer &{' '}
            <span className="text-secondary-600 dark:text-secondary-400">AI/ML Enthusiast</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I craft digital experiences that blend innovative design with robust functionality. 
            Passionate about turning ideas into impactful web solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="/Kusum-Kharayat-Resume.pdf"
              download="Kusum-Kharayat-Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FiDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-glow text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-dark-500 dark:text-dark-400">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 rounded-full border border-primary-300 dark:border-primary-700"
            >
              <HiArrowDown className="text-primary-500" size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-400/30 rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-secondary-400/30 rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -80, 0],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary-300/40 rounded-full"
        />
      </div>
    </section>
  )
}