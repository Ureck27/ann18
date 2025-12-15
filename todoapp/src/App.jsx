import { useState } from 'react'
import './App.css'
import Sabmet from './componment/inoutbutton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='app'>
        <Sabmet />
         
     </div>
      
    </>
  )
}

export default App
