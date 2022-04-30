import React from 'react' 
import { Link } from 'react-router-dom'
import AppDesc from '../../components/AppDesc/AppDesc'

const Welcome = () => {
  return (
    
      <div>
          <h1>Welcome</h1>
          <Link to = '/signup'>Sign Up</Link>
          <Link to = '/About'>About Us</Link>
          <AppDesc />
      </div>
      
    
  )
}

export default Welcome