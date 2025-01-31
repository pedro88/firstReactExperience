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
                <input type='text' placeholder='Type a new todo' />
            </form>
            <button>
                Add Todo
            </button>
            <hr></hr>
            <section className="list">
                <h2>Todos</h2>
                <ul>
                    <li><input type="checkbox" /><label><strong> Learn React</strong> </label>  </li>
                    <li><input type="checkbox" /><label><strong> Be Awesome!</strong> </label>  </li>
                    <li><input type="checkbox" /><label><strong> Keep Learning React</strong> </label>  </li>
                </ul>
            </section>
        </main>
        </>
    )
}


export default TodoList