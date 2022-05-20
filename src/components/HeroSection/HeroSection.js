import React, {useContext} from 'react'
import './HeroSection.css'
import chips_image from '../../assets/Layer 2.png'
import small_burger from '../../assets/smallburger.png'
import AuthContext from '../../store/auth-context'
import { useNavigate } from 'react-router-dom'


const HeroSection = () => {

    const Navigate = useNavigate()

    const authCtx = useContext(AuthContext)
    console.log(authCtx.isLoggedIn)

    const HomeRedirect = () => {
        if (authCtx.isLoggedIn === true) {
            Navigate('/shop')
        }
        else {
            Navigate('/signin')
        }
        
    }

  return (
      <div className='heroSection'>
          <h1 className='heroSectionHeader'>Order Food, Fast, Easy & Convenient</h1>
          <div className='btnContainer'>
            <button onClick={HomeRedirect} className='orderNowBtn'>Order Now</button>
          </div>
          <img src={chips_image} className='chips_image' alt='chips' />
          <img src = {small_burger} className = 'small_burger'  alt = 'small_burger'  />
      </div>
  )
}

export default HeroSection