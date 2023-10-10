import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";




export const StaffList=()=>{
    const [data,setData]=useState([])
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const result=useSelector((state)=>state.staffReducer.staffData)         //useSelector is used to get data from redux.
    // console.log("====>",result)
    
    useEffect(()=>{
        setData(result)
    },[])


    useEffect(()=>{
        setData(result)
    },[result])

    const handleDelete=(ind)=>{
        dispatch({type:"Delete_item",payload:ind})
    }

    const handleEdit=(item,ind)=>{
        navigate("/editstaff")        
    }

    return(
        <div>
            <h1>StaffList Data</h1>
            {data.map((item,ind)=>{
                return(
                    <div style={{border:"2px solid black",width:"350px",backgroundColor:"aqua",marginLeft:"5px",boxShadow:"2px 2px 2px black",float:"left"}}>
                        <h1>Name:- {item.name}</h1>
                        <h1>Department:- {item.department}</h1>
                        <h1>Experience:-{item.experience}</h1>
                        <Button variant="contained" onClick={()=>handleDelete(ind)}>Delete</Button>
                        <Button onClick={()=>handleEdit(item,ind)} variant="contained"> Edit</Button>
                    </div>
                )
            })}
        </div>
    )

   

   
}