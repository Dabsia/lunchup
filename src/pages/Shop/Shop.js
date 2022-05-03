import React from 'react'
import './Shop.css'
import small_Image from '../../assets/smallImage.png'
import Navigation from '../../components/Navigation/Navigation'
const Shop = () => {
  return (
    <div>
      <Navigation />
      <div className='shop_page'>
        <div className='shop_page--details'>
          <h1 className='shop_page__header'>Available food stations</h1>
        </div>
        <div className = 'small_ImageCont'>
          <img className = 'small_Image' src = {small_Image} alt = 'smallImage' />
        </div>
        <form>
        <div className='search_box'>
        <input type = 'text' className='form_input search' placeholder='Search for your favourite food station' />
      </div>
        </form>
      </div>
    </div>
  )
}

export default Shop