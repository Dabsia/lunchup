import React from 'react'
import './ShopVendor.css'

const ShopVendor = ({name, location, logo}) => {
  return (
    <div className='vendor'>
        <div className='vendor__image'>
            <img className='vendor__logo' src = {logo} alt = {name} />
        </div>
        <div className='vendor__details'>
            <h3 className='vendor__name'>{name}</h3>
            <p className='vendor__location'>{location}</p>
        </div>
    </div>
  )
}

export default ShopVendor