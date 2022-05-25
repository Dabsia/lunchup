import React from 'react'
import Navigation from '../Navigation/Navigation'
import AppDesc from '../AppDesc/AppDesc'
import { useParams } from 'react-router-dom'
import Foods from '../Foods/Foods'
import Footer from '../Footer/Footer'
import './VendorFoods.css'


const VendorFoods = () => {

  const { vendorId } = useParams();
  return (
    <div>
      <Navigation />
      <div className='pageLayout'>
        <div className='foodHeaderSection'>
          <div className='foodLocation'>
            <h2 className='vendorName'>{vendorId}</h2>
            <p className='availableMeals'>9 meals available for order</p>
          </div>
          <div className='foodDeliveryTime'>
            <p className='deliveryTime'><span className='openingTime'>Delivery</span> 20 - 30 minutes</p>
            <p className='deliveryTime'><span className='openingTime'>Open</span> 8:00 am - 10:00 pm</p>
             
          </div>
          </div>
          <Foods />
      </div>
      <AppDesc />
      <Footer />
    </div>
  )
}

export default VendorFoods