import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/favicon.png'
import '../SignUp/SignUp.css';
import ImageBanner from '../../components/ImageBanner/ImageBanner';

const SignIn = () => {

  const API_KEY = 'AIzaSyB2h3x72iA_O6-0Rx_mqXOdqhj1MvZWOKY';

  // add Loading when creating a request
  const [isLoading, setIsLoading] = useState(false)

  // Get user inputs on signup
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  
// Create Account Function
  const submitHandler = (e) => {
    e.preventDefault()

    // Using user inputs in SignIn logic
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value



    setIsLoading(true)
    // Submitting the user input to firebase 
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
      
      setIsLoading(false)
      if (res.ok){
        console.log('Login Successful')
        return res.json()
      }
      // Show Auth Message if failed
      else{
        return res.json().then(data => {
          console.log(data)
          let errorMessage = 'Authentication Failed'
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message
          }
          throw new Error(errorMessage);
        });
      }
    }).then(data => console.log(data))
    .catch(err => alert(err.message))

  }


  return (
    <div className='sign'>
        <ImageBanner />
        <div className='auth'>
      <div className='auth__box'>
        <div className='logoContainer'>
          <img src = {logo} alt = 'logo' />
        </div>
        <h1 className='auth__text'>Login to Your Account</h1>
        <form onSubmit={submitHandler}>
          
          <div className='form_detail'>
            <label htmlFor='email'> Email</label>
            <input type = 'email' ref = {emailInputRef} id = 'email' className='form_input' placeholder='Email' />
          </div>
          <div className='form_detail'>
            <label htmlFor='password'> Password</label>
            <input type = 'password' ref = {passwordInputRef} id = 'password' className='form_input' placeholder='password' />
          </div>
          <div className='btn'>
            <button type='submit' className='form_button'>{!isLoading ? 'Log In': 'Loading...'}</button>
          </div>
        </form>
        <p className='haveAcctAlready'>Don't have an account? <Link className='logIn' to  = '/signup'>Sign Up</Link></p>
      </div>
    </div>
    
    </div>
  )
}

export default SignIn