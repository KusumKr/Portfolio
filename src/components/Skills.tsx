'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap,
  SiGit, SiGithub, SiDocker, SiVercel, SiNetlify,
  SiFigma, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend Development',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
      { name: 'HTML5', icon: SiHtml5, level: 95 },
      { name: 'CSS3', icon: SiCss3, level: 90 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      { name: 'Bootstrap', icon: SiBootstrap, level: 85 }
    ]
  },
  {
    title: 'Backend Development',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'Express.js', icon: SiExpress, level: 80 },
      { name: 'Python', icon: SiPostgresql, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
   
      
    ]
  },
  {
    title: 'Tools & Technologies',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'GitHub', icon: SiGithub, level: 90 },
      { name: 'Docker', icon: SiDocker, level: 70 },
    //   { name: 'AWS', icon: SiAws, level: 65 },
      { name: 'Vercel', icon: SiVercel, level: 85 },
      { name: 'Netlify', icon: SiNetlify, level: 80 }
    ]
  },
  {
    title: 'Design & UI/UX',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Figma', icon: SiFigma, level: 85 },
      { name: 'Adobe XD', icon: SiAdobexd, level: 80 },
      // { name: 'Photoshop', icon: SiAdobephotoshop, level: 75 },
      // { name: 'Illustrator', icon: SiAdobeillustrator, level: 70 }
    ]
  }
]

export default function Skills() {
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-800 dark:text-dark-100 mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto mb-8">
              A comprehensive overview of the technologies and tools I use to bring ideas to life.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-dark-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5 
                      }}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                            className="p-2 rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 group-hover:shadow-glow-purple transition-all duration-300"
                          >
                            <skill.icon className="text-primary-600 dark:text-primary-400" size={20} />
                          </motion.div>
                          <span className="font-medium text-dark-700 dark:text-dark-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          variants={progressVariants}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          custom={skill.level}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold text-dark-800 dark:text-dark-100 mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Python', 'Numpy', 'Pandas', 'Flask', 'NLP', 'REST APIs', 'GraphQL', 'Vite', 'Sass', 'Styled Components'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full text-sm font-medium text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700 hover:shadow-glow-purple transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl" />
    </section>
  )
}