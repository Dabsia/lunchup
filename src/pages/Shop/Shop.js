import React, {useState} from 'react'
import './Shop.css'
import small_Image from '../../assets/smallImage.png'
import Navigation from '../../components/Navigation/Navigation'
import ShopContainer from '../../components/ShopContainer/ShopContainer'
const Shop = () => {

  const [vendors, setVendors] = useState('')

  const searchVendors = (e) => {
    setVendors(e.target.value)
    
  }

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
          <input onChange={searchVendors} type = 'text' className='form_input search' placeholder='Search for your favourite food station' />
          </div>
        </form>
        <ShopContainer vendorsInput = {vendors}/>
      </div>
    </div>
  )
}

export default Shop