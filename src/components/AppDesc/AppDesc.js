import React from 'react'
import './AppDesc.css'
import AppStore from '../../assets/appleStore.jpg'
import google from '../../assets/google.jpg'
import phonesImage from '../../assets/order.png'

const AppDesc = () => {
  return (
    <div className='app__desc'>
        <div className='app__desc__text'>
            <h2 className='order'>Order right from your phone</h2>
            <p className='lunchupFood'>LunchUp Food app makes it simple for anybody to use a mobile device to look over the menu of the best vendors and place an order for home delivery.</p>
            <div className='appstores'>
                <div className='appstoreHolder'>
                    <img src={AppStore} alt  = 'appStore' className= 'appStoreImage' />
                </div>
                <div className='appstoreHolder'>
                <img src={google} alt  = 'playStore' className= 'appStoreImage' />
                </div>
                
            </div>
        </div>
        <div className='app__desc__imageHolder'>
            <img className='phones' src={phonesImage}  alt = 'phones' />
        </div>
      </div>
  )
}

export default AppDesc