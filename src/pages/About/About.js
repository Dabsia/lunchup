import React from 'react'
import './About.css'
import AboutUsPic from '../../assets/AboutUs.jpg'
import AppDesc from '../../components/AppDesc/AppDesc'
import Navigation from '../../components/Navigation/Navigation'

const About = () => {
  return (
    <div>
    <Navigation />
    <div className='aboutUs'>
        <div className='aboutUs__text'>
        <div>
        
        <div className='aboutUs--story'>
            <h2 className='aboutUs--story__heading'>Our Story</h2>
            <p className='aboutUs--story__text'>We are a group of Interns at idealab on a mission  to provide food ordering services to your doorstep wherever you are</p>
        </div>
        <div className='aboutUs--vision'>
            <h2 className='aboutUs--vision__heading'>Our Vision</h2>
            <p className='aboutUs--vision__text'>To be the Goto app for food ordering at homes, schools and workplaces</p>
        </div>
        
    </div>
        </div>
        <div className='aboutUs__image'>
                <img className='abtUsImage' src = {AboutUsPic} alt = 'About Us' />
        </div>
        </div>
        <AppDesc />
    </div>
  )
}

export default About