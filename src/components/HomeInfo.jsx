import React from 'react'
import { Link } from 'react-router-dom'
import InfoBox from './InfoBox'




const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center bg-blue-700 py-4 px-8 rounded-lg text-white mx-5 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.45)] transition-shadow duration-300 ease-in-out -mt-15">
        Hi, I am <span className="font-bold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">Aman</span> 👋
         <br/>
         I am Frontend and Backend Developer...
         </h1>

    ),
    2: (
        // <div>
        // <p className="sm:text-xl sm:leading-snug text-center bg-blue-700 py-4 px-8 rounded-lg text-white mx-5 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.45)] transition-shadow duration-300 ease-in-out">I am Developer</p>
        // <Link to="/about" className="neo-brutalism-white neo-btn">
        
        // </Link>
        // </div>
        <InfoBox
        text="I am a Developer with a passion for building sleek web experiences!"
        link="/about"
        btnText="Learn More"
      />
    ),
    3: (
        <InfoBox
        text="My Multiple Projects over years which helps me in learning new skills"
        link="/projects"
        btnText="Explore"
      />
    ),
    4: (
        <InfoBox
        text="  Need a project done or looking for a Dev? I'm just few keystrokes away"
        link="/contact"
        btnText="Let's talk"
      />
    ),

}


const HomeInfo = ({currentstage}) => {
    
    console.log("Stage:", currentstage);

  return renderContent[currentstage] || null;
  
 
}

export default HomeInfo
