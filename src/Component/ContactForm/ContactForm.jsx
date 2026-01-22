import React from 'react'
import style from './ContactForm.module.css'
import Button from '../Button/Button'
import {Send} from 'lucide-react'
import {Phone} from 'lucide-react'
import {Mail} from 'lucide-react'
const ContactForm = () => {
  return (
    <section className={`${style.container}`}>
        <div className={`${style.form_section}`}>
            <div className={`${style.top_btn}`}>
            <Button text ='VIA SUPPORT CHAT' icon ={<Send />} />
            <Button text ='VIA CALL' icon ={<Phone />} />
            </div>
            <Button isOutline={true} text ='VIA MAIL FORM' icon ={<Mail />} />


        </div>
        <div></div>

    </section>
  )
}

export default ContactForm