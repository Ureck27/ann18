export default function ShowInputValue(){
   


    return (
        <>
         <h1>{screenvalue}</h1>
         <input type="text"
          onChange={handelInput} />
        </>
    )
}