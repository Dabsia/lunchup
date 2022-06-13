import React from 'react'
import './TrayWithItems.css'
import TrayItem from '../TrayItem/TrayItem'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import PaystackPop from '@paystack/inline-js'
import { removeAllItems } from '../../redux/reducers/cart.action'


const TrayWithItems = ({ cartItems, totalPrice }) => {
    const cartState = useSelector(state => state.cartItems)
    const dispatch = useDispatch()
    
    const payWithPayStack = () => {
        
        console.log(cartState)

        const payStack = new PaystackPop()
        payStack.newTransaction({
            key: 'pk_test_d6ce738cabd2d7c798c5f2c4a3931cc6efbe7714',
            amount: totalPrice * 100,
            email: localStorage.getItem('userEmail'),
            onSuccess(transaction) {
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message)
                dispatch(removeAllItems())
            },
            onCancel() {
                alert('Do you want to cancel the transaction')
            }
        })
    }

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
          <button onClick={() => {payWithPayStack()}} className='button'>Order Now</button>
      </div>
  )
}


const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
    totalPrice : state.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price,
        0)
})

export default connect(mapStateToProps)(TrayWithItems)