import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/favicon.png'
import '../SignUp/SignUp.css';
import ImageBanner from '../../components/ImageBanner/ImageBanner';

const SignIn = () => {
  return (
    <div className='sign'>
        <ImageBanner />
        <div className='auth'>
      <div className='auth__box'>
        <div className='logoContainer'>
          <img src = {logo} alt = 'logo' />
        </div>
        <h1 className='auth__text'>Login to Your Account</h1>
        <form>
          
          <div className='form_detail'>
            <label htmlFor='email'> Email</label>
            <input type = 'email' id = 'email' className='form_input' placeholder='Email' />
          </div>
          <div className='form_detail'>
            <label htmlFor='password'> Password</label>
            <input type = 'password' id = 'password' className='form_input' placeholder='password' />
          </div>
          <div className='btn'>
            <button type='submit' className='form_button'>Log In</button>
          </div>
        </form>
        <p className='haveAcctAlready'>Don't have an account? <Link className='logIn' to  = '/signup'>Sign Up</Link></p>
      </div>
    </div>
    
    </div>
  )
}

export default SignIn