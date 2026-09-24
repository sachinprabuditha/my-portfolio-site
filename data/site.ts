// All copy for the site lives here so the section components stay presentational.

export const contact = {
  email: "sachinprabuditha@gmail.com",
  phoneDisplay: "+94 77 354 6331",
  whatsapp: `https://wa.me/94773546331?text=${encodeURIComponent(
    "Hi Sachin! I'd like to discuss a software development project."
  )}`,
  linkedin: "https://www.linkedin.com/in/sachinprabuditha/",
  github: "https://github.com/sachinprabuditha",
  cv: "/Sachin_Prabuditha_CV.pdf",
};

export const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Work", id: "work" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Services", id: "services" },
  { name: "Certificates", id: "certificates" },
] as const;

export const aboutPoints = [
  "Building mobile banking applications with Flutter and Dart in the FinTech industry at PayMedia.",
  "Started as an intern at PayMedia, working on real-world mobile applications with Flutter, Firebase, API integration, Git and Android development.",
  "Progressed to Junior Software Engineer, taking greater responsibility for developing, improving and maintaining production mobile applications.",
  "Beyond mobile, I enjoy exploring backend development, cloud technologies, DevOps, CI/CD and system design.",
  "Worked with JavaScript, TypeScript, React, Node.js, MongoDB, MySQL, AWS, Docker, Kubernetes and GitHub Actions.",
  "Graduated in September 2026 with a BSc (Hons) in Information Technology, specializing in Software Engineering, from SLIIT.",
  "Through academic and personal projects, I keep experimenting with new technologies and turning ideas into working software.",
  "I enjoy solving practical problems, learning how systems work behind the scenes, and continuously improving the way I build software.",
];

export const projects = [
  {
    title: "Singhe Automotive",
    des: "Vehicle service management system on the MERN stack - real-time service scheduling, inventory, customer portal and analytics dashboard.",
    img: "/mern-vsms (3)3.png",
    category: "Full Stack",
    year: "2024",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    link: "https://github.com/sachinprabuditha/mern-vsms",
  },
  {
    title: "VisionCart",
    des: "Voice-controlled shopping app for visually impaired users, with text-to-speech and accessibility-first navigation.",
    img: "/VisionCart1.jpg",
    category: "Mobile App",
    year: "2024",
    tech: ["Flutter", "Dart", "Firebase", "Speech"],
    link: "https://github.com/sachinprabuditha/visioncart.git",
  },
  {
    title: "EcoCollect",
    des: "Smart waste management: monitors bin levels, schedules collections dynamically and classifies e-waste, plastic and organic waste.",
    img: "/EcoCollector (2).png",
    category: "Mobile App",
    year: "2024",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/sachinprabuditha/EcoCollect--smart_waste_management_system.git",
  },
  {
    title: "X-Clone",
    des: "Social media platform modelled on X (Twitter) for creating, sharing and aggregating content and ideas.",
    img: "/-Clone.png",
    category: "Full Stack",
    year: "2024",
    tech: ["Next.js", "React", "Tailwind", "Firebase"],
    link: "https://github.com/sachinprabuditha/x-next-clone.git",
  },
  {
    title: "PetPal",
    des: "Pet care companion: registration, vaccination tracking, vet appointments, adoption and a community for owners.",
    img: "/PetPal.jpg",
    category: "Mobile App",
    year: "2024",
    tech: ["Flutter", "Dart", "Firebase", "Figma"],
    link: "https://github.com/sachinprabuditha/petpal.git",
  },
  {
    title: "Flying Blaster",
    des: "Arcade-style Android game built individually in Kotlin for the Mobile Application Development module.",
    img: "/ToDo (2).png",
    category: "Game",
    year: "2024",
    tech: ["Kotlin", "Android Studio", "SQLite"],
    link: "https://github.com/sachinprabuditha/Flying-Blaster-Android-Kotlin-Game",
  },
  {
    title: "MovieApp",
    des: "Android app for browsing movie information, reviews and ratings via a public API.",
    img: "/ToDo (3).png",
    category: "Mobile App",
    year: "2024",
    tech: ["Kotlin", "Android Studio", "REST API"],
    link: "https://github.com/sachinprabuditha/MovieApp-Android-Mobile-Application-",
  },
  {
    title: "ToDo",
    des: "Task management Android app with local persistence, built individually in Kotlin.",
    img: "/ToDo (1).png",
    category: "Mobile App",
    year: "2023",
    tech: ["Kotlin", "SQLite", "XML"],
    link: "https://github.com/sachinprabuditha/Todo-Application-Android-Kotlin",
  },
  {
    title: "CareQueue",
    des: "E-channeling system for booking doctor appointments, built with Java and SQL for the OOP module.",
    img: "/CareQueue Logo.png",
    category: "Full Stack",
    year: "2023",
    tech: ["Java", "MySQL", "Bootstrap"],
    link: "https://github.com/sachinprabuditha/E-Channeling-main",
  },
  {
    title: "LandValt",
    des: "Online land sales platform for listing, browsing and enquiring about properties.",
    img: "/Screenshot 2023-05-19 004618.png",
    category: "Full Stack",
    year: "2023",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    link: "https://github.com/sachinprabuditha/online-land-sales-system-main",
  },
];

