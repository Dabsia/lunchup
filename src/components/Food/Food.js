import React from 'react'
import './Food.css'
import { connect } from 'react-redux'
import { addItem } from '../../redux/reducers/cart.action'

const Food = ({food, addItem}) => {
    const { name, imageUrl, price } = food



    return (
        
            <div className='foodContainer'>
                <div className='foodImageContainer'>
                    <img src = {imageUrl} className = 'foodImage' alt = {name} />
                </div>
                <div className='foodDetails'>
                    <h3 className='foodName'>{name}</h3>
                    <p className='foodPrice'>₦{price}</p>
                </div>
                <button onClick={() => addItem  } className='AddToCartBtn'>Add to Tray</button>
            </div>
          
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: food => dispatch(addItem(food))
})

export default connect(null, mapDispatchToProps)(Food)