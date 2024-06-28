import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaDownload } from 'react-icons/fa'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import '../app/globals.css'


const Hero = () => {
  return (
    <div className='pb-20 pt-20 relative'>
      {/* Profile section at the top */}
      <div className='fixed top-0 left-0 w-full flex md:flex-row items-center justify-between p-4 bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg z-20'>
        <div className='flex items-center'>
          <img src="./Untitled design (1).png" alt="Profile" className='w-12 h-12 rounded-full mr-4' />
          <h1 className='text-xl font-semibold text-black dark:text-white'>Sachin Prabuditha</h1>
        </div>
        <div className='hidden md:flex space-x-20'>
          <a href="#home" className='text-white hover:text-purple transition duration-300'>Home</a>
          <a href="#about" className='text-white hover:text-purple transition duration-300'>About</a>
          <a href="#projects" className='text-white hover:text-purple transition duration-300'>Projects</a>
        </div>
        <div className='flex space-x-4'>
          <a href="https://www.linkedin.com/in/sachinprabuditha/" target="_blank" rel="noopener noreferrer" className='text-black dark:text-white'>
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/sachinprabuditha" target="_blank" rel="noopener noreferrer" className='text-black dark:text-white'>
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className='text-black dark:text-white'>
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-[60vh] md:h-screen"
          fill="white"/>
        <Spotlight
          className="h-[40vh] md:h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-20 md:left-80 top-20 md:top-28 h-[40vh] md:h-[80vh] w-[50vw]" fill="blue" />  

      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"  id='home'>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center px-4">

          <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences" className="text-[32px] md:text-5xl lg:text-6xl"/>

          <p className=" text-black dark:text-white-200 md:tracking-wider mb-12 text-sm md:text-lg">
            Hi! I&apos;m Sachin Prabuditha, an undergraduate specializing in Software Engineering at SLIIT, based in Sri Lanka. As a passionate Full Stack Developer, I have a strong foundation in both front-end and back-end technologies.
With hands-on experience in various programming languages and frameworks such as JavaScript, C, C++, Java, Python, React, Node.js, etc. I am committed to continuous learning and innovation in the tech industry.
          </p>

          <a href="./Sachin's CV Resume_2.pdf" download>
            <MagicButton
              title="Download My CV"
              icon={<FaDownload />}
              position="right"
            />
          </a>

        </div>

      </div>

    </div>
  )
}

export default Hero