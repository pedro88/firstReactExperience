import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Todo = ({task, toggleComplete, checked, deleteTodo}) => {
  return (


    <div className='Todo'>
        <input type='checkbox' 
        checked={checked}
        onChange={() => toggleComplete(task.id)}
            />
    <label className={`${task.isComplete ? 'isComplete' : ""}`}>{task.task}</label>
    
    <FontAwesomeIcon icon={faTrash}  onClick={() => deleteTodo(task.id)} />
     </div>
  )
}

export default Todo