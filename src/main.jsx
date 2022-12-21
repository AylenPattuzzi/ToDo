import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import EjericioTodo from './Component/EjercicioToDo/EjericioTodo'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <EjericioTodo/>
  </React.StrictMode>,
)
