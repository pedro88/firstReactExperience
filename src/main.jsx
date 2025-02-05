import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import TodoList from './TodoList.jsx'
import TodoWrapper from './component/TodoWrapper'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoWrapper />
  </StrictMode>,
)
