import React from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { border, borderRadius } from "@mui/system";

export const Counterapp=()=>{
    const [counter,setCounter]=useState(0)

    const handleInc=()=>{
        setCounter(counter+1)
        // alert("Hi")
    }

    const handleDec=()=>{
        setCounter(counter-1)
    }


     return(
        <React.Fragment>
           {/*  <Grid container spacing={4} align="center">
            
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
            <h1>{counter}</h1>
            <Button variant="contained" onClick={()=>setCounter (counter + 1)}>Increment</Button>
            <Button variant="contained" onClick={()=>setCounter (counter - 1)} disabled={!(counter>0)}>Decrement</Button>
            </Grid>
            <Grid item xs={4}></Grid>
            </Grid> */}



            <Grid container spacing={3}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Card sx={{marginTop:15,bgcolor:"beige"}}>
                        <CardContent align="center" style={{border:"2px solid black"}}>
                            <h1 >Counter App</h1>
                            <h1>Count={counter}</h1>
                            <Grid container spacing={10}>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={4}><Button variant="contained" color="success" onClick={handleInc}>Increment</Button></Grid>
                                <Grid item xs={4}><Button variant="contained" color="error" onClick={handleDec} disabled={!(counter>0)}>Decrement</Button> </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </React.Fragment>

     )
}