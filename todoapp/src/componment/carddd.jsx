import { useState } from "react"

const useee = ()=> {
    
    const[textTransform, setTextTransform] = useState("capitalize");
    const [sizee , setsizee] = useState("100px")
    const[colore , setcolore]=useState("green")
    const [backgrounde , setbackground]= useState("Orange")
    return (
        <>
            <section >
                <h6>SCREEN</h6>
                <div style={{
                    border: 'solid 1px green',
                    textAlign: 'center',
                    textTransform:textTransform ,
                    fontSize : sizee ,
                    color : colore ,
                    background : backgrounde 
                }}>
                    <h1>abc abc</h1>
                </div>
            </section>
            <section>
                <h6>UPPERCASE / LOWERCASE</h6>
                <button onClick={()=>{
                    setTextTransform('uppercase')
                }}>To UPPERCASE</button>
                <button onClick={
                    ()=>{
                        setTextTransform('lowercase')
                    }
                }
              >To lowercase</button>
            </section>
            <section>
                <div style={{

                }}>
                    <h1>Colore</h1>
                    <button onClick={()=>{
                        setcolore("red")
                    }}>red</button> 
                    <button onClick={()=>{
                        setcolore("blue")
                    }}>blue</button> 
                    <button onClick={()=>{
                        setcolore("lightgray")
                    }}>lightgray</button> 
                </div>
                
            </section>
            <section>
                <p> font size </p>
                <button onClick={()=>{
                    setsizee("15px")
                }}>15px</button>
                <button onClick={()=>{
                    setsizee("20px")
                }}>20px</button>
                <button onClick={()=>{
                    setsizee("30px")
                }}>30px</button>
            </section>

            <section>
                <p>background color</p>
                <button onClick={()=>{setbackground("Orange")}}>Orange</button>
                <button  onClick={()=>{setbackground("DodgerBlue")}}>DodgerBlue</button>
                <button  onClick={()=>{setbackground("Gray")}}>Gray</button>
                <button  onClick={()=>{setbackground("SlateBlue")}}>SlateBlue</button>
                <button  onClick={()=>{setbackground("blue")}}>blue</button>
                <button  onClick={()=>{setbackground("Violet")}}>Violet</button>
                <button  onClick={()=>{setbackground("LightGray")}}>LightGray</button>
                
            </section>
        </>
    )
};

export default useee ;