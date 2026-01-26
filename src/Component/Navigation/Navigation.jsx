import React from 'react'
import style from './Navigation.module.css'
import { Link } from 'react-router-dom'
import logo from '../../../public/images/image.png';

const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}>
        <Link to='/' className='logo'>
        <img src={logo} alt="logo website" />
        </Link>
    <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
    </ul>
    </nav>
  )
}

export default Navigation

