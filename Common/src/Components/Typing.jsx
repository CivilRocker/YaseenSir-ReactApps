import React, { useEffect,useState } from "react";

export const Typing=()=>{

    const [clr,setClr]=useState("green")
    const [text,setText]=useState("")

    useEffect(()=>{
        // alert("")
        setText("red")
    },[text])

    return(
        <>
       <input type="text" onChange={(e)=>setText(e.target.value)}/>
       <h1>{text}</h1>
        
        <h1>{clr}</h1>
        <button onClick={()=>setClr("red")}>Change Color</button>
        </>
    )
}