export const experience = [
  {
    title: "Junior Software Engineer",
    company: "PayMedia Pvt Ltd",
    period: "Sep 2025 - Present",
    type: "Full-time",
    description:
      "Building and maintaining mobile and web applications that power digital payments for banks and financial institutions.",
    skills: ["Flutter", "Dart", "API Integration", "Firebase", "Agile"],
  },
  {
    title: "Software Engineer Intern - Mobile",
    company: "PayMedia Pvt Ltd",
    period: "Mar 2025 - Sep 2025",
    type: "Internship",
    description:
      "Developed and shipped a Flutter banking app for a major client and helped optimise its performance, leading to a full-time offer.",
    skills: ["Flutter", "Dart", "API Integration", "Git"],
  },
];

export const services = [
  {
    title: "Mobile Apps",
    body: "Cross-platform Flutter apps, from banking products at PayMedia to accessibility-first tools like VisionCart.",
  },
  {
    title: "Full-stack Web",
    body: "MERN and Next.js platforms with clean APIs, authentication, dashboards and real-time data.",
  },
  {
    title: "UI / UX Design",
    body: "Figma-first design that turns rough ideas into polished, accessible interfaces ready for handoff.",
  },
  {
    title: "Native Android",
    body: "Kotlin apps built in Android Studio with local persistence, smooth navigation and solid architecture.",
  },
  {
    title: "DevOps & Cloud",
    body: "CI/CD, Linux, containers and deployments - sharpened through KodeKloud's 100 Days of DevOps.",
  },
  {
    title: "AI / ML",
    body: "Applied machine learning, certified through SLIIT's AI/ML Engineer programme, Stages 1 and 2.",
  },
];

export const certificates = [
  {
    title: "100 Days of DevOps",
    issuer: "KodeKloud",
    date: "Mar 2026",
    image: "/5f490d5c-4e03-4423-92d0-f6c67b04d0e0.jpg",
  },
  {
    title: "AI/ML Engineer - Stage 2",
    issuer: "SLIIT",
    date: "Dec 2024",
    image: "/1733158116047.jpeg",
  },
  {
    title: "AI/ML Engineer - Stage 1",
    issuer: "SLIIT",
    date: "Jul 2024",
    image: "/1721240316004.jpeg",
  },
];

export const education = [
  {
    degree: "BSc (Hons) in Information Technology, specializing in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology - Malabe",
    period: "Oct 2022 - Sep 2026",
    logo: "/Sliit.png",
    details: [
      "Graduated in September 2026 with a BSc (Hons) in IT, specializing in Software Engineering.",
      "Active in university clubs and delivered team projects across web, mobile and desktop.",
    ],
  },
  {
    degree: "Primary Education to Advanced Level",
    institution: "H/ Vijayaba National School - Hungama",
    period: "2006 - 2019",
    logo: "/download.png",
    details: [
      "Achieved high grades at the Ordinary Level examinations in the English medium.",
      "Advanced Level in Combined Maths, Physics and ICT.",
    ],
  },
];

// Badges that loop down the fixed white strip on the right edge (desktop only).
export const stripBadges = [
  { label: "Flutter Developer", icon: "flutter" },
  { label: "Full-stack Engineer", icon: "next" },
  { label: "DevOps Certified", icon: "docker" },
  { label: "AI/ML Engineer", icon: "ai" },
] as const;
