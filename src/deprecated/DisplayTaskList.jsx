import { useEffect, useState } from "react";
import AddTask from "./AddTask";
// import AddTask from "./AddTask";
import task from "../public/task"


function DisplayTaskList() {

	let [tasks, setTasks] = useState( [{
		isComplete: false,
		isDelete: false,
		name: "first task",
		id:1
	}])
	console.log("tasks: ", tasks)


	useEffect(() => {
		// localStorage.setItem("task: ", JSON.stringify(tasks))
		setTasks(JSON.parse(localStorage.getItem("task")))
		console.log("tasklist bad??: ", JSON.stringify(tasks))
	}, [tasks]);

	const handleChange = (id, index) => {
		let newTaskList = [...tasks]
		console.log(newTaskList)
		newTaskList[index].isComplete = id.target.checked
		setTasks(newTaskList)
		console.log(tasks)
	};

	function ListTask() {
		return tasks.map((task, index) => {
			
			return (
				<>
					<li key={task.id}>
						<input type="checkbox"
							id={task.id}
							checked={task.isComplete}
							name={task.name}
							onChange={(event) => handleChange(event, index)} />
						{task.isComplete === true ? (
							<del>
								{task.name}
							</del>
						) : (
							task.name
						)}
					</li>
				</>
			)
		});
	}


	return (
		<ListTask />

	)

}

export default DisplayTaskList