import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/favicon.png'
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import './SignUp.css';


const SignUp = () => {
  return (
    <div className='sign'>
      <ImageBanner />
      <div className='auth'>
      <div className='auth__box'>
        <div className='logoContainer'>
          <img src = {logo} alt = 'logo' />
        </div>
        <h1 className='auth__text'>Create an Account</h1>
        <form>
          <div className='form_detail'>
            <label htmlFor='username'> Username</label>
            <input type = 'text' id = 'username' className='form_input' placeholder='Username' />
          </div>
          <div className='form_detail'>
            <label htmlFor='number'> Phone Number</label>
            <input type = 'number' id = 'phone' className='form_input' placeholder='Phone Number' />
          </div>
          <div className='form_detail'>
            <label htmlFor='email'> Email</label>
            <input type = 'email' id = 'email' className='form_input' placeholder='Email' />
          </div>
          <div className='form_detail'>
            <label htmlFor='password'> Password</label>
            <input type = 'password' id = 'password' className='form_input' placeholder='password' />
          </div>
          <div className='btn'>
            <button type='submit' className='form_button'>Create Account</button>
          </div>
        </form>
        <p className='haveAcctAlready'>Already have an account? <Link className='logIn' to  = '/signin'>Log In</Link></p>
      </div>
    </div>
    </div>
    
  )
}

export default SignUp