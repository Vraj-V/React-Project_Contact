import React,{useState} from 'react'
import style from './ContactForm.module.css'
import Button from '../Button/Button'
import {Send} from 'lucide-react'
import {Phone} from 'lucide-react'
import {Mail} from 'lucide-react'
const ContactForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText]= useState('')

  const onViaCall = () =>{
    console.log("calling");
    window.location.href = 'tel:1018544040' 
    
  }

  const onViaChat = () =>{
    console.log("chatting");
  window.open(
    "https://wa.me/1018544040?text=Hello%20I%20need%20support",
    "_blank"
  );
  }

    const onViaEmail = () =>{
    console.log("emailing");
    window.location.href = `mailto:vvaland6928@gmail.com?subject=Request for help &body=Hello`
  }

  const handleSubmit =(eve)=>{  
    eve.preventDefault();
    console.log(eve)
    setName(eve.target[0].value)
    setEmail(eve.target[1].value)
    setText(eve.target[2].value)
  }

  return (
    <>
    <section className={`${style.container}`}>
        <div className={`${style.contact_form}`}>
            <div className={`${style.top_btn}`}>
            <Button text ='VIA SUPPORT CHAT' funcCalling={onViaChat} icon ={<Send />} />
            <Button text ='VIA CALL' icon ={<Phone />} funcCalling={onViaCall} />
            </div>
            <Button funcCalling={onViaEmail} isOutline={true} text ='VIA MAIL FORM' icon ={<Mail />} />

        <form action="" onSubmit={handleSubmit}>
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
            <div className={`${style.result}`}>

      {name && email && text === ""? " ": name+ " " +email + " "  +text}
    </div>
        </div>


        <div className={style.contact_image}>
    <img src="./images/img.svg" alt="" />

        </div>
    
    </section>

    </>
  )
}

export default ContactForm