import { useState } from 'react'
import './App.css'
import Sabmet from './componment/inoutbutton'
import Todolist from './componment/ToDOlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='app'>
    
        <Todolist />
     </div>
      
    </>
  )
}

export default App
