import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaStar, FaCode, FaMobile, FaServer, FaLaptopCode, FaEye, FaHeart, FaTimes, FaClock, FaGlobe } from 'react-icons/fa';

// Placeholder images with better quality
const elderHomeImg = 'https://www.elderlaw.us/wp-content/uploads/2021/04/5-3-21-or-SPARE_nursing-home.jpg';
const eventImg = 'https://colorlib.com/wp/wp-content/uploads/sites/2/1_event-planner-websites.jpg.avif';
const bloodDonorImg = 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*pcm1M4to4C4jRfl0L_gJcw.jpeg';
const portfolioVanillaImg = 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center';
const portfolioReactImg = 'https://i.ytimg.com/vi/RroDdybvu5s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJ9Z8bCU10U3JtCLkhXNErdirz6A';
const canakHelpDeskImg = 'https://media.istockphoto.com/id/1139791082/photo/smiling-asian-hr-insurer-advisor-meeting-applicant-at-job-interview.jpg?s=612x612&w=0&k=20&c=YNRGZQeq3n04ayU2RPv7Yy8JWxi5dPP4VtBvFGgi0G8=';
const financialTrackerImg = 'https://cdn.dribbble.com/userupload/9015886/file/original-9ec557fd124408998aa7a1b13e4f7bdc.jpg?resize=1504x1102&vertical=center';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  category: string;
  technologies: string[];
  featured: boolean;
  stats: { stars: number; forks: number; views: number };
  difficulty: string;
  duration: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
}

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode, count: 7 },
    { id: 'full-stack', name: 'Full Stack', icon: FaServer, count: 3 },
    { id: 'web-mini', name: 'Web Apps', icon: FaLaptopCode, count: 2 },
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile, count: 1 },
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: ' Evercare Elder Home Care  System',
      description: 'A comprehensive MERN stack application for managing elder home events and user activities. Features include secure user authentication, event creation and booking, attendee management, and real-time updates for administrators and residents',
      image: elderHomeImg,
      github: '',
      category: 'full-stack',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'JWT', 'Socket.io'],
      featured: true,
      stats: { stars: 145, forks: 38, views: 1200 },
      difficulty: 'Advanced',
      duration: '3 months',
      longDescription: 'A full-featured MERN stack application designed to streamline event and user management within an elder home environment. The system includes secure user authentication using JWT, role-based access for administrators and residents, and features for event creation, booking, and attendee management. Administrators can efficiently manage events and monitor participation, while residents benefit from a simple and intuitive interface. The application leverages MongoDB for reliable data storage, Express.js and Node.js for scalable backend services, and React.js for a responsive and user-friendly frontend.',
      features: [
        'User authentication and authorization with JWT',
        'Role-based access control for administrators and residents',
        'Event creation, booking, and management',
        'Attendee tracking and participation monitoring',
        'Admin dashboard for event and user management',
        'Resident-friendly interface for easy navigation',
        'Real-time updates and notifications',
        'Mobile-responsive design for accessibility across devices'
      ],
      challenges: [
        'Implementing secure authentication and role-based access',
        'Managing real-time event updates for multiple users',
        'Designing a simple yet effective interface for elderly users',
        'Ensuring scalability and reliability of the backend services'
],
      learnings: [
        'Practical experience with JWT authentication and authorization',
        'Building RESTful APIs with Node.js and Express.js',
        'Frontend state management and component design in React',
        'Database modeling and optimization with MongoDB'
]
    },
    {
      id: '2',
      title: 'Crystal Planners Online Event Planning System',
      description: 'An online platform built with HTML, CSS, JavaScript, and Java (Apache Tomcat) for seamless event creation, booking, and management. Designed with a responsive, user-friendly interface to simplify event organization and improve the overall planning experience.',
      image: eventImg,
      github: '',
      category: 'full-stack',
      technologies: ['Java', 'MySQL', 'XAMPP', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      featured: true,
      stats: { stars: 98, forks: 25, views: 850 },
      difficulty: 'Advanced',
      duration: '2.5 months',
      longDescription: 'Crystal Planning is a web-based event management platform developed using HTML, CSS, JavaScript, and Java with Apache Tomcat. The system allows users to create, book, and manage events efficiently through an intuitive and responsive interface. It was designed to streamline the event planning process, ensuring a smooth experience for both organizers and attendees. By combining strong backend functionality with a clean, user-friendly frontend, the system highlights my ability to build full-stack solutions that focus on usability and performance.',
      features: [
        'Event creation, booking, and management system',
        'Responsive and user-friendly interface for all devices',
        'Real-time booking status updates',
        'Search and filter functionality for events',
        'Secure login and session management',
        'Admin panel for managing events and attendees',
        'Scalable design for future feature expansion'
      ],
      challenges: [
        'Handling real-time booking conflicts and availability updates',
        'Designing an intuitive interface for both organizers and attendees',
        'Integrating CRUD operations seamlessly with the backend',
        'Ensuring data consistency and validation across the system',
        'Optimizing performance for multiple concurrent users'
      ],
      learnings: [
        'Full-stack development using Java, Tomcat, and front-end technologies',
        'Best practices for designing responsive and user-friendly web systems',
        'Implementing secure authentication and session handling',
        'Database integration and optimization for booking systems',
        'Problem-solving in managing real-time event operations'
      ]
    },
    {
      id: '3',
      title: 'Blood Donor Companion App',
      description: 'A mobile app designed for active blood donors to track their donation history, built according to Polish blood donation rules.',
      image: bloodDonorImg,
      github: 'https://github.com/AlthafMarikkar/Blood-Donor-Companion-App-',
      category: 'mobile-app',
      technologies: ['Kotlin', 'MVVM', 'Room', 'Compose', 'Coroutines', 'LiveData', 'ViewModel', 'Material Design'],
      featured: true,
      stats: { stars: 87, forks: 15, views: 620 },
      difficulty: 'Intermediate',
      duration: '2 months',
      longDescription: 'The Blood Donor Companion App helps users track and manage their blood donations efficiently. It provides personalized scheduling, donation type tracking, and user-friendly summaries to make donation management seamless.',
      features: [
        'Add and remove donation records',
        'Welcome screen for new users',
        'Support for whole blood, platelets, and plasma donations',
        'Automatic scheduling for next donation based on type',
        'Profile summary and donation history',
        'Modern Material Design UI built with Compose',
        'Local data storage using Room database'
      ],
      challenges: [
        'Designing the donation scheduling logic for different donation types',
        'Ensuring data consistency using MVVM architecture',
        'Implementing reactive UI updates with LiveData',
        'Optimizing app performance for offline usage'
      ],
      learnings: [
        'Hands-on experience with Kotlin and Jetpack Compose',
        'Understanding MVVM architecture and Android lifecycles',
        'Implementing Room for efficient local database management',
        'Using Coroutines for asynchronous background operations'
      ]
    },
    {
      id: '4',
      title: 'Portfolio Website (HTML/CSS/JS)',
      description: 'A responsive portfolio website built with vanilla web technologies. Features smooth animations, interactive elements, and modern design principles.',
      image: portfolioVanillaImg,
      github: 'https://github.com/Ihsas01/Portfolio',
      category: 'web-mini',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      featured: false,
      stats: { stars: 35, forks: 8, views: 300 },
      difficulty: 'Intermediate',
      duration: '1 month',
      longDescription: 'A modern portfolio website showcasing personal projects and skills. Built with vanilla web technologies for optimal performance.',
      features: [
        'Responsive design for all devices',
        'Smooth scroll animations',
        'Interactive project showcase',
        'Contact form with validation',
        'Dark/light theme toggle',
        'Performance optimized',
        'SEO friendly structure'
      ],
      challenges: [
        'Creating smooth animations without libraries',
        'Ensuring cross-browser compatibility',
        'Optimizing for mobile performance',
        'Implementing accessible design patterns'
      ],
      learnings: [
        'Advanced CSS animations and transitions',
        'JavaScript performance optimization',
        'Web accessibility guidelines',
        'Cross-browser compatibility techniques'
      ]
    },
    {
      id: '5',
      title: 'Portfolio Website (React)',
      description: 'A modern portfolio website built with React. Features component-based architecture, smooth transitions, and responsive design.',
      image: portfolioReactImg,
      github: 'https://github.com/yourusername/portfolio-react',
      category: 'web-mini',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      featured: false,
      stats: { stars: 42, forks: 10, views: 400 },
      difficulty: 'Intermediate',
      duration: '1.5 months',
      longDescription: 'A modern, interactive portfolio built with React and modern web technologies. Features smooth animations and excellent user experience.',
      features: [
        'Component-based architecture',
        'Smooth page transitions',
        'Interactive animations',
        'Responsive design',
        'Performance optimized',
        'Modern UI/UX design',
        'Easy content management'
      ],
      challenges: [
        'Managing complex state across components',
        'Optimizing bundle size',
        'Implementing smooth animations',
        'Ensuring good performance on mobile'
      ],
      learnings: [
        'React hooks and state management',
        'Performance optimization techniques',
        'Modern animation libraries',
        'Component design patterns'
      ]
    },
    {
      id: '6',
      title: 'CANAK University Help Desk',
      description: 'An Online Help Desk System developed as a 1st Year 2nd Semester IWT group project (5 members). It provides students with an online platform to manage profiles, register, and access library-related support.',
      image: canakHelpDeskImg,
      github: 'https://github.com/AlthafMarikkar/CANAK-University-Online-Student-Help-Desk-',
      category: 'full-stack',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      featured: false,
      stats: { stars: 45, forks: 12, views: 530 },
      difficulty: 'Intermediate',
      duration: '2 months',
      longDescription: 'The CANAK University Help Desk is a web-based system designed to assist students in managing their university-related tasks and library interactions. The project was part of the 1st Year 2nd Semester IWT coursework and was developed by a team of five members. The Help Desk module focuses on student account management and support functionalities.',
      features: [
        'Secure student login and authentication system',
        'Student registration for new users',
        'Profile management for updating personal details',
        'CRUD operations for student data (Create, Read, Update, Delete)',
        'Online help desk support integrated with the library system',
        'Responsive design for improved accessibility'
      ],
      challenges: [
        'Designing a user-friendly interface for students',
        'Ensuring secure authentication and data validation',
        'Implementing complete CRUD functionalities in PHP',
        'Managing team collaboration and integration between modules'
      ],
      learnings: [
        'Working collaboratively in a team project environment',
        'Backend integration using PHP and MySQL',
        'Implementing secure authentication and validation techniques',
        'Developing modular and maintainable code for multi-feature systems'
      ]
    },
    {
      id: '7',
      title: 'Finance Tracker App',
      description: 'A comprehensive financial management Android application that helps users track expenses, manage budgets, and visualize spending patterns. Features include expense categorization, budget planning, and financial reports.',
      image: financialTrackerImg,
      github: '',
      category: 'mobile',
      technologies: ['kotlin', 'xml', 'android sdk', 'room database','MPAndroidchart'],
      featured: false,
      stats: { stars: 45, forks: 12, views: 500 },
      difficulty: 'Advanced',
      duration: '2 months',
      longDescription: 'A comprehensive Android application for personal finance management with advanced features for expense tracking and budget planning.',
      features: [
        'Expense tracking and categorization',
        'Budget planning and monitoring',
        'Financial reports and analytics',
        'Data visualization with charts',
        'Export functionality',
        'Backup and sync',
        'Reminder notifications'
      ],
      challenges: [
        'Designing an intuitive mobile interface',
        'Implementing complex data visualization',
        'Ensuring data security and privacy',
        'Optimizing app performance'
      ],
      learnings: [
        'Android app development',
        'Mobile UI/UX design',
        'Data visualization techniques',
        'Mobile app optimization'
      ]
    },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="projects" className="section-spacing relative">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading gradient-text">Featured Projects</h2>
            <p className="subheading max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              web applications, and mobile development.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md w-full">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tertiary" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-12 w-full"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-secondary text-primary shadow-glow'
                        : 'bg-white/5 text-tertiary hover:text-secondary hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <category.icon size={14} />
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">
                      {category.count}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card animate-pulse">
                    <div className="skeleton h-48 rounded-lg mb-4" />
                    <div className="skeleton h-6 rounded mb-2" />
                    <div className="skeleton h-4 rounded mb-2" />
                    <div className="skeleton h-4 rounded w-3/4" />
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    layout
                    className="group relative"
                  >
                    <div className="card card-hover h-full flex flex-col overflow-hidden">
                      {/* Project Image */}
                      <div className="relative overflow-hidden rounded-t-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Overlay Actions */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex space-x-3 sm:space-x-4">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => openProjectModal(project)}
                              className="bg-secondary text-primary p-2 sm:p-3 rounded-full hover:shadow-glow transition-all duration-300"
                              aria-label="View details"
                            >
                              <FaEye size={16} />
                            </motion.button>
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                              aria-label="Live demo"
                            >
                              <FaExternalLinkAlt size={16} />
                            </motion.a>
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all duration-300"
                              aria-label="View code"
                            >
                              <FaGithub size={16} />
                            </motion.a>
                          </div>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                            <span className="badge badge-primary text-xs">
                              <FaHeart size={10} className="mr-1" />
                              Featured
                            </span>
                          </div>
                        )}

                        {/* Stats */}
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2">
                          <span className="badge bg-black/50 text-white text-xs">
                            <FaStar size={8} className="mr-1" />
                            {project.stats.stars}
                          </span>
                          <span className="badge bg-black/50 text-white text-xs">
                            <FaEye size={8} className="mr-1" />
                            {project.stats.views}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-4 sm:p-6 flex-1 flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-light group-hover:text-secondary transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-tertiary text-sm leading-relaxed mb-4 flex-1">
                          {project.description}
                        </p>

                        {/* Project Meta */}
                        <div className="flex items-center justify-between mb-4 text-xs text-tertiary">
                          <span className="badge badge-secondary">
                            {project.difficulty}
                          </span>
                          <span>{project.duration}</span>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs bg-white/5 text-tertiary px-2 py-1 rounded border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="text-xs text-tertiary px-2 py-1">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 mt-auto">
                          <motion.button
                            onClick={() => openProjectModal(project)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary flex-1 text-center"
                          >
                            View Details
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {!isLoading && filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl font-bold text-light mb-2">No projects found</h3>
              <p className="text-tertiary">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={closeProjectModal}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-primary-light/95 backdrop-blur-md border border-white/10 rounded-2xl z-50 m-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-primary-light/95 backdrop-blur-md border-b border-white/10 p-6 rounded-t-2xl">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-light mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-tertiary">
                      <span className="badge badge-secondary">{selectedProject.difficulty}</span>
                      <span className="flex items-center">
                        <FaClock className="mr-1" />
                        {selectedProject.duration}
                      </span>
                      <span className="flex items-center">
                        <FaStar className="mr-1" />
                        {selectedProject.stats.stars} stars
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeProjectModal}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 ml-4"
                    aria-label="Close modal"
                  >
                    <FaTimes className="text-light text-xl" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Image */}
                <div className="relative rounded-xl overflow-hidden mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-light mb-3">About This Project</h3>
                  <p className="text-tertiary leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-light mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-tertiary">
                          <span className="text-secondary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-light mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Learnings */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {selectedProject.challenges && (
                    <div>
                      <h3 className="text-xl font-bold text-light mb-3">Challenges Faced</h3>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start space-x-2 text-tertiary">
                            <span className="text-accent mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.learnings && (
                    <div>
                      <h3 className="text-xl font-bold text-light mb-3">Key Learnings</h3>
                      <ul className="space-y-2">
                        {selectedProject.learnings.map((learning, index) => (
                          <li key={index} className="flex items-start space-x-2 text-tertiary">
                            <span className="text-success mt-1">•</span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex-1 text-center"
                  >
                    <FaGlobe className="mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex-1 text-center"
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects; 