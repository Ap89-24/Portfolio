import React from 'react'
import { projects } from '../constants'
import CTA from '../components/CTA'
import SocialLinks from '../components/SocialLinks'


const Projects = () => {
  return (
    <section className="max-container mt-15 ml-9 h-screen">
    <h1 className="text-5xl sm:text-5xl font-extrabold  mb-10">
  My{' '}
  <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(255,192,0,0.6)] transition-all duration-300 hover:drop-shadow-[0_4px_10px_rgba(255,192,0,0.8)]">
    Projects
  </span>
</h1>


    <div className="mt-5 flex flex-col gap-3 text-slate-500 items-center justify-center">
      <p>These projects exemplify my ability to design and develop scalable, responsive, and user-centric web applications. Leveraging modern technologies and best practices, each project highlights my commitment to writing clean code, solving real-world problems, and delivering high-quality digital solutions.From full-stack applications to creative UI components, these works reflect my journey of learning and building with modern technologies. </p>
    </div>
    
  

<div className="flex flex-wrap my-20 gap-8 justify-center">
  {projects.map((project, index) => (
    <a
      key={project.name}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-72 p-5 rounded-2xl bg-white/20 border border-transparent 
        hover:bg-gradient-to-tr from-pink-100 via-yellow-100 to-green-100 
        hover:border-yellow-300 shadow-xl backdrop-blur-lg 
        transition-all duration-500 hover:scale-105 hover:-rotate-1`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Icon Box */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg
        group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 bg-emerald-300"
      >
        <img
          src={project.iconUrl}
          alt={project.name}
          className="w-7 h-7 object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold text-gray-800 mb-2 group-hover:text-yellow-700
        transition-colors duration-500"
      >
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed">
        {project.description.length > 90
          ? project.description.slice(0, 90) + '...'
          : project.description}
      </p>
    </a>
  ))}
</div>

<hr className="border-slate-300"/>

<CTA />

<hr className="border-slate-300"/>

<SocialLinks />
    </section>
  )
}


export default Projects
