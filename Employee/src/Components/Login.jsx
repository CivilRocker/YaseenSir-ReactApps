import React,{useState} from "react";
import { Grid,Card,CardContent,TextField,Button } from "@mui/material";
import {Validation} from "../Validation/LoginValidation"


export const Login=()=>{

    const [values,setValues]=useState({
        email:"",
        password:""
    })

    const [error,setError]=useState({})

    const handleChange=(e)=>{
        // console.log("=====>event",e)
        setValues({...values,[e.target.name]:e.target.value})                   //(e)=> synthetic event of input
        // console.log("===>values",values)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()                                                      //it will prevent other cancelable events
        setError(Validation(values))                //checking the values and validating as per Validation function of js.  
        console.log("===>function-Inscope-error",error)
    }
    console.log("===>outofscope-error",error)

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
            <Card style={{width:400,marginLeft:"35%",marginTop:"100px"}}>
                <CardContent align="center">
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <h1>Employee Login</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={handleChange} name="email" type="text" placeholder="Enter email" variant="outlined" fullWidth/>
                            {error?<p style={{color:"red"}}>{error.email}</p>:""}
                            {/* {error && <p style={{color:"red"}}>{error.email}</p>}    <==and operator example */}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={handleChange} name="password" type="password" placeholder="Enter Password" variant="outlined" fullWidth/>
                            {error?<p style={{color:"red"}}>{error.password}</p>:""}
                            {/* {error && <p style={{color:"red"}}>{error.password}</p>}     <===and operator*/}
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" type="submit">Login</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Don't have an account? <a href="">Register here</a></p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </form>
        </React.Fragment>
    )
}