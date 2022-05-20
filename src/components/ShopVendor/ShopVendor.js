import React from 'react'
import './ShopVendor.css'
import {Link} from 'react-router-dom'



const ShopVendor = ({name, location,id, logo}) => {

  return (
        
            <div className='vendor'>
            <Link className='links' to = {`/shop/${id}`}>
                <div className='vendor__image'>
                    <img className='vendor__logo' src = {logo} alt = {name} />
                </div>
                <div className='vendor__details'>
                    <h3 className='vendor__name'>{name}</h3>
                    <p className='vendor__location'>{location}</p>
                </div>
            </Link> 
            </div> 
        
  )
}

export default ShopVendor