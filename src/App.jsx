import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes } from './routes/Routes'
import { ContextMenu } from './components/contexto/Menu'
import { ContextCarrito } from './components/contexto/Carrito'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <ContextMenu>
        <ContextCarrito>
        <Routes/>
        </ContextCarrito>
        </ContextMenu>
    </>
  )
}

export default App
