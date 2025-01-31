import { useState } from "react";
import React from "react";
import Task from "./Task.jsx";



const AddTask = ({ name }) => {
const [newTask, setNewTask] = useState('')
function handleNewTaskChange(e) {
    setNewTask(e.target.value)
}

function handleAddTodo() {
    <Task name = {name} />
    setNewTask('')
}


	return (
		<>
			<form>
				<input
                type="text" 
                placeholder="Type a new todo"
                value={newTask}
                onChange={handleNewTaskChange} />
			</form>
			<button onClick={handleAddTodo}>Add Todo</button>
		</>
	);
};

export default AddTask
