import React from 'react'
import ReactDOM from 'react-dom/client'
import Task from './Task.jsx'




const TodoList = () => {
    return (
        <>
        <header>
            <h1>My Todo App</h1>
        </header>
        <main>
            <form>
                <input type='text' placeholder='Type a new todo' />
            </form>
            <button>
                Add Todo
            </button>
            <hr></hr>
            <section className="list">
                <h2>Todos</h2>                
                <Task task="trying new layout" />
                <Task task="Youhou it's work!!" />
                <Task task="I even add a 'br' to adding some style" />
            </section>
        </main>
        </>
    )
}



export default TodoList