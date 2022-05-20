import React from 'react' 
// import AppDesc from '../../components/AppDesc/AppDesc'
import Navigation from '../../components/Navigation/Navigation'
import small_Image from '../../assets/smallImage.png'
import HeroSection from '../../components/HeroSection/HeroSection'

const Welcome = () => {
  return (
    
      <div>
      <Navigation />
      <div className = 'small_ImageCont'>
          <img className = 'small_Image' src = {small_Image} alt = 'smallImage' />
      </div>
      <HeroSection />
  {/*<AppDesc />*/}
      </div>
      
    
  )
}

export default Welcome