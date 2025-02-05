import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Button from "./Button";
uuidv4();

const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const [filteredTodos, setFilteredTodos] = useState([])
	const [isFiltered, setIsFiltered] = useState(false)



	useEffect(() => {
		todos.length === 0 ? (
			// console.log(localStorage.getItem("task"))
			localStorage.getItem("task") != null ? (
				setTodos(JSON.parse(localStorage.getItem("task")))
			) : (
				null
			)
		) : (
			localStorage.setItem("task", JSON.stringify(todos))
		)
		console.log("local storage: ", localStorage)
	})

// 	useEffect(({checked}) => {
// todos.map((todo) => {
// 	todo.isComplete === true ?
// 	checked = true : 
// 	checked = false
// })
// 	})


	const addTodo = (todo) => {
		setTodos([
			...todos,
			{
				id: uuidv4(),
				task: todo,
				isComplete: false,
				isDelete: false,
			},
		]);
	};

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, isComplete: !todo.isComplete }
					: todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const filterAll = () => {
		setIsFiltered(false)
	};

	const filterActive = () => {
		let filteredArray = todos.filter((todo) => todo.isComplete === false)
		setFilteredTodos(filteredArray)
		setIsFiltered(true)
	};

	const filterComplete = () => {
		let filteredArray = todos.filter((todo) => todo.isComplete === true)
		setFilteredTodos(filteredArray)
		setIsFiltered(true)
	};

	const clearCache = () => {
		localStorage.clear()
		setTodos([])
	}

	return (
		<div>
			<h1>My super Todo List</h1>
			<TodoForm
				addTodo={addTodo}
			/>
			<Button
				filterAll={filterAll}
				filterActive={filterActive}
				filterComplete={filterComplete}
				clearCache={clearCache}
			/>

			{(isFiltered ? filteredTodos : todos).map((todo, index) => (
				<Todo
					task={todo}
					key={index}
					toggleComplete={toggleComplete}
					deleteTodo={deleteTodo}
				/>
			))
			}
		</div>
	);
};

export default TodoWrapper;
