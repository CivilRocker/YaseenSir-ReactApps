import React,{useState} from "react";
import { Grid,TextField,Button,Card,CardContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



export const AddStaff=()=>{
    const [name,setName]=useState("")
    const [department,setDepartment]=useState("")
    const [experience,setExperience]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    

    const handleSave=()=>{
        dispatch({type:"Add_item",payload:{name,department,experience}})    
        setTimeout(()=>{
            navigate("/staff")
        },2000)           
    }

    return(
        <React.Fragment>
            <Card>
                <CardContent> 
                    <h1>Add Staff Details</h1>            
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <TextField onChange={(e)=>setName(e.target.value)} variant="outlined" fullWidth placeholder="Enter Name"/>
                    </Grid>
                    <Grid item xs={3}>
                    <TextField onChange={(e)=>setDepartment(e.target.value)} variant="outlined" fullWidth placeholder="Enter Department"/>
                    </Grid>
                    <Grid item xs={3}>
                    <TextField onChange={(e)=>setExperience(e.target.value)} variant="outlined" fullWidth placeholder="Experience"/>
                    </Grid>
                    <Grid item xs={3}>
                    <Button onClick={handleSave} variant="contained" fullWidth color="success" sx={{height:55}}>Submit</Button>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}