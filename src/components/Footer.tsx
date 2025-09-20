'use client'

import { motion } from 'framer-motion'
import { FiHeart, FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/KusumKr', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/kusumkr', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:kusum.developer@gmail.com', label: 'Email' },
]

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-dark-900 text-dark-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-secondary-900/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 mb-4"
              >
                <span className="text-3xl font-bold text-gradient">Kusum</span>
                <span className="text-2xl font-light text-dark-300">Kharayat</span>
              </motion.div>
              
              <p className="text-dark-300 leading-relaxed mb-6 max-w-md">
                Full Stack Developer & UI/UX Designer passionate about creating 
                innovative digital experiences. Let's build something amazing together.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-dark-800 hover:bg-gradient-primary rounded-lg transition-all duration-300 hover:shadow-glow group"
                    aria-label={label}
                  >
                    <Icon className="text-dark-300 group-hover:text-white transition-colors" size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    whileHover={{ x: 5 }}
                    className="block text-dark-300 hover:text-primary-400 transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-3">
                <motion.a
                  href="mailto:kusumkr2004@gmail.com"
                  whileHover={{ x: 5 }}
                  className="block text-dark-300 hover:text-primary-400 transition-all duration-300"
                >
                  kusumkr2004@gmail.com
                </motion.a>
                {/* <motion.a
                  href="tel:+919876543210"
                  whileHover={{ x: 5 }}
                  className="block text-dark-300 hover:text-primary-400 transition-all duration-300"
                >
                  +91 98765 43210
                </motion.a> */}
                <motion.span
                  whileHover={{ x: 5 }}
                  className="block text-dark-300 transition-all duration-300"
                >
                  New Delhi, India
                </motion.span>
              </div>

              {/* Resume Download
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-gradient-secondary text-white text-sm font-medium rounded-lg hover:shadow-glow-purple transition-all duration-300"
              >
                Download Resume
              </motion.a> */}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-dark-400 text-sm flex items-center gap-1"
            >
              Made with <FiHeart className="text-red-500" /> by Kusum  © {new Date().getFullYear()}
            </motion.p>

            <div className="flex items-center gap-6">
              <motion.a
                href="/privacy"
                whileHover={{ y: -2 }}
                className="text-dark-400 hover:text-primary-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms"
                whileHover={{ y: -2 }}
                className="text-dark-400 hover:text-primary-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-gradient-primary text-white rounded-full shadow-lg hover:shadow-glow transition-all duration-300 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </motion.button>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400/20 rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary-400/20 rounded-full"
        />
      </div>
    </footer>
  )
}