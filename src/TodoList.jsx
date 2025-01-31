import React from "react";
import ReactDOM from "react-dom/client";
import Task from "./Task.jsx";
import AddTask from "./AddTask.jsx";
import TaskList from "./test.jsx";

const TodoList = () => {
	return (
		<>
			<header>
				<h1>My Todo App</h1>
			</header>
			<main>
				<hr></hr>
				<section className="list">
					<h2>Todos</h2>
					<ul>
						<TaskList />
					</ul>
				</section>
			</main>
		</>
	);
};

export default TodoList;
