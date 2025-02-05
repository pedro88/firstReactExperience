import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import TodoList from './TodoList.jsx'
import TodoWrapper from './TodoWrapper'

window.onload = () => {
  console.log("onload: ", localStorage)
    }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoWrapper />
  </StrictMode>,
)
