const initialState={
    studentsData:[                              //like json object=similar to result.data array.
        {name:"Raj", age:20, city:"Nanded"},
        {name:"Sam", age:23, city:"Pune"},
        {name:"Seema", age:20, city:"Pune"},
        {name:"Seema", age:20, city:"Pune"}
    ]
}



export const studentsReducer=(state=initialState,action)=>{
    if (action.type === "Delete_Item"){
        // console.log("action",action.payload)
        // console.log("action",action.type)                                   //here initialState=state==> thats why state.studentsData in nextline
        const result=state.studentsData.filter((elem,i)=>i!=action.payload)         //action.payload has index number of clicked button=>from jsx file
        //students data is in initialstate and initialstate is state.
        // console.log("===>result",result)
        return {...state,studentsData:result}
    }
    return state
}