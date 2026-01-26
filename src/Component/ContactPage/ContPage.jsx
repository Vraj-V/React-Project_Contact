import React from 'react'
import style from './ContPage.module.css'


const ContPage = () => {
  return (
    <div  className={`${style.container}`} >
        <h2>CONTACT US</h2>
        <div className={`${style.main}`}>
            <h3>Thank you for your interest in contacting us.</h3>
            <h4>Supporting Email : example@gmail.com</h4>
        </div>
    </div>
  )
}

export default ContPage