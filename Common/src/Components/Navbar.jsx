import React from "react";
import { Link } from "react-router-dom";
import { Grid,Card,CardContent } from "@mui/material";



export const Navbar=()=>{
    return(
        <div>
            <Grid container spacing={2} align="center">
                <Grid item xs={2}>
                    <Card>
                    <Link to="/ "> <h3>Home</h3></Link>
                    </Card>                    
                </Grid>
                <Grid item xs={2}>
                    <Card>
                    <Link to="/todo "><h3>Todo list</h3></Link>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                          <Link to="/counterapp "><h3>Counterapp</h3> </Link>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                          <Link to="/api "><h3>Api/Axios</h3> </Link>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                          <Link to="/turnary "><h3>Turnary Operator</h3> </Link>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                          <Link to="/class "><h3>Classcomponent</h3> </Link>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                          <Link to="/classtodo "><h3>Classtodo</h3> </Link>
                    </Card>
                </Grid>                
                <Grid item xs={2}>
                    <Card>
                          <Link to="/students "><h3>StudentsList</h3> </Link>
                    </Card>
                </Grid>                
                <Grid item xs={2}>
                    <Card>
                          <Link to="/staff "><h3>StaffList</h3> </Link>
                    </Card>
                </Grid> 
                <Grid item xs={2}>
                    <Card>
                          <Link to="/addstaff "><h3>AddStaff</h3> </Link>
                    </Card>
                </Grid> 
                <Grid item xs={2}>
                    <Card>
                          <Link to="/editstaff "><h3>EditStaff</h3> </Link>
                    </Card>
                </Grid> 
                <Grid item xs={2}>
                    <Card>
                          <Link to="/useref"><h3>UseRef</h3> </Link>
                    </Card>
                </Grid> 
                <Grid item xs={2}>
                    <Card>
                          <Link to="/usememo"><h3>UseMemo</h3> </Link>
                    </Card>
                </Grid> 
                               
            </Grid>            
            {/* <a href="/todo">Todo List</a> */}
            
            
          

        </div>
    )
}