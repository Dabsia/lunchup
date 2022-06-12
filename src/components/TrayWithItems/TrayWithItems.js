import React from 'react'
import './TrayWithItems.css'
import TrayItem from '../TrayItem/TrayItem'
import { connect } from 'react-redux'


const TrayWithItems = ({cartItems,totalPrice}) => {

  return (
      <div className='pageLayout'>
        <h2 className='yourOrderText'>Your Order</h2>
        <div className='cartItems'>
            {
                cartItems.map(cartItem => (
                    <TrayItem key = { cartItem.id } food = {cartItem} />
                ))
            }
        </div>
          
        <div className='moneyToSpend'>
            <h3 className='total'>Total</h3>
            <p className='totalValue'>₦{totalPrice}</p>
        </div>
        <button className='button'>Order Now</button>
      </div>
  )
}


const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
    totalPrice : state.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price,
        0)
})

export default connect(mapStateToProps)(TrayWithItems)