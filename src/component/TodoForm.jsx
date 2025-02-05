import React, { useState } from 'react'

const TodoForm = ({addTask}) => {
    const [value, setValue] =useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        addTask(value)

        setValue("")
    }



    return (
        <form onSubmit = {handleSubmit}>
            <input
                type='text'
                value = {value}
                placeholder='Add new task'
                onChange={(e) => setValue(e.target.value)} />
            <button type='submit'>Add task</button>
        </form>
    )
}

export default TodoForm