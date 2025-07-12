import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code, Calendar, Users, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  category: string;
  year: string;
  status: string;
  team: string;
  duration: string;
  techStack: string[];
  features: string[];
  metrics: {
    users: string;
    performance: string;
    rating: string;
  };
  link: string;
  color: string;
}

// Complete projects data with all your projects
const projects = [
  {
    id: 1,
    title: "Singhe Automotive Pvt LTD",
    des: "Developed on the MERN stack technology(React, Node.js, Express, MongoDB). This is a Vehicle Service Management System built to SLIIT 2nd Year 2nd Semester IT Project.",
    img: "./mern-vsms (3)3.png",
    category: "Full Stack",
    year: "2024",
    status: "Completed",
    team: "8 developers",
    duration: "4 months",
    techStack: ["Vite React", "Node.js", "MongoDB", "Express", "Firebase", "Tailwind CSS", "Figma", "Insomnia", "Git", "GitHub"],
    features: [
      "Real-time service scheduling",
      "Inventory management system",
      "Customer portal & notifications",
      "Analytics dashboard"
    ],
    metrics: {
      users: "500+",
      performance: "99.9%",
      rating: "4.8/5"
    },
    link: "https://github.com/sachinprabuditha/mern-vsms",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "VisionCart",
    des: "Developed a voice-controlled shopping app for visually impaired users, text-to-speech. My role included user registration, profile management, and user management.",
    img: "./VisionCart1.jpg",
    category: "Mobile App",
    year: "2024",
    status: "Completed",
    team: "4 developers",
    duration: "2 months",
    techStack: ["Flutter", "Dart", "Firebase", "Speech Recognition", "Firebase"],
    features: [
      "Voice-controlled navigation",
      "Text-to-speech integration",
      "Accessibility-first design",
      "Real-time product search"
    ],
    metrics: {
      users: "200+",
      performance: "98%",
      rating: "4.9/5"
    },
    link: "https://github.com/sachinprabuditha/visioncart.git",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "EcoCollect",
    des: "Developed an intelligent system to streamline waste collection in urban environments. The solution monitors waste bin levels, manages collection schedules dynamically, and classifies waste into categories such as e-waste, plastic, and organic.",
    img: "./EcoCollector (2).png",
    category: "Mobile App",
    year: "2024",
    status: "Completed",
    team: "4 developers",
    duration: "1 months",
    techStack: ["Flutter", "Firebase", "Dart", "Github", "Git"],
    features: [
      "Real-time bin monitoring",
      "Route optimization AI",
      "Waste classification",
      "Environmental impact tracking"
    ],
    metrics: {
      users: "50+",
      performance: "95%",
      rating: "4.7/5"
    },
    link: "https://github.com/sachinprabuditha/EcoCollect--smart_waste_management_system.git",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "X-Clone",
    des: "X-Clone is an Social Media Application designed from clonning X(Twitter). X-Clone aims to facilitate the creation, sharing and aggregation of content, ideas, interests.",
    img: "./-Clone.png",
    category: "Full Stack",
    year: "2024",
    status: "Completed",
    team: "Individual",
    duration: "2 weeks",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase", "Git", "GitHub"],
    features: [
      "Real-time messaging",
      "Content recommendation",
      "Advanced analytics",
      "Multi-media support"
    ],
    metrics: {
      users: "100+",
      performance: "97%",
      rating: "4.6/5"
    },
    link: "https://github.com/sachinprabuditha/x-next-clone.git",
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 5,
    title: "PetPal",
    des: "Pet Pal is a mobile app designed to help pet owners manage their pets' health and well-being. It offers features like pet registration, vaccination tracking, doctor appointment booking, pet adoption, and a community platform for pet owners to connect and share advice.",
    img: "./PetPal.jpg",
    category: "Mobile App",
    year: "2024",
    status: "Completed",
    team: "4 developers",
    duration: "1 month",
    techStack: ["Flutter", "Dart", "Firebase", "Figma", "Git", "Github"],
    features: [
      "Pet health tracking",
      "Vaccination reminders",
      "Appointment booking",
      "Community platform"
    ],
    metrics: {
      users: "300+",
      performance: "98.5%",
      rating: "4.8/5"
    },
    link: "https://github.com/sachinprabuditha/petpal.git",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 6,
    title: "ToDo",
    des: "ToDo is task management Android mobile application developed individually by using Kotlin and Android Studio as part of the 2nd Year 2nd Semester MAD module.",
    img: "./ToDo (1).png",
    category: "Mobile App",
    year: "2023",
    status: "Completed",
    team: "Individual",
    duration: "1 week",
    techStack: ["Kotlin", "Android Studio", "SQLite", "XML", "Git", "Github"],
    features: [
      "Task management",
      "Priority settings",
      "Offline functionality",
      "Clean UI design"
    ],
    metrics: {
      users: "150+",
      performance: "99%",
      rating: "4.5/5"
    },
    link: "https://github.com/sachinprabuditha/Todo-Application-Android-Kotlin",
    color: "from-teal-500 to-cyan-500"
  },
  {
    id: 7,
    title: "CareQueue",
    des: "CareQueue is an innovative e-channeling system designed using Java and SQL. This is a Project of the 2nd Year 1st Semester Object-Oriented Programming (OOP) module.",
    img: "./CareQueue Logo.png",
    category: "Full Stack",
    year: "2023",
    status: "Completed",
    team: "4 developers",
    duration: "1 month",
    techStack: ["Java", "MySQL", "Bootstrap", "CSS", "Javascript"],
    features: [
      "Doctor appointment booking",
      "Queue management",
      "Patient records",
      "Payment integration"
    ],
    metrics: {
      users: "80+",
      performance: "96%",
      rating: "4.4/5"
    },
    link: "https://github.com/sachinprabuditha/E-Channeling-main",
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 8,
    title: "LandValt",
    des: "LandValt is a comprehensive online land sales platform developed by using HTML, PHP, CSS and SQL as part of the 1st Year 2nd semester IWT module.",
    img: "./Screenshot 2023-05-19 004618.png",
    category: "Full Stack",
    year: "2023",
    status: "Completed",
    team: "5 developers",
    duration: "1 month",
    techStack: ["PHP", "HTML", "Javascript", "CSS", "MySQL", "XAMPP", "Figma"],
    features: [
      "Property listings",
      "Advanced search filters",
      "User authentication",
      "Admin dashboard"
    ],
    metrics: {
      users: "120+",
      performance: "94%",
      rating: "4.3/5"
    },
    link: "https://github.com/sachinprabuditha/online-land-sales-system-main",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 9,
    title: "Flying Blaster",
    des: "Flying Blaster is an Android mobile game developed individually by using Kotlin and Android Studio as part of the 2nd Year 2nd Semester MAD module.",
    img: "./ToDo (2).png",
    category: "Game",
    year: "2024",
    status: "Completed",
    team: "Individual",
    duration: "1 week",
    techStack: ["Kotlin", "Android Studio", "SQLite", "XML", "Git", "Github"],
    features: [
      "Arcade-style gameplay",
      "Score tracking",
      "Power-ups system",
      "Sound effects"
    ],
    metrics: {
      users: "250+",
      performance: "98%",
      rating: "4.7/5"
    },
    link: "https://github.com/sachinprabuditha/Flying-Blaster-Android-Kotlin-Game",
    color: "from-red-500 to-pink-500"
  },
  {
    id: 10,
    title: "MovieApp",
    des: "MovieApp is an Android mobile Application designed to provide information about movies to enhance the experience and information, reviews, and ratings.",
    img: "./ToDo (3).png",
    category: "Mobile App",
    year: "2024",
    status: "Completed",
    team: "Individual",
    duration: "1 Week",
    techStack: ["Kotlin", "Android Studio", "XML", "API Integration"],
    features: [
      "Movie database",
      "Reviews and ratings",
      "Search functionality",
      "Watchlist feature"
    ],
    metrics: {
      users: "180+",
      performance: "97%",
      rating: "4.5/5"
    },
    link: "https://github.com/sachinprabuditha/MovieApp-Android-Mobile-Application-",
    color: "from-purple-600 to-indigo-600"
  }
];

const categories = ["Full Stack", "Mobile App", "Game"];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all duration-500">
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Project image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          />
          
          {/* Overlay with quick actions */}
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          >
            <div className="flex gap-4">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'Production' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : project.status === 'Beta'
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <span className="text-sm text-cyan-400 font-medium">{project.category}</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">{project.year}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            {project.des}
          </p>

          {/* Key features */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-white mb-2">Key Features</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {project.features.slice(0, 4).map((feature, i) => (
                <div key={i} className="flex items-center text-slate-400">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {/* <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-slate-800/50 rounded-lg">
            <div className="text-center">
              <div className="text-sm font-bold text-white">{project.metrics.users}</div>
              <div className="text-xs text-slate-400">Users</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-white">{project.metrics.performance}</div>
              <div className="text-xs text-slate-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-white">{project.metrics.rating}</div>
              <div className="text-xs text-slate-400">Rating</div>
            </div>
          </div> */}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-slate-800 text-slate-300 rounded-md text-xs hover:bg-slate-700 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded-md text-xs">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          {/* Project details */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {project.team}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.duration}
              </div>
            </div>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              View Project
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ModernProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Full Stack");
  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter(project => project.category === "Full Stack")
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilteredProjects(projects.filter(project => project.category === category));
  };

  return (
    <section className="" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-slate-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showcasing innovative solutions built with modern technologies and best practices
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjectsSection;