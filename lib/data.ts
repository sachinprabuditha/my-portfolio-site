import React from "react";
import HtmlIcon from "@/public/html-5-svgrepo-com.svg";
import CssIcon from "@/public/css-3-svgrepo-com.svg";
import JsIcon from "@/public/javascript-svgrepo-com.svg";
import TsIcon from "@/public/ts.svg";
import ReactIcon from "@/public/react-svgrepo-com.svg";
import NextJsIcon from "@/public/next.svg";
import NodeJsIcon from "@/public/Node.js.svg";
import GitIcon from "@/public/Git1.svg";
import TailwindIcon from "@/public/tail.svg";
import MongoDbIcon from "@/public/mongo-svgrepo-com.svg";
import Java from "@/public/Java.svg";
import Sql from "@/public/MySQL.svg";
import PythonIcon from "@/public/tail.svg";
import KotlinIcon from "@/public/kotlin-svgrepo-com.svg";
import FirebaseIcon from "@/public/firebase-svgrepo-com.svg";
import AndroidStudioIcon from "@/public/Android Studio.svg";
import FigmaIcon from "@/public/Figma.svg";
import C from "@/public/C_Programming_Language.svg";
import Cpp from "@/public/ISO_C++_Logo.svg";
import Vs from "@/public/vscode3-svgrepo-com.svg";
import Vite from "@/public/vite-svgrepo-com.svg"
import Php from "@/public/PHP.svg"
import Boost from "@/public/Bootstrap.svg"
import Phython from "@/public/python-svgrepo-com.svg"
import Ps from "@/public/photoshop-svgrepo-com.svg"
import Il from "@/public/adobe-illustrator-svgrepo-com.svg"
import R from "@/public/R.svg"
import Inso from "@/public/Insomnia.svg"
import Scl from "@/public/download.png"
import Sliit from "@/public/Sliit.png"
import motion from "@/public/fm.svg";
import flutter from "@/public/Flutter.svg";
import dart from "@/public/Dart.svg";
import vercel from "@/public/Vercel.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const skillsData = [
  { name: "HTML", icon: HtmlIcon },
  { name: "CSS", icon: CssIcon },
  { name: "JavaScript", icon: JsIcon },
  { name: "TypeScript", icon: TsIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "Node.js", icon: NodeJsIcon },
  { name: "SQL", icon: Sql }, // Add an icon for SQL if available
  { name: "Python", icon: PythonIcon },
  { name: "JAVA", icon: Java }, // Add an icon for JAVA if available
  { name: "C", icon: C }, // Add an icon for C if available
  { name: "C++", icon: Cpp }, // Add an icon for C++ if available
  { name: "Git", icon: GitIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "MongoDB", icon: MongoDbIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Kotlin", icon: KotlinIcon },
  { name: "Android Studio", icon: AndroidStudioIcon },
  { name: "VS Code", icon: Vs },
  { name: "Vite", icon: Vite },
  { name: "PHP", icon: Php },
  { name: "Bootstrap", icon: Boost },
  { name: "Python", icon: Phython },
  { name: "Framer Motion", icon: motion },
  { name: "Photoshop", icon: Ps },
  { name: "Illustrator", icon: Il },
  { name: "R", icon: R },
  { name: "Insomnia", icon: Inso },
  { name: "Vercel", icon: vercel },
  { name: "Flutter", icon: flutter },
  { name: "Dart", icon: dart },
  
] as const;

// data.js or data.ts
export const educationData = [
  {
    institution: "Sri Lanka Institute of Information Technology - Malabe",
    degree: "BSc (Hons) in Information Technology Specializing in Software Engineering",
    duration: "Oct 2022 - Present",
    details: [
      "I am currently pursuing a Bachelor of Science (Hons) in Information Technology degree Specializing in Software Engineering.",
      "Throughout my university tenure, I have actively contributed to various clubs and successfully executed numerous projects, showcasing my dedication and proficiency in both academic and practical domains.",
    ],
    logo: Sliit,
  },
  {
    institution: "H/ Vijayaba National School - Hungama",
    degree: "Primary Education to Advanced level",
    duration: "2006 - 2019",
    details: [
      "I attended Hungama Vijayaba National College from my Primary Education through the Advanced Level Examinations",
      "This school played a crucial role in my academic journey, contributing significantly to my success in the Ordinary Level examinations (In English Medium) where I achieved high grades, with A grades in 6 subjects and B grades in 2 subjects and a C grade. (A-6, B-2, C-1)",
      "During this period, I selected Combine Maths, Physics, and ICT as my subjects.",
      "This strategic choice not only facilitated my successful attainment of a B Pass and 2 S Passes (BSS) in the Advanced Level examinations but also paved the way for the realization of my aspirations to enter university.",
    ],
    logo: Scl,
  },
] as const;
 

export function map(arg0: (skill: string | number | bigint | boolean | Promise<React.AwaitedReactNode> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | import("framer-motion").MotionValue<number> | import("framer-motion").MotionValue<string> | null | undefined, index: React.Key | null | undefined) => React.JSX.Element): React.ReactNode {
    throw new Error("Function not implemented.");
}
