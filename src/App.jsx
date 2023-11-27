import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes } from './routes/Routes'
import { ContextMenu } from './components/contexto/Menu'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <ContextMenu>
        <Routes/>
        </ContextMenu>
    </>
  )
}

export default App
