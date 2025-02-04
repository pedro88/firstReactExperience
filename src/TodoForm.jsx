import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => { 
        e.preventDefault()
        //setValue(e.target.value)
        addTodo(value)
        setValue("")
    }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input 
            type='text'
            placeholder='Add new task'
            value={value}
            onChange={(e) =>setValue(e.target.value)} 
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm