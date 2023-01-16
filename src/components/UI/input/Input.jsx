import React from 'react'
import styles from "./Input.module.css";


export const Input = ({id, labelName,placeholder,type,...rest }) => {
  return (
    <div className={styles.input}>
    <label htmlFor={id}>{labelName}</label>
    <input type={type} placeholder={placeholder || " "} id={id} {...rest} />
    </div>
  )
}
