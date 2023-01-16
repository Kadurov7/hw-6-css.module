import React from 'react'
import styles from "./TodoItem.module.css";


const TodoItem = ({items}) => {
    
  return (
    <div className={styles.item}>
      <p>{`${items.name} (${items.age} years old)`}</p>
    </div>
  )
}

export default TodoItem