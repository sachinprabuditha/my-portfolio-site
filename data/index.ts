import { skillsData } from "@/lib/data";
import { Code, Users, Zap } from "lucide-react";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "./b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "./grid.svg",
      spareImg: "./b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Build a Movie app similar to IMdB using Next.js and Tailwind CSS",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "./b5.svg",
      spareImg: "./grid.svg",
    },
    {
      id: 6,
      title: "Do You want to Contact me? This is My Email Address",
      description: "",
      className: "md:col-span-2 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Singhe Automotive Pvt LTD",
      des: "Developed on the MERN stack technology(React, Node.js, Express, MongoDB). This is a Vehicle Service Management System built to SLIIT 2nd Year 2nd Semester IT Project.",
      img: "./mern-vsms (3)3.png",
      iconLists: ["./re.svg", "./tail.svg", "./javascript-svgrepo-com.svg", "./vite-svgrepo-com.svg", "./Figma.svg", "github-color-svgrepo-com.svg", "./mongo-svgrepo-com.svg", "./firebase-svgrepo-com.svg", "./Insomnia.svg", "./Git1.svg"],
      link: "https://github.com/sachinprabuditha/mern-vsms",
    },
    {
      id: 2,
      title: "ToDo",
      des: "ToDo is task management Android mobile application developed individually by using Kotlin and Android Studio as part of the 2nd Year 2nd Semester MAD module.",
      img: "./ToDo (1).png",
      iconLists: ["./xml-document-svgrepo-com.svg", "./kotlin-svgrepo-com.svg", "./sqlite-svgrepo-com.svg", "./Android Studio.svg", "./github-color-svgrepo-com.svg", "./Git1.svg"],
      link: "https://github.com/sachinprabuditha/Todo-Application-Android-Kotlin",
    },
    {
      id: 3,
      title: "CareQueue",
      des: "CareQueue is an innovative e-channeling system designed using Java and SQL. This is a Project of the 2nd Year 1st Semester Object-Oriented Programming (OOP) module.",
      img: "./CareQueue Logo.png",
      iconLists: ["./Java.svg", "./javascript-svgrepo-com.svg", "./mysql-svgrepo-com.svg", "./Bootstrap.svg", "./css-3-svgrepo-com.svg"],
      link: "https://github.com/sachinprabuditha/E-Channeling-main",
    },
    {
      id: 4,
      title: "LandValt",
      des: "LandValt is a comprehensive online land sales platform developed by using HTML, PHP, CSS and SQL as part of the 1 st Year 2nd semester IWT module.",
      img: "./Screenshot 2023-05-19 004618.png",
      iconLists: ["./PHP.svg", "./javascript-svgrepo-com.svg", "./xampp-svgrepo-com.svg", "./html-5-svgrepo-com.svg", "./sql-svgrepo-com.svg", "./css-3-svgrepo-com.svg", "./Figma.svg"],
      link: "https://github.com/sachinprabuditha/online-land-sales-system-main",
    },
    {
      id: 5,
      title: "Flying Blaster",
      des: "Flying Blaster is an Android mobile game developed individually by using Kotlin and Android Studio as part of the 2nd Year 2nd Semester MAD module.",
      img: "./ToDo (2).png",
      iconLists: ["./xml-document-svgrepo-com.svg", "./kotlin-svgrepo-com.svg", "./Android Studio.svg", "./sql-svgrepo-com.svg"],
      link: "https://github.com/sachinprabuditha/Flying-Blaster-Android-Kotlin-Game",
    },
    {
      id: 6,
      title: "MovieApp",
      des: "MovieApp is an Android mobile Application designed to provide information about movies to enhance the experience and information, reviews, and ratings.",
      img: "./ToDo (3).png",
      iconLists: ["./xml-document-svgrepo-com.svg", "./kotlin-svgrepo-com.svg", "./Android Studio.svg"],
      link: "https://github.com/sachinprabuditha/MovieApp-Android-Mobile-Application-",
    },
    {
      id: 7,
      title: "X-Clone",
      des: "X-Clone is an Social Media Application designed from clonning X(Twitter). X-Clone aims to  facilitate the creation, sharing and aggregation of content, ideas, interests.",
      img: "./-Clone.png",
      iconLists: ["./next.svg", "./re.svg", "./tail.svg", "./javascript-svgrepo-com.svg", "./Figma.svg", "github-color-svgrepo-com.svg", "./firebase-svgrepo-com.svg", "./Git1.svg"],
      link: "https://github.com/sachinprabuditha/x-next-clone.git",
    },
    {
      id: 8,
      title: "VisionCart",
      des: "Developed a voice-controlled shopping app for visually impaired users, text-to-speech. My role included user registration, profile management, and user management.",
      img: "./VisionCart1.jpg",
      iconLists: ["./Flutter.svg", "./Dart.svg", "./firebase-svgrepo-com.svg", "./Figma.svg", "github-color-svgrepo-com.svg", "./Git1.svg"],
      link: "https://github.com/sachinprabuditha/visioncart.git",
    },
    {
      id: 9,
      title: "PetPal",
      des: "Pet Pal is a mobile app designed to help pet owners manage their pets' health and well-being. It offers features like pet registration, vaccination tracking, doctor appointment booking, pet adoption, and a community platform for pet owners to connect and share advice.",
      img: "./PetPal.jpg",
      iconLists: ["./Flutter.svg", "./Dart.svg", "./firebase-svgrepo-com.svg", "./Figma.svg", "github-color-svgrepo-com.svg", "./Git1.svg"],
      link: "https://github.com/sachinprabuditha/petpal.git",
    },
    {
      id: 10,
      title: "EcoCollect",
      des: "Developed an intelligent system to streamline waste collection in urban environments. The solution monitors waste bin levels, manages collection schedules dynamically, and classifies waste into categories such as e-waste, plastic, and organic. ",
      img: "./EcoCollector (2).png",
      iconLists: ["./Flutter.svg", "./Dart.svg", "./firebase-svgrepo-com.svg", "./Figma.svg", "github-color-svgrepo-com.svg", "./Git1.svg"],
      link: "https://github.com/sachinprabuditha/EcoCollect--smart_waste_management_system.git",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description: "Leading development of next-generation web applications using React, TypeScript, and modern frameworks. Mentoring junior developers and architecting scalable solutions.",
    achievements: [
      "Increased user engagement by 40% through performance optimizations",
      "Led a team of 5 developers on critical product features",
      "Implemented comprehensive testing strategy reducing bugs by 60%"
    ],
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
    color: "from-blue-500 to-cyan-500",
    icon: Code
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    type: "Contract",
    description: "Built scalable web applications from ground up, handling both frontend and backend development. Collaborated with cross-functional teams to deliver high-quality products.",
    achievements: [
      "Developed 3 major product features serving 10K+ users",
      "Reduced API response time by 50% through optimization",
      "Mentored 2 junior developers"
    ],
    skills: ["Vue.js", "Node.js", "MongoDB", "Docker", "GCP"],
    color: "from-purple-500 to-pink-500",
    icon: Zap
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2018 - 2020",
    type: "Full-time",
    description: "Created responsive web applications and interactive user interfaces for various clients. Focused on performance optimization and accessibility standards.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Improved website loading speed by 35% on average",
      "Implemented accessibility features meeting WCAG 2.1 standards"
    ],
    skills: ["JavaScript", "HTML/CSS", "SASS", "jQuery", "Webpack"],
    color: "from-green-500 to-emerald-500",
    icon: Users
  }
];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];
