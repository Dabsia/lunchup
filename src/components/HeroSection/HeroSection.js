import React from 'react'
import './HeroSection.css'
import chips_image from '../../assets/Layer 2.png'
import small_burger from '../../assets/smallburger.png'


const HeroSection = () => {
  return (
      <div className='heroSection'>
          <h1 className='heroSectionHeader'>Order Food, Fast, Easy & Convenient</h1>
          <div className='btnContainer'>
            <button className='orderNowBtn'>Order Now</button>
          </div>
          <img src={chips_image} className='chips_image' alt='chips image' />
          <img src = {small_burger} className = 'small_burger'  alt = 'small_burger'  />
      </div>
  )
}

export default HeroSection