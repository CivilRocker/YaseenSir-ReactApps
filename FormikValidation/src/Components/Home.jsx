import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Button,Grid, } from "@mui/material";



export const Home=()=>{
    const navigate=useNavigate()

    const handleLogOut=()=>{
        localStorage.removeItem("token")
        navigate("/")
    }

    useEffect(()=>{
        const token=localStorage.getItem("token")
        !token && navigate("/")    
      },[])

    return(
        <React.Fragment>
            <h1>Home page</h1>
            <Grid container spacing={3}>
                <Grid item xs={2}><Button variant="contained" color="success" onClick={()=>navigate("/")}>Login</Button></Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={2}><Button variant="contained" color="error" onClick={handleLogOut}>Logout</Button></Grid>
            </Grid>
        </React.Fragment>
    )
}