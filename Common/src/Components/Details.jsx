import React from "react";
import {TextField,Grid,Button} from "@mui/material"
import { useState } from "react";

export const Details=()=>{
    const [fname,setFname]=useState("")
    const [mname,setMname]=useState("")
    const [lname,setLname]=useState("")
    const [dob,setDob]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [officaddress,setOfficaddress]=useState("")

    const [alldetails,setAlldetails]=useState({})

    // const handleinput=(e)=>{
    //     console.log(e)
    // }
    
    // const handlePass=(e)=>{
    //     console.log(e)
    // }

    const handleSave=()=>{
        setAlldetails({fname,mname,lname,dob,email,phone,address,officaddress})
    }
    // console.log("===>",alldetails)


    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                {/* <h1>{fname}</h1> */}
                    <TextField  varaint="outlined" label="First Name" fullWidth onChange={(e)=>setFname(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField  varaint="outlined" label="Middle Name" fullWidth onChange={(e)=>setMname(e.target.value)}/>
                </Grid>
                 <Grid item xs={4}>
                    <TextField varaint="outlined" label="Last Name" fullWidth onChange={(e)=>setLname(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField varaint="outlined" label="Date Of Birth" fullWidth onChange={(e)=>setDob(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField varaint="outlined" label="Email" fullWidth onChange={(e)=>setEmail(e.target.value)}/>
                </Grid>
                 <Grid item xs={4}>
                    <TextField varaint="outlined" label="Phone Number" fullWidth onChange={(e)=>setPhone(e.target.value)}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField varaint="outlined" label="Permanent Address" fullWidth onChange={(e)=>setAddress(e.target.value)}/>
                </Grid>
                 <Grid item xs={6}>
                    <TextField varaint="outlined" label="Official Address" fullWidth onChange={(e)=>setOfficaddress(e.target.value)}/>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success" onClick={()=>handleSave()}>Save</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="error">Cancel</Button>
                </Grid>
                <Grid item xs={3}></Grid>
                </Grid>

                {/* <input type="text" onChange={(e)=>handleinput(e)} />

                <input type="password" onChange={(e)=>handlePass(e.target.value)}/> */}

                <br/><br/>
                <h1>Your Details:-</h1>
                <table border={"2px"}>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th> Last Name</th>
                        <th>Date of Birth</th>
                        <th>Email ID</th>
                        <th>Mobile Number</th>
                        <th>Permanent Address</th>
                        <th>Official Address</th>
                    </tr>
                    <tr>
                        <td>{alldetails.fname}</td>
                        <td>{alldetails.mname}</td>
                        <td>{alldetails.lname}</td>
                        <td>{alldetails.dob}</td>
                        <td>{alldetails.email}</td>
                        <td>{alldetails.phone}</td>
                        <td>{alldetails.address}</td>
                        <td>{alldetails.officaddress}</td>
                    </tr>
                </table>
                        
        </div>
    )
}