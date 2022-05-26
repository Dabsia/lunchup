import React from 'react'
import TrayItem from '../TrayItem/TrayItem'


const TrayWithItems = () => {

  return (
      <div className='pageLayout'>
          <h2>Your Order</h2>
          <TrayItem />
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
              <p className='totalValue'>₦2300</p>
          </div>
      </div>
  )
}

export default TrayWithItems