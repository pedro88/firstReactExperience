import { useEffect, useState } from "react";
import React from "react";
//import Task from "./Task-deprecated.jsx";
import DisplayTaskList from "./DisplayTaskList";
import task from "../public/task"

function AddTask({ lastId }) {
	localStorage.getItem(null) ? localStorage.setItem("") : null


	const clearTaskData = {
		taskName: ""
	}

	const [newTask, setNewTask] = useState(clearTaskData)
	const [taskList, setTaskList] = useState(localStorage.getItem("task"))

	useEffect(() => {
		localStorage.setItem("task: ", JSON.stringify(taskList))
		console.log("tasklist: ", JSON.stringify(taskList))
	}, [taskList]);

	const handleClick = () => {
		console.log("last id: ", lastId)
		const data = {
			isComplete: false,
			isDelete: false,
			name: newTask.taskName,
			id: lastId + 1
		}
		onAddTask(JSON.parse(JSON.stringify((data))))

		console.log("data: ", data)
		setNewTask(clearTaskData)
	}

	const onAddTask = (task) => {
		setTaskList([...taskList, task])
		console.log("localeStorage.task: ", localStorage.task)
	}

	return (
		<>
			<form>
				<input
					type="text"
					placeholder="Type a new todo"
					value={newTask.taskName}
					onChange={event => { setNewTask({ ...newTask, taskName: event.target.value }) }} />
			</form>
			<button onClick={() => handleClick()}>Add Todo</button>
		</>
	);
};

export default AddTask
