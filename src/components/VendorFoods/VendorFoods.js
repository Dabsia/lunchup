import React from 'react'
import Navigation from '../Navigation/Navigation'
import { useParams } from 'react-router-dom'



const VendorFoods = () => {

  const { vendorId } = useParams();
  return (
    <div>
      <Navigation />
      <h2>{vendorId}</h2>
  
    </div>
  )
}

export default VendorFoods