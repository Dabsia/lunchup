import React from 'react'
import emptyImage from '../../assets/no-food-available 2.png'
import Button from '../../components/Button/Button'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='notFoundContainer'>
      <div className = 'notFoundItems'>
        <img className='notFoundImage' src={emptyImage} alt='No Food Found' />
        <p className='notFoundText'>The page you are looking for doesn't exist</p>
        <Button text = 'Go back Home'/>
      </div>
    </div>
  )
}

export default NotFound