import React from 'react'
import man_icon from '../../assets/man.png'
import './About.css'
function About() {
  return (
    <div className='about'>
      <div className='about-left'>
       
          <h1>Let Me Introduce Myself</h1>
          <p> 
          ~ Welcome! I’m <span>Ayush Adhikari</span>, a passionate <span>Web Developer</span> with a love for creativity and innovation.</p>
          
          <p>~ With a keen eye for detail and a drive for excellence, I specialize in developing an <span>interactive and beautiful websites</span>.</p> 
          
          <p>~ My journey in this field has been fueled by a constant desire to learn, grow, and <span>push boundaries</span>.</p> 
          <p>~ When I’m not engaged in website making, you can find me <span>watching movies and playing games</span>.</p>
          <p>~ Explore my work, and let’s create something amazing together!</p>
         

        
      </div>
      <div className="about-right">
        <img src={man_icon} alt="" />
      </div>

    </div>
  )
}

export default About