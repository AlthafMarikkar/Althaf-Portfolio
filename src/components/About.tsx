import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaCode, FaHeart, FaRocket, FaUsers, FaLightbulb, FaTrophy, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', name: 'About Me', icon: FaHeart },
    { id: 'education', name: 'Education', icon: FaGraduationCap },
    { id: 'values', name: 'Values', icon: FaLightbulb },
  ];

  const education = [
    {
      year: '2023 - 2025',
      degree: 'Higher National Diploma',
      institution: 'SLIIT (Sri Lanka Insitute of Information Technology)',
      location: 'Malabe, Sri Lanka',
      description: 'Completed Higher National Diploma in Information Technology',
      achievements: ['Student council member'],
      
    },
    {
      year: '2025 - 2027',
      degree: 'Reading for a Degree in Information Technology',
      institution: 'SLIIT (Sri Lanka Insitute of Information Technology)',
      location: 'Malabe, Sri Lanka',
      description: 'Currently pursuing a Degree in Information Technology',
      achievements: ['Pending'],

    },
    {
      year: '2021(2022)',
      institution: 'S.Thomas College',
      location: 'Bandarawela, Sri Lanka',
      description: 'Advance Level in Technology Stream',
      achievements: ['Pending'],

    }

    
  ];

  const values = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, readable, and efficient code that others can easily understand and build upon.',
      color: 'text-secondary'
    },
    {
      icon: FaUsers,
      title: 'User-First',
      description: 'Always prioritizing user experience and accessibility in every project I work on.',
      color: 'text-accent'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Constantly learning new technologies and finding creative solutions to complex problems.',
      color: 'text-success'
    },
    {
      icon: FaTrophy,
      title: 'Excellence',
      description: 'Striving for excellence in every project, from small features to large applications.',
      color: 'text-warning'
    }
  ];

  return (
    <section id="about" className="section-spacing relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading gradient-text">About Me</h2>
          <p className="subheading max-w-3xl mx-auto">
            I am a passionate full-stack developer dedicated to crafting impactful and user-friendly digital solutions.
            My journey in tech has been fueled by curiosity, creativity, and a constant drive to turn ideas into meaningful experiences that make a difference.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-secondary text-primary shadow-glow'
                    : 'bg-white/5 text-tertiary hover:text-secondary hover:bg-white/10 border border-white/10'
                }`}
              >
                <tab.icon size={14} />
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[400px]"
          >
            {activeTab === 'about' && (
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative order-2 lg:order-1"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="relative bg-gradient-to-br from-primary-light to-primary rounded-2xl p-6 sm:p-8 glass">
                      <div className="text-center space-y-4 sm:space-y-6">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-4xl sm:text-6xl"
                        >
                          👨‍💻
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold text-light">Althaf Marikkar</h3>
                        <p className="text-tertiary text-sm sm:text-base">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-light mb-3 sm:mb-4">Passionate Developer</h3>
                    <p className="text-tertiary leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      I'm a proud Thomian from S. Thomas’ College, Bandarawela — where my journey of curiosity, discipline, 
                      and teamwork first began. Those values have shaped me into the developer I am today.
                    </p>
                    <p className="text-tertiary leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Currently, I’m a 3rd-year undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), 
                      specializing in Information Technology. I’m passionate about creating exceptional digital experiences 
                      and developing modern, scalable applications that solve real-world problems.
                    </p>
                    <p className="text-tertiary leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      My journey in technology started with curiosity and has evolved into a deep love for clean code, 
                      user-centered design, and innovative solutions. I believe in writing code that not only works but 
                      is also maintainable, readable, and efficient.
                    </p>
                  </div>



                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="card text-center p-3 sm:p-4">
                      <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">7+</div>
                      <div className="text-xs sm:text-sm text-tertiary">Projects Completed</div>
                    </div>
                    <div className="card text-center p-3 sm:p-4 col-span-2 sm:col-span-1">
                      <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">20+</div>
                      <div className="text-xs sm:text-sm text-tertiary">Technologies</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-4 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="badge badge-primary text-xs">{edu.year}</span>
                          <span className="text-tertiary text-xs flex items-center">
                            <FaMapMarkerAlt className="mr-1" />
                            {edu.location}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-light mb-1">{edu.degree}</h3>
                        <p className="text-secondary font-medium text-sm sm:text-base">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <p className="text-tertiary text-sm sm:text-base leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-medium text-light mb-2">Achievements</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-tertiary">
                            <FaStar className="text-secondary mt-1 flex-shrink-0" size={10} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-4 sm:p-6 text-center group hover:border-secondary/30 transition-all duration-300"
                  >
                    <motion.div
                      className={`text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${value.color}`}
                      whileHover={{ rotate: 5 }}
                    >
                      <value.icon />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-light mb-2 group-hover:text-secondary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-tertiary text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About; 