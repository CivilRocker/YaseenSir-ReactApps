import React,{useState} from "react";
import { Button,Card, CardContent, Grid, TextField } from "@mui/material";

export const UserAdd = () => {
    const [fname,setFname]=useState("")
    const [mname,setMname]=useState("")
    const [lname,setLname]=useState("")
    const [dob,setDob]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [office,setOffice]=useState("")

    const [alldata,setAlldata]=useState([])
            
    const handleAdd=()=>{
        setAlldata([...alldata,{fname,mname,lname,dob,email,phone,address,office}])             //spread operator will add to object in given key value pair

    }
    console.log([alldata])
    
    /* console.log(fname)
    console.log(mname)
    console.log(lname)
    console.log(dob)
    console.log(email)
    console.log(phone)
    console.log(address)
    console.log(office) */
    
  return (
    <div>
      <h1>Enter UserAdd</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField fullWidth variant="outlined" label="First Name" onChange={(e)=>setFname(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth variant="outlined" label="Middle Name" onChange={(e)=>setMname(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth variant="outlined" label="Last Name" onChange={(e)=>setLname(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth variant="outlined" label="D.O.B" onChange={(e)=>setDob(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth variant="outlined" label="Email Id" onChange={(e)=>setEmail(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth variant="outlined" label="Mobile Number" onChange={(e)=>setPhone(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth variant="outlined" label="Address" onChange={(e)=>setAddress(e.target.value)}/>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth variant="outlined" label="Permanent official" onChange={(e)=>setOffice(e.target.value)}/>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="contained" color="success" onClick={handleAdd}>
            Save
          </Button>{" "}
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant="contained" color="error">
            Cancel
          </Button>{" "}
        </Grid>
        <Grid container spacing={3} align="center">
            {alldata.map((item)=>{
                return(
                    <Grid item xs={4}>
                        <Card sx={{bgcolor:"aqua"}}>
                            <CardContent >
                                <h2>
                                    FullName:{`${item.fname} ${item.mname} ${item.lname}`}
                                </h2>
                                <h2>D.O.B</h2>
                                <h4>Email</h4>
                                <h4>Phone</h4>
                                <h4>Address</h4>
                                <h4>Office Add</h4>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
      </Grid>
    </div>
  );
};