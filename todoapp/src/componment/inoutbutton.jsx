import { useState } from "react";

function Sabmet(){
    const [Text , setMytxt] =useState("Text");
    return(
        <div className="input">
            <h1>{Text}</h1>
            <input type="text" />
            <button
            type="button"
            onClick={() => setMytxt("Text")}
            >add</button>
        </div>
    )
}

export default Sabmet ;