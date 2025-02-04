import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import TodoForm from './TodoForm'
import TodoWrapper from './TodoWrapper'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoWrapper />
  </StrictMode>,
)
