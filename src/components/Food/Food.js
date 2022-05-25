import React from 'react'
import './Food.css'

const Food = ({name, imageUrl, price}) => {
    return (
        
            <div className='foodContainer'>
                <div className='foodImageContainer'>
                    <img src = {imageUrl} className = 'foodImage' alt = {name} />
                </div>
                <div className='foodDetails'>
                    <h3 className='foodName'>{name}</h3>
                    <p className='foodPrice'>${price}</p>
                </div>
                <button className='AddToCartBtn'>Add to Tray</button>
            </div>
          
  )
}

export default Food