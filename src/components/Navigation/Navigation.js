import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navigation.css'
import Button from '../Button/Button'

const Navigation = () => {

    const [navActive, setNavActive] = useState('nav__menu')
    const [toggleIcon, setToggleIcon] = useState(false)

    const NavigateToSignUp =  () => {
        Navigate('/signup')
    }
    

    const Navigate = useNavigate()


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
                <Link className='nav__link' to = '/'>Home</Link>
            </li>
            <li className='nav__item'>
                <Link className='nav__link' to = '/about'>About</Link>
            </li>
            <li className='nav__item'>
                <Link className='nav__link' to = '/'>Profile</Link>
            </li>
            <li className='nav__item'>
                <Link className='nav__link' to = '/signin'>Sign In</Link>
            </li>
            <li onClick ={NavigateToSignUp} className='nav__item'>
                <Button text = 'Create Account' />
            </li>
        </ul>
        
            <i onClick={navToggle} className={`${toggleIcon ? 'ri-close-fill' : 'ri-menu-line'} nav__toggler`} ></i>
            
    </nav>
  )
}

export default Navigation