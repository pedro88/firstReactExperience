import React from 'react'
import ReactDOM from 'react-dom/client'

const TodoList = () => {
    return (
        <>
        <header>
            <h1>My Todo App</h1>
        </header>
        <main>
            <form>
                Type a new todo
            </form>
            <button>
                Add Todo
            </button>
            <hr></hr>
            <section className="list">
                <h2>Todos</h2>
                <ol>
                    <li>Learn React</li>
                    <li>Be Awesome</li>
                </ol>
            </section>
        </main>
        </>
    )
}


export default TodoList