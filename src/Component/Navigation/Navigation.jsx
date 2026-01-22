import React from 'react'
import style from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}>
        <img src="./images/image.png" alt="logo website" />
        
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </nav>
  )
}

export default Navigation

