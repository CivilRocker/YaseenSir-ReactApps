import * as Yup from "yup"                      //"yup"==>string represents the library, *==> all functions of yup


export const Registerschema=Yup.object(
    {
        name:Yup.string().min(2).max(10).required("Please enter your name"), 
        email:Yup.string().email().required("Please enter your email"),
        phone:Yup.string().min(5).max(10).required("Please enter your phone number"),
        username:Yup.string().min(2).max(10).required("Please enter your username"),
        password:Yup.string().min(2).max(10).required("Please enter your password"),
        confirmpassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match")
    }
)