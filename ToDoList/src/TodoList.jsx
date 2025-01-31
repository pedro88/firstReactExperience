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
                
                    <input type="checkbox" /><label> Learn React </label> 
                    <br></br>
                    <input type="checkbox" /><label> Be Awesome! </label>  
                    <br></br>
                <input type="checkbox" /><label> Keep Learning React </label>  
                
            </section>
        </main>
        </>
    )
}


export default TodoList