import { Button } from "@mui/material";
import React,{useState} from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";


export const StudentsList=()=>{
    const [data,setData]=useState([])
    const dispatch=useDispatch()                                    //giving authority of function to dispatch

    // const result=useSelector((state)=>state)                     //first check the console ,see where is data.
    // console.log(result)    
    const result=useSelector((state)=>state.studentsReducer.studentsData)    
    // console.log("====>",result)
    
    useEffect(()=>{
        setData(result)                                             //dispatch(=action)
    },[])

    useEffect(()=>{
        setData(result)
    },[result])                                                     //whenever result is updated, it is mounted

    const handleDelete=(ind)=>{
        dispatch({type:"Delete_Item",payload:ind})                 //dispatching an action
    }

    return(
        <div>
            <h1>Students List</h1>
            {data.map((item,ind)=>{
                return(
                    <div style={{border:"2px solid black",width:"350px",backgroundColor:"aqua",marginLeft:"5px",boxShadow:"2px 2px 2px black",float:"left"}}>
                        <h1>Name:- {item.name}</h1>
                        <h1>Age:- {item.age}</h1>
                        <h1>City:-{item.city}</h1>
                        <Button variant="contained" onClick={()=>handleDelete(ind)} >Delete</Button>
                        {/* need to write ()=> when passing argument */}
                    </div>
                )
            })}
        </div>
    )

   

   
}