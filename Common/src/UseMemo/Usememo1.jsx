import React,{useState,useMemo} from "react"
import { Button, Grid, TextField } from "@mui/material"


export const Usememo1=()=>{

    const [count,setCount]=useState(0)
    const [text,setText]=useState("")
    const [list,setList]=useState([])

    const noRender=useMemo(()=>{
        return(                                         //if single element use that or else multiple elements use div
            <h1>{count}</h1>
        )

    },[list])
    
    const handleAdd=()=>{
        setList([...list,text])   
        // setList([text,...list])   
        setText("")     
    }
    
    return(
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <h1>Counter: {count}</h1>
                    <h3>UseMemo: {noRender}</h3>
                    <Button variant="contained" onClick={()=>setCount(count+1)}>Increment</Button>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
            <Grid container mt={5}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <TextField value={text} variant="outlined" onChange={(e)=>setText(e.target.value)}/>
                    <Button variant="contained" onClick={handleAdd}>Add</Button><h3>UseMemo: {noRender}</h3>
                        {
                            list.map((item,ind)=>{
                                return(
                                    <div>
                                        <h3>{ind+1} {item}</h3>
                                    </div>
                                )
                            }                            
                            )
                        }
                </Grid>
                <Grid item xs={4}></Grid>                
            </Grid>

        </div>
    )
}