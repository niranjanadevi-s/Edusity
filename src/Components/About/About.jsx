import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img' />
            <img src={play_icon} alt='' className='play-icon' onClick={() => {setPlayState(true)}} />
        </div>
         
         <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is decided to empower students with th knowledge, skills, and experience needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our program prepare aspiring educators to make a meaningful impact in classrooms, scools and communities.</p>
            <p>Wather you aspire to become a teacher, administrator, consolor, or educational leader, our devers range of programs offer the perfect pathway to achieve your goals and unlock your fill potential in shiping the futue of education.</p>        
        </div>

    </div>
  )
}

export default About