import React from 'react'
import styles from './Button.module.css'
const Button = ({isOutline,icon,text,funcCalling}) => {
  return (
    <button onClick={funcCalling} className={isOutline? styles.outline_btn : styles.primary_btn  }>
        {icon}
        {text} {/* show the text. */}
    </button>
  )
}

export default Button