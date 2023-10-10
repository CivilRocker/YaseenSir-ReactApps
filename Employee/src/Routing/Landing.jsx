import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Login } from "../Components/Login";
import { Registration } from "../Components/Registration";
import { Forgotpassword } from "../Components/Forgotpassword";



export const Landing=()=>{
    return(
        <React.Fragment>
            <h1>Landing page</h1>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Registration />} />
                <Route path="/forgot" element={<Forgotpassword/>} />               
            </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}