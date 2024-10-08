import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div className=' text-festival-500 bg-zinc-900'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
