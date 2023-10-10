export const Validation=(values)=>{
    console.log("===>values",values)
    let errors={}
    if(!values.email){
        errors.email="Please enter email"
    }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="Enter valid email"
    }

    if (!values.password){
        errors.password="Please enter password"
    }else if(values.password.length<3){
        errors.password="Password must be minimum 3 characters "
    }else if(values.password.length>10){
        errors.password="Password maximum of 10 characters "
    }
    
    return errors
}