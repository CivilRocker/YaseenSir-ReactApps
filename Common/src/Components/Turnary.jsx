import React,{useState} from "react";
import { Grid, TextField, Button, Card } from "@mui/material";
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

export const Turnary = () => {

    const [text,setText]=useState("")
    const [display,setDisplay]=useState("")
    const [color,setColor]=useState("blue")

    const [isLogin,setIsLogin]=useState(false)      //default false will check whether logged in

    const handleShow=()=>{
        setDisplay(text)
        {if(text=="male"){
            setColor("red")}
            else if(text=="female"){
                setColor("green")
            }
            else{
                setColor("yellow")
            }
        }
    }

    
    return (
    <div>
      <h1>Turnary Operator</h1>
      <Grid container spacing={2} sx={{border:1}}>
        <Grid Item xs={2}>
          <TextField fullWidth variant="outlined" onChange={(e)=>setText(e.target.value)}/>
        </Grid>
        <Grid Item xs={2}>
          {/* <Button variant="contained" onClick={()=>setDisplay(text)}>Show</Button> */}
          <Button variant="contained" onClick={handleShow}>Show</Button>
        </Grid>
        <Grid Item xs={2}>
          {/* <Card><h2>{text}</h2></Card> */}
          <Card><h2>{display}</h2></Card>
        </Grid>
        <Grid Item xs={2}>
          {/* {display=="male"?<ManIcon sx={{width:80,height:80}}/>:<WomanIcon sx={{width:80,height:80}}/>} */}
          {/* {text=="male"?<ManIcon sx={{width:80,height:80}}/>:<WomanIcon sx={{width:80,height:80}}/>} */}
          {display=="male"?<Card sx={{width:80,height:80,bgcolor:"red"}}/>:<Card sx={{width:80,height:80,bgcolor:"yellow"}}/>}         
        </Grid>
        <Grid Item xs={2}>
            <Card sx={{width:80,height:80,bgcolor:color}}/>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{marginTop:5,border:1}}>
        <Grid item xs={2}><Button variant="contained" onClick={()=>setIsLogin(true)}>Logout</Button></Grid>
        <Grid item xs={2}><Button variant="contained" onClick={()=>setIsLogin(!isLogin)}>Logout/Toggle</Button></Grid>
        <Grid item xs={2}><Card><h1 style={{display: isLogin?"block":"none"}}>User</h1></Card></Grid>
        <Grid item xs={2}><Card><h1 style={{color: isLogin?"red":"blue"}}>Toggle</h1></Card></Grid>
        <Grid item xs={2}><Card><Button variant="contained">{isLogin?"Logout":"Loggin"}</Button></Card></Grid>
        <Grid item xs={2}><Card><Button variant="contained" onClick={()=>setIsLogin(!isLogin)}>{isLogin?"ON":"OFF"}</Button></Card></Grid>
      </Grid>

        {/* {isLogin?<img src=""/>:<img src=""/> } */}
        {/* {isLogin?<Button variant="contained" color="error">Logout</Button>:<Button variant="contained" color="success">Login</Button>} */}


    </div>
  );
};
