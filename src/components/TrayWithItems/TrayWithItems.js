import React from 'react'

import TrayItem from '../TrayItem/TrayItem'
import { connect } from 'react-redux'


const TrayWithItems = ({cartItems,totalPrice}) => {

  return (
      <div className='pageLayout'>
          <h2>Your Order</h2>
            {
              cartItems.map(cartItem => (
                    <TrayItem key = { cartItem.id } food = {cartItem} />
                ))
            }
          
          <div className='moneyToSpend'>
              <p className='subtotal'>subtotal</p>
              <p className='subtotalValue'>₦1800</p>
          </div>
          <div className='moneyToSpend'>
              <p className='deliveryFee'>Delivery Fee</p>
              <p className='deliveryFeeValue'>₦500</p>
          </div>
          <div className='moneyToSpend'>
              <p className='total'>Total</p>
              <p className='totalValue'>₦{totalPrice}</p>
          </div>
      </div>
  )
}


const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
    totalPrice : state.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0)
})

export default connect(mapStateToProps)(TrayWithItems)