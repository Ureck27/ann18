import { useState } from 'react'
import './788.jsx'
import Sabmet from './componment/inoutbutton'
import Todolist from './componment/ToDOlist'
import Text from './componment/input.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='app'>
    
        <Text />
     </div>
      
    </>
  )
}

export default App
