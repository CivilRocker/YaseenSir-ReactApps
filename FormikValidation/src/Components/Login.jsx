import { Button, Card, CardContent, TextField, Grid,Alert } from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";
import { validation } from "../Validation/LoginValidation";
import { useNavigate } from "react-router-dom";
import axios from "axios"



export const Login = () => {
  const[msg,setMsg]=useState("")
  const navigate=useNavigate()

  let a = "";
  const [error, setError] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log("e===>",e)
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log("values===>",values)
  };

  const handleSubmit =async (e) => {
    const result=await axios.post("http://localhost:2525/login",values)
    if (result.data.msg=="ok"){                             //becuase json{}==> is coming from AuthAPI
      navigate("/home")
      localStorage.setItem("token",result.data.token)
    }else {
      // setMsg(result.data)
      setMsg(result.data.msg)
    }
    e.preventDefault();
    setError(validation(values));
    // navigate("/home")
  };
  //console.log(error, "===>");

  useEffect(()=>{
    const token=localStorage.getItem("token")
    token && navigate("/home")    
  },[])



  return (
    <React.Fragment>
      <form >
        <Card style={{ width: "300px", marginLeft: "35%", marginTop: "100px" }}>
          <CardContent align="center">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1>Latest Login Form</h1>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />

                {error && <p style={{ color: "red" }}>{error.email}</p>}
                {/* {error?<p style={{color:"red"}}>{error.email}</p>:""} */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChange}
                />
                {error && <p style={{ color: "red" }}>{error.password}</p>}
              </Grid>
              <Grid item xs={12}>
                {/* <Button variant="contained" type="submit"> */}
                <Button variant="contained" onClick={handleSubmit}>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <p>
                  Don't have an account? <a href="">Register here</a>
                </p>
              </Grid>
              <Grid item xs={12}>
                {msg!=="" && <Alert severity="error">{msg}</Alert>}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  );
};
