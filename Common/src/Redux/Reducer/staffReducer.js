const initialState={
    staffData:[
        {name:"Amer",
        department:"Science",
        experience:"5 Years"},
        {name:"Akshay",
        department:"Biology",
        experience:"3 Years"},
        {name:"Deepali",
        department:"Maths",
        experience:"5 Years"},
    ]
}

export const staffReducer=(state=initialState,action)=>{
    if (action.type ==="Add_item"){
        return{
            ...state,staffData:[...state.staffData,action.payload]
        }
    }
   
    if (action.type === "Delete_item"){
        // console.log("==>action",action.payload) 
        // console.log("===>action",action.type)    
        const result=state.staffData.filter((elem,i)=>i!==action.payload)
        // console.log("===>result",result)
        return {...state,staffData:result}
    }
    return state

}