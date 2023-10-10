import React from "react";
import { Card,CardContent,Grid,TextField,Button } from "@mui/material";


export const Forgotpassword=()=>{
    return(
        <React.Fragment>
            <Card style={{width:400,marginLeft:"35%",marginTop:"100px"}}>
                <CardContent align="center">
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <h1>Forgot Password</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="email" placeholder="Enter Email Id" variant="outlined" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="text" placeholder="Enter Username" variant="outlined" fullWidth/>
                        </Grid>                        
                        <Grid item xs={12}>
                            <Button variant="contained">Reset Password</Button>
                        </Grid>                        
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}