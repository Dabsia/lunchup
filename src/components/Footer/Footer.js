import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
      <footer className='footer'>
          <div className='footer__contents'>
              <h2 className='footer__header'>LunchUp</h2>
              <p className='footer__text'>LunchUp Food app makes it simple for anybody to use a mobile device to look over the menu of the best vendors and place an order for home delivery.</p>
              <div className='footer__links'>
                  <ul>
                      <h6 className='footer__link-desc'>Company</h6>
                      <Link className='footer__link' to = '/'><li className='footer__link-li'>About Us</li></Link>  
                      <Link className='footer__link' to = '/'><li className='footer__link-li'>Contact</li></Link>
                      <Link className='footer__link' to = '/'><li className='footer__link-li'>Brand Assets</li></Link>
                  </ul>
              
              <ul>
                      <h6 className='footer__link-desc'>Services</h6>
                      <Link className='footer__link' to = '/'><li className='footer__link-li'>Restaurants</li></Link>  
                      <Link className='footer__link' to = '/'><li className='footer__link-li'>Delivery</li></Link>
                      <Link className='footer__link' to = '/'><li className='footer__link-li'>Payments</li></Link>
              </ul>
                    <ul>
                      <h6 className='footer__link-desc'>Socials</h6>
                      <Link className='footer__link' to = '/'><li className='footer__link-li'>Facebook</li></Link>  
                      <Link className='footer__link' to = '/'><li className='footer__link-li'>Instagram</li></Link>
                      <Link className='footer__link' to = '/'><li className='footer__link-li'>Twitter</li></Link>
                  </ul>
                  </div>
          </div>
      </footer>
  )
}

export default Footer