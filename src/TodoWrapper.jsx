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
        console.log("clik")
        setIsFiltered(false) 
        setFilteredTodos(todos)
        console.log(isFiltered)
    };

	const filterActive = () => {
        let filteredArray = todos.filter((todo) => todo.isComplete === false )
        setFilteredTodos(filteredArray)
        console.log(isFiltered)
        console.log(filteredArray)
        setIsFiltered(true)     
    };

	const filterComplete = () => {
        let filteredArray = todos.filter((todo) => todo.isComplete === true )
        setFilteredTodos(filteredArray)
        console.log(isFiltered)
        console.log(filteredArray)
        setIsFiltered(true) 
    };

	return (
		<div>
			<TodoForm 
            addTodo={addTodo} 
            />
			<Button
				filterAll={filterAll}
				filterActive={filterActive}
				filterComplete={filterComplete}
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
