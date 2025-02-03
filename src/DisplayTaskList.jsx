import { useEffect, useState } from "react";
import AddTask from "./AddTask";

function DisplayTaskList(name) {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch("./public/task.json")
			.then((response) => response.json())
			.then((data) => setTasks(data.task))
			.catch((error) => console.log(error));
	}, []);

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