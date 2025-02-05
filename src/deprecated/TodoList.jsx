import React from "react";
//import ReactDOM from "react-dom/client";
//import Task from "./Task-deprecated.jsx";
import AddTask from "./AddTask.jsx";
import TaskList from "./DisplayTaskList.jsx";

const TodoList = () => {
	return (
		<>
			<header>
				<h1>My Todo App</h1>
			</header>
			<main>
				<AddTask
				
				/>
				<hr></hr>
				<section className="list">
					<h2>Todos</h2>
					<ul>
						<TaskList />
					</ul>
				</section>
				<section className="displayingButton">

				</section>
			</main>
		</>
	);
};

export default TodoList;
