import React from 'react'
import './TrayItem.css'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/reducers/cart.action'

const TrayItem = ({ food, clearItem, addItem, removeItem }) => {
    
    const { name, price, imageUrl, quantity } = food

  return (
        <div className='trayFoodHolder'>
          <img src={imageUrl} className='trayFoodImage' alt={name} />
          <div className='foodDetailsContainer'>
            <div className='trayFoodDetails'>
                <div className='trayFoodItems'>
                    <p className='trayFoodName'>{name}</p>
                    <p className='trayFoodprice'>₦{price}</p>
                </div>
            </div>
            <div className='trayFoodButtons'>
                <div className='cartOptionsBtnContainer'>
                    <button onClick={ () => addItem(food) } className='cartOption'>+</button>
                    <p className='value'>{quantity}</p>
                    <button onClick={ () => removeItem(food) } className='cartOption'>-</button>
                </div>
                <i onClick={() => clearItem(food)} className="ri-delete-bin-6-line trash"></i>
            </div>
          </div>
          </div>
  )
}


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})



export default connect(null,mapDispatchToProps)(TrayItem)