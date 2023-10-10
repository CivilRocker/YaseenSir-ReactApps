import React,{useState,useEffect} from "react";
import { Grid,TextField,Button,Card,CardContent } from "@mui/material";


export const EditSaff=()=>{
    const [name,setName]=useState("")
    const [department,setDepartment]=useState("")
    const [experience,setExperience]=useState("")
    

    

    return(
        <React.Fragment>
            <Card>
                <CardContent> 
                    <h1>Edit Students</h1>            
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <TextField type="text" onChange={(e)=>setName(e.target.value)} value={name} variant="outlined" fullWidth placeholder="Enter Name"/>
                    </Grid>
                    <Grid item xs={3}>
                    <TextField type="text" onChange={(e)=>setDepartment(e.target.value)} value={department} variant="outlined" fullWidth placeholder="Enter Department"/>
                    </Grid>
                    <Grid item xs={3}>
                    <TextField type="text" onChange={(e)=>setExperience(e.target.value)} value={experience} variant="outlined" fullWidth placeholder="Experience"/>
                    </Grid>
                    <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success" sx={{height:55}}>Submit</Button>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>

        </React.Fragment>
    )
}