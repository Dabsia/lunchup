import React , {useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/favicon.png'
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import './SignUp.css';


const SignUp = () => {

  const API_KEY = 'AIzaSyB2h3x72iA_O6-0Rx_mqXOdqhj1MvZWOKY';

  // add Loading when creating a request
  const [isLoading, setIsLoading] = useState(false)

  // Get user inputs on signup
  const emailInputRef = useRef()
  const usernameInputRef = useRef()
  const phoneNumberInputRef = useRef()
  const passwordInputRef = useRef()
  
// Create Account Function
  const submitHandler = (e) => {
    e.preventDefault()

    const enteredUsername = usernameInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const enteredPhone = phoneNumberInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value



    setIsLoading(true)
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
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
        console.log('Account Created')
      }
      else{
        return res.json().then(data => {
          let errorMessage = 'Authentication Failed'
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message
          }
          alert(errorMessage)
        });
      }
    })

  }


  return (
    <div className='sign'>
      <ImageBanner />
      <div className='auth'>
      <div className='auth__box'>
        <div className='logoContainer'>
          <img src = {logo} alt = 'logo' />
        </div>
        <h1 className='auth__text'>Create an Account</h1>
        <form onSubmit={submitHandler}>
          <div className='form_detail'>
            <label htmlFor='username'> Username</label>
            <input type = 'text' ref = {usernameInputRef} id = 'username' className='form_input' placeholder='Username' />
          </div>
          <div className='form_detail'>
            <label htmlFor='number'> Phone Number</label>
            <input type = 'number' ref = {phoneNumberInputRef} id = 'phone' className='form_input' placeholder='Phone Number' />
          </div>
          <div className='form_detail'>
            <label htmlFor='email'> Email</label>
            <input type = 'email' id = 'email' ref = {emailInputRef} className='form_input' placeholder='Email' />
          </div>
          <div className='form_detail'>
            <label htmlFor='password'> Password</label>
            <input type = 'password' ref = {passwordInputRef} id = 'password' className='form_input' placeholder='password' />
          </div>
          <div className='btn'>
            <button type='submit' className='form_button'>{!isLoading ? 'Create Account': 'Loading...'}</button>
          </div>
        </form>
        <p className='haveAcctAlready'>Already have an account? <Link className='logIn' to  = '/signin'>Log In</Link></p>
      </div>
    </div>
    </div>
    
  )
}

export default SignUp