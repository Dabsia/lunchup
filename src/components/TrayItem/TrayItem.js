import React from 'react'
import './TrayItem.css'



const TrayItem = ({food : { name, price, imageUrl, quantity }}) => {
  return (
        <div className='trayFoodHolder'>
            <div className='trayFoodDetails'>
                <img src={imageUrl} className = 'trayFoodImage' alt={name} />
                <div className='trayFoodItems'>
                    <p className='trayFoodName'>{name}</p>
                    <p className='trayFoodprice'>₦{price}</p>
                </div>
            </div>
            <div className='trayFoodButtons'>
                <div className='cartOptionsBtnContainer'>
                    <button className='cartOption'>+</button>
                    <p className='value'>{quantity}</p>
                    <button className='cartOption'>-</button>
                </div>
                <i className="ri-delete-bin-6-line trash"></i>
            </div>
          </div>
  )
}






export default TrayItem