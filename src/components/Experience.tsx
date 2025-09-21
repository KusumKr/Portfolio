'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiUsers } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'FullStack Developer',
    company: 'Nebula Accelerator',
    location: 'New Delhi, India (Hybrid)',
    duration: 'May 2025 - July 2025',
    description: 'Build scalable and responsive web applications using modern frameworks & Contributing to dynamic startup projects working across the MERN Stack..',
    technologies: ['React.js', 'Node.js', 'TypeScript', 'MongoDB, Express.js'],
    icon: FiBriefcase
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer Intern',
    company: 'Knax Technolgies',
    location: 'Gujarat, India (Remote)',
    duration: 'Jan 2025- April 2025',
    description: 'Collaborated remotely with a cross-functional team to design, develop and maintain responsive and user-friendly web applications.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    icon: FiBriefcase
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Technology',
    company: 'Electronics & Communication Engineering',
    location: 'Maharshi Dayanand University',
    duration: '2022 - 2026',
    description: 'Gaining hands-on experience in both hardware and software, integrating programming, circuit design, and system-level understanding for real-world problem solving.',
    technologies: ['Data Structures', 'Digital Circuits', 'Database Systems', 'Communication Engineering'],
    icon: HiAcademicCap
  }
]

const achievements = [
  {
    id: 1,
    title: 'Community Advocate-> devXsphere',
    description: 'Actively engaging with the tech community by promoting open-source contributions, organizing events, and supporting developers through mentorship and resources.',
    date: 'May 2024 -Present',
    type: 'community',
    icon: FiAward
  },
  {
    id: 2,
    title: 'Digital Head -> E-CELL MERI',
    description: 'Spearheaded the digital strategy and online presence of the Entrepreneurship Cell, effectively managing social media platforms, creating engaging content, and enhancing outreach.',
    date: 'Oct 2024 - May 2025',
    type: 'college club',
    icon: FiAward
  },
  {
    id: 3,
    title: 'Team Leader -> Coding Club, MERI',
    description: 'Responsible for guiding members through coding challenges, organizing peer learning sessions, and leading team participation in hackathons and coding competitions.',
    date: 'Aug 2024 - May 2025',
    type: 'college club',
    icon: FiUsers
  },
  {
    id: 4,
    title: 'Campus Ambassador -> E-CELL IIT Bombay',
    description: 'Led outreach efforts, encouraged student participation, and helped cultivate an entrepreneurial mindset on campus. Achieved 50th rank among 2500+ CAs.',
    date: 'Jul 2024 - Nov 2024',
    type: 'participation',
    icon: FiAward
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30 dark:from-primary-900/10 dark:via-transparent dark:to-secondary-900/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-800 dark:text-dark-100 mb-4">
              Experience & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto mb-8">
              My journey in the tech industry, from internships to participation in clubs and communities.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-dark-800 dark:text-dark-100 mb-8 flex items-center gap-3">
                <FiBriefcase className="text-primary-600 dark:text-primary-400" />
                Work Experience & Education
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700">
                  <motion.div
                    variants={timelineVariants}
                    className="w-full bg-gradient-primary"
                  />
                </div>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Timeline Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                          exp.type === 'work'
                            ? 'bg-gradient-to-br from-primary-500 to-primary-600'
                            : 'bg-gradient-to-br from-secondary-500 to-secondary-600'
                        }`}
                      >
                        <exp.icon className="text-white" size={20} />
                      </motion.div>

                      {/* Experience Card */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="flex-1 bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20 dark:border-dark-700/50"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-semibold text-dark-800 dark:text-dark-100">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 mt-1 sm:mt-0">
                            <FiCalendar size={14} />
                            {exp.duration}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-3">
                          <span className="font-medium text-dark-700 dark:text-dark-200">
                            {exp.company}
                          </span>
                          <div className="flex items-center gap-1 text-sm text-dark-500 dark:text-dark-400">
                            <FiMapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                        
                        <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-dark-800 dark:text-dark-100 mb-8 flex items-center gap-3">
                <FiAward className="text-secondary-600 dark:text-secondary-400" />
                Achievements & Certifications
              </h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20 dark:border-dark-700/50"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                          achievement.type === 'hackathon'
                            ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                            : achievement.type === 'certification'
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                            : 'bg-gradient-to-br from-green-500 to-emerald-600'
                        }`}
                      >
                        <achievement.icon className="text-white" size={20} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-dark-800 dark:text-dark-100">
                            {achievement.title}
                          </h4>
                          <span className="text-sm text-secondary-600 dark:text-secondary-400 mt-1 sm:mt-0">
                            {achievement.date}
                          </span>
                        </div>
                        
                        <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                          {achievement.description}
                        </p>
                        
                        <div className="mt-3">
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                            achievement.type === 'hackathon'
                              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                              : achievement.type === 'certification'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                              : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                          }`}>
                            {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl" />
    </section>
  )
}