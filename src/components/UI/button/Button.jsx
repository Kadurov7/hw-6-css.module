
import React from 'react'
import styles from "./Button.module.css";

const Button = ({nameButton, onClick}) => {

  return (
    <div>
        <button onClick={onClick}>
        {nameButton} 
        </button>
        
    </div>
  )
}

export default Button