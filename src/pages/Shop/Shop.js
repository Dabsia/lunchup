import React, {useState} from 'react'
import './Shop.css'
import small_Image from '../../assets/smallImage.png'
import Navigation from '../../components/Navigation/Navigation'
import ShopContainer from '../../components/ShopContainer/ShopContainer'
import AppDesc from '../../components/AppDesc/AppDesc'
import Footer from '../../components/Footer/Footer'
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
          <div className='search_box search'>
          <input onChange={searchVendors} type = 'text' className='form_input' placeholder='Search for your favourite food station' />
          </div>
        </form>
        <ShopContainer vendorsInput = {vendors}/>
      </div>
      <AppDesc />
      <Footer />
    </div>
  )
}

export default Shop