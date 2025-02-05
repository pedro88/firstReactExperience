import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
// import {v4 as uuidv4} from 'uuid'
// uuidv4()

export const TodoWrapper = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, {id :1, task: task, isComplete: false, isDelete : false}])
    console.log(tasks)
  }

  return (
    <div>

    <TodoForm addTask = {addTask}/>
    {tasks.map((task, index) => {
      <Todo task={task} key={index}/>
    })}
    <Todo />
    </div>
  )
}
export default TodoWrapper
