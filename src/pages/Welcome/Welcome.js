import React from 'react' 
import AppDesc from '../../components/AppDesc/AppDesc'
import Navigation from '../../components/Navigation/Navigation'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/Footer/Footer'

const Welcome = () => {
  return (
    
    <div>
        <Navigation />
        <HeroSection />
        <HowItWorks />
        <AppDesc />
        <Footer />
    </div>
      
    
  )
}

export default Welcome