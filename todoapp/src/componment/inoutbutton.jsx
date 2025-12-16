import { useState } from "react";

function Sabmet(){
    const [Text , setMytxt] =useState("Text");
    
    const pushtext = () =>{
        setMytxt("aFASFsaf")
    }

    return(
        <div className="input">
            <h2>exo 01</h2>
            <h1> {Text}</h1>
            <input  id="teext" type="text" />
            <button
            type="button"
            onClick={pushtext}
            >add</button>
        </div>
    )
}

export default Sabmet ;