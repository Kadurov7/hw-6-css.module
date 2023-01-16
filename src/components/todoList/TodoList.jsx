import React from 'react'
import styles from "./TodoList.module.css";
import TodoItem from '../todoItem/TodoItem';

const TodoList = ({sortBe}) => {
    // console.log(sortBe)
  return (
    <div className={styles.list}>
        {sortBe.map((item)=>(
                <TodoItem 
                items={item}
            />
           
        ))}
   
    </div>
  )
}

export default TodoList