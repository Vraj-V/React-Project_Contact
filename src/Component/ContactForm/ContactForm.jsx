import React from 'react'
import style from './ContactForm.module.css'
import Button from '../Button/Button'
import {Send} from 'lucide-react'
import {Phone} from 'lucide-react'
import {Mail} from 'lucide-react'
const ContactForm = () => {
  return (
    <section className={`${style.container}`}>
        <div className={`${style.contact_form}`}>
            <div className={`${style.top_btn}`}>
            <Button text ='VIA SUPPORT CHAT' icon ={<Send />} />
            <Button text ='VIA CALL' icon ={<Phone />} />
            </div>
            <Button isOutline={true} text ='VIA MAIL FORM' icon ={<Mail />} />

        <form action="">
        <div className={style.form_controller}>
          <label htmlFor="name">Name:</label>
          <input type="text" />
        </div>

        <div className={style.form_controller}>
          <label htmlFor="email">Email:</label>
          <input type="email" />
        </div>

        <div className={style.form_controller}>
          <label htmlFor="name">Text:</label>
          <textarea type="text"  rows={8}/>
        </div>

        <div className={style.submit}>
            <Button  text ='SUBMIT' />
        </div>

        </form>
        </div>


        <div className={style.contact_image}>
    <img src="./images/img.svg" alt="" />

        </div>

    </section>
  )
}

export default ContactForm