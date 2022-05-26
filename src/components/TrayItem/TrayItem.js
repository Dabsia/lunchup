import React from 'react'
import favicon from '../../assets/favicon.png'
import './TrayItem.css'

// { name, price, imageUrl }
const TrayItem = () => {
  return (
        <div className='trayFoodHolder'>
            <div className='trayFoodDetails'>
                <img src={favicon} className = 'trayFoodImage' alt='favicon' />
                <div className='trayFoodItems'>
                    <p className='trayFoodName'>Chicken Burger</p>
                    <p className='trayFoodprice'>₦1200</p>
                </div>
            </div>
            <div className='trayFoodButtons'>
                <div className='cartOptionsBtnContainer'>
                    <button className='cartOption'>+</button>
                    <p className='value'>1</p>
                    <button className='cartOption'>-</button>
                </div>
                <i className="ri-delete-bin-6-line trash"></i>
            </div>
          </div>
  )
}

export default TrayItem