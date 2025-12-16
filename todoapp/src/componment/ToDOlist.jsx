// Exercice 3
import { useState } from "react";


const Todolist=()=>{
    
    return(
        <div>
            <h1>Exo 03</h1>
            <input type="text" id="Todolist" />
            <button onClick={ADD}>To DO list</button>
        </div>
    )
}

export default Todolist ;