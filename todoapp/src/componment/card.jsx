import { useState } from "react"
const todoist =()=>{
   const [Todo , setT] = useState()

    return(
        <>
          <div>
             <h1>To Do List </h1>
             <input type="text" />
             <button>Add</button>
          </div>
          <div>
             <ul>
                <li>
                </li>
             </ul>
          </div>
        </>
    )
}