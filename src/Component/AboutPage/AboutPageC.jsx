import React from 'react'
import style from './AboutPage.module.css'
import img from '../../assets/about.png'

const AboutPageC = () => {
  return (
    <div className={`${style.container}`}>
        <h2>About US.</h2>
        <br />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Dignissimos natus repellat, eum, quidem quae voluptatum, quod quia voluptates quibusdam voluptate. </p>
        <div className={`${style.image_container}`}>
        <img src={img} alt="image" />
        </div>  
    </div>
  )
}

export default AboutPageC