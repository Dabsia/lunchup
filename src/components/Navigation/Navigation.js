import React, {useState, useContext} from 'react'

import AuthContext from '../../store/auth-context'
import { Link, useNavigate } from 'react-router-dom'
import './Navigation.css'
import Button from '../Button/Button'

const Navigation = () => {

    const authCtx = useContext(AuthContext)

    const Navigate = useNavigate()

    const isLoggedIn = authCtx.isLoggedIn

    const [navActive, setNavActive] = useState('nav__menu')
    const [toggleIcon, setToggleIcon] = useState(false)

    const NavigateToSignUp =  () => {
        Navigate('/signup')
    }
    
    const logoutHandler = () => {
        authCtx.logout()
    }
    


    const navToggle = () => {
        navActive === 'nav__menu' ? setNavActive('nav__menu nav__active') : setNavActive('nav__menu')

        // ToggleIcon

        setToggleIcon(prevState => !prevState)
    }

  return (
    <nav className='nav'>
        <Link to = '/' className='nav__brand'> LUNCHUP</Link>
        <ul className={navActive}>
            <li className='nav__item'>
                <Link className='nav__link' to = '/shop'>Shop</Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__link' to = '/tray'>Tray</Link>
            </li>
            <li className='nav__item'>
                <Link className='nav__link' to = '/about'>About</Link>
            </li>
            {isLoggedIn && <li className='nav__item'>
                <Link className='nav__link' to = '/profile'>Profile</Link>
            </li>}
            {!isLoggedIn && 
                <li className='nav__item'>
                <Link className='nav__link' to = '/signin'>Sign In</Link>
            </li>}
            
            {isLoggedIn ? 
                <li className='nav__item'>
                    <button className='button' onClick={logoutHandler}>Log Out</button>
                    </li> 
                : 
                <li onClick ={NavigateToSignUp} className='nav__item'>
                    <Button text = 'Create Account'/>
                </li> 
        
        }
        </ul>
        
            <i onClick={navToggle} className={`${toggleIcon ? 'ri-close-fill' : 'ri-menu-line'} nav__toggler`} ></i>
            
    </nav>
  )
}

export default Navigation