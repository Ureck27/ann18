//  Ex_01

import { useState } from "react";

const Text=()=>{
    const [Text , setText] = useState("");
   
    return (
        <>
        <div>
            <h1>{Text}</h1>
            <input 
            type="text" 
           // value={Text}
          //  onChange="SetText"    
             />
            <button>Add</button>
        </div>
        </>
    )
}

export default Text ;