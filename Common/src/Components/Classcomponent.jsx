import React,{Component} from "react";
import { Button } from "@mui/material";


export class Classcomponent extends Component{                                       
                                                            
    state={                                                 //{} class componenet starts with object.
        count:0,                                            // this refers to object{}, this.state=>refer state as key of object.                  
        count2:10,
        text1:"Hello"
    }
    handleAdd=()=>{
        // alert("")
        this.setState({count:this.state.count+1})            //=>everything is stored as key:value pair in object of class component.                                                            
    }
    handleAdd2=()=>{                                        //{this.handleAdd}=>handleAdd is key in "this" object.
        // alert("")
        this.setState({count2:this.state.count2+5})
    }

    handleDec=()=>{
        this.setState({count:this.state.count-1,count2:this.state.count2-1,text1:this.state.text1="Bye"})   
    }

    componentDidMount(){
        // console.log("Hello i got Mount")
        this.setState({count2:this.state.count2+10})
    }


    render() {
        return(
            <div>
                <h1>This is Classcomponent</h1>
                <h1>Counter: {this.state.count}</h1>
                <Button variant="contained" onClick={this.handleAdd}>Increment</Button>
                <h1>Counter: {this.state.count2}</h1>
                <Button variant="contained" onClick={this.handleAdd2}>Inc</Button>
                <h1>Message: {this.state.text1}</h1>                
                <Button variant="contained" onClick={this.handleDec}>Decrement</Button>


            </div>

        )
       
    }}

