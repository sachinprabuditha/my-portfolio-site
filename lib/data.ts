import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { Fa42Group } from "react-icons/fa6";
import HtmlIcon from "@/public/html.svg";
import CssIcon from "@/public/css.svg";
import JsIcon from "@/public/javascript.svg";
import TsIcon from "@/public/typescript.svg";
import ReactIcon from "@/public/react.svg";
import NextJsIcon from "@/public/nextjs.svg";
import NodeJsIcon from "@/public/nodejs.svg";
import GitIcon from "@/public/git.svg";
import TailwindIcon from "@/public/tailwindcss.svg";
import MongoDbIcon from "@/public/mongodb.svg";
import ReduxIcon from "@/public/redux.svg";
import ExpressIcon from "@/public/express.svg";
import PythonIcon from "@/public/python.svg";
import FramerMotionIcon from "@/public/framermotion.svg";


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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "Python",
  "JAVA",
  "C",
  "C++",
  "Git",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "Figma",
  "Kotlin",
  "Android Studio",
  
] as const;

export function map(arg0: (skill: string | number | bigint | boolean | Promise<React.AwaitedReactNode> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | import("framer-motion").MotionValue<number> | import("framer-motion").MotionValue<string> | null | undefined, index: React.Key | null | undefined) => React.JSX.Element): React.ReactNode {
    throw new Error("Function not implemented.");
}
