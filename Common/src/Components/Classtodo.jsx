import React,{Component} from "react";
import { Grid,TextField,Button } from "@mui/material";

export class Classtodo extends Component{

    state={
        text:"",
        list:[]
    }

    handleAdd=()=>{
        // console.log("===>",this.state.text)
        this.setState({list:[...this.state.list,this.state.text]})
        // console.log("===>",this.state.list)
    }

    handleDel=(ind)=>{
        const result= this.state.list.filter((item,i)=>i!==ind)
        // alert("")
        // console.log("===>result",result)
        this.setState({list:result})
    }

    render(){
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>
                        <TextField variant="outlined" fullWidth label="Enter Items to do" onChange={(e)=>this.setState({text:e.target.value})}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" fullWidth onClick={this.handleAdd}>Add</Button>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                {this.state.list.map((item,ind)=>{
                    return(
                        <div>
                            {/* {console.log("===>item",item)} */}
                            <h1>{ind+1}: {item}</h1>
                            <button onClick={()=>this.handleDel(ind)}>Delete</button>
                        </div>
                    )
                })}

            </div>
        )
    }
}