import React from 'react'
import './HowItWorks.css'
import rect from '../../assets/Rectangle 133.png'
import rect2 from '../../assets/Rectangle 134.png'
import rectPhone from '../../assets/Group 217.png'
const HowItWorks = () => {
  return (
      <div className='howItWorks'>
          <div className='vendors__box'>
            <h3 className='vendors__desc'>Order from the best food stations around you</h3>
          </div>
          <div className='partners'>

          </div>
          <div className='howItWorksContainer'>
              <h3 className='vendors__desc'>How it works</h3>
        <div className='vendors__desc--image'>
          <div>
            <img src={rect} alt='rect' /> 
            <p className='orderFoodText'>Choose a food vendor</p>
          </div>
          <div>
            <img src={rectPhone} alt='rectPhone' /> 
            <p className='orderFoodText'>Place an Order</p>
          </div>
          <div>
            <img src={rect2} alt='rect2' /> 
            <p className='orderFoodText'>Food is delivered to You</p>
          </div>
        </div>
          </div>
      </div>
  )
}

export default HowItWorks