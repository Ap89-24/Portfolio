import React from 'react'
import { skills } from '../constants'
import CTA from '../components/CTA'
import SocialLinks from '../components/SocialLinks'

const About = () => {
  return (
   <section className="max-container mt-15 ml-9">
    <h1 className="text-4xl font-extrabold">Hello, 
     I'm <span className="font-bold text-yellow-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">Aman</span>
    </h1>

    <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p>Myself Aman Patel studied from JSS Academy of Technical Education Noida. And try to be proficient in learning new skills and
        always ready to collaborate on new projects. </p>
    </div>

    <div className="py-10 flex flex-col">
    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 relative    w-fit group transition-all duration-500">
       My Skills
     <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full rounded-full"></span>
    </h2>

    <div className="mt-16 flex flex-wrap gap-12">
    {skills.map((skill) => (
      <div  className="w-20 h-20 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-yellow-400/60 border border-white/20">
        <div/>
        <div className="rounded-xl flex justify-center items-center">
          <img
          src={skill.imageUrl}
          alt={skill.name}
          className="w-10 h-10 object-contain transition-all duration-500 ease-in-out transform hover:scale-125 hover:rotate-[10deg] hover:drop-shadow-[0_4px_8px_rgba(255,255,0,0.6)]"

          />
        </div>
      </div>
    ))}
    </div>
    </div>

    <div className="py-16">
    <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 relative    w-fit group transition-all duration-500">
       Work Experience
     <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full rounded-full"></span>
    </h3>
    <div className="mt-5 flex flex-col gap-3 text-slate-500">
     <p>I'am totally new into this so I don't have a work experience but I'm looking for some opportunities to grab and get some work experience. </p>
    </div>

    </div>

    <hr className="border-slate-300" />

    <CTA />

    <hr className="border-slate-300" />

    <SocialLinks />
   </section>
  )
}

export default About
