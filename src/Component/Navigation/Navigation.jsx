import React from 'react'
import style from './Navigation.module.css'
import { Link } from 'react-router-dom'
import logo from '../../../public/images/image.png';

const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}>
        <img src={logo} alt="logo website" />
        
    <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
    </ul>
    </nav>
  )
}

export default Navigation

