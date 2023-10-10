import React from "react";
import { Grid,Card,CardContent,TextField,Button } from "@mui/material";
import { useFormik } from "formik";
import {Registerschema} from "../Validation/yupValidation"


export const Registration=()=>{

    const initialValues={
        name:"",
        email:"",
        phone:"",
        username:"",
        password:"",
        confirmpassword:""
    }
    const {values,handleSubmit,errors,handleChange}=useFormik({                 //Formik=useFormik==> replaced Formik with its functionalities
        initialValues:initialValues,
        validationSchema:Registerschema,
        onSubmit:(values)=>{console.log("formikvalues==>",values)}
    })
    console.log("===>YupError",errors)



    return(
        <React.Fragment>        
            <form onSubmit={handleSubmit}>    
            <Card style={{width:"400px",marginLeft:"35%",marginTop:"100px"}}>
                <CardContent align="center">
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <h1>Employee Registeration</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="name" value={values.name} onChange={handleChange} type="text" placeholder="Enter Name" variant="outlined" fullWidth/>
                            {<p style={{color:"red"}} >{errors.name}</p> }
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="email" value={values.email} onChange={handleChange} type="email" placeholder="Enter Email Id" variant="outlined" fullWidth/>
                            {<p style={{color:"red"}} >{errors.email}</p> }
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="phone" value={values.phone} onChange={handleChange} type="number" placeholder="Enter Phone Number" variant="outlined" fullWidth/>
                            {<p style={{color:"red"}} >{errors.phone}</p> }
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="username" value={values.username} onChange={handleChange} type="ptext" placeholder="Enter Username " variant="outlined" fullWidth/>
                            {<p style={{color:"red"}} >{errors.username}</p> }
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="password" value={values.password} onChange={handleChange} type="password" placeholder="Enter Password " variant="outlined" fullWidth/>
                            {<p style={{color:"red"}} >{errors.password}</p> }
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="confirmpassword" value={values.confirmpassword} onChange={handleChange} type="password" placeholder="Confirm Password " variant="outlined" fullWidth/>
                            {<p style={{color:"red"}} >{errors.confirmpassword}</p> }
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" type="submit">Register</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Already have an account? <a href="">Login</a></p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </form>
        </React.Fragment>
    )
}