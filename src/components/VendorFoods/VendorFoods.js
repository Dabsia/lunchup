import React, {useState} from 'react'
import Navigation from '../Navigation/Navigation'
import AppDesc from '../AppDesc/AppDesc'
import { useParams } from 'react-router-dom'
import Foods from '../Foods/Foods'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer'
import './VendorFoods.css'
import Modal from '../Modal/Modal'


const VendorFoods = ({itemCount}) => {

  const [modalBtn, setModalBtn] = useState(false)

  const showTrayModal = () => {
    setModalBtn(true)
  }

  const CloseModal = () => {
    setModalBtn(false)
  }

  
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
        <div className='count' onClick={() => {showTrayModal()}} >{ itemCount}</div>
        
        <Foods />
        {modalBtn && <Modal CloseModal={CloseModal}/>}
      </div>
      <AppDesc />
      <Footer />
    </div>
  )
}

  const mapStateToProps = (state) => ({
    itemCount : state.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity,
      0)
  })


        

export default connect(mapStateToProps)(VendorFoods)


