import { useState } from "react";
import React from "react";
//import Task from "./Task-deprecated.jsx";
import DisplayTaskList from "./DisplayTaskList";



const AddTask = ({ name }) => {
	const [newTask, setNewTask] = useState('')

	function handleNewTaskChange(e) {
		setNewTask(e.target.value)
	}

	function handleAddTask() {
		<DisplayTaskList name={name} />
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
			<button onClick={handleAddTask}>Add Todo</button>
		</>
	);
};

export default AddTask
