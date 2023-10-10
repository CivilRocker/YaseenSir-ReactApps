import {createStore,combineReducers} from "redux"
import {studentsReducer} from "./Reducer/studentsReducer"
import { staffReducer } from "./Reducer/staffReducer"
import {UsersReducer} from "./Reducer/UsersReducer"


//createstore is parameterised function==>createstore accepts two parameters(combineReducers,window.__Redux dev tools)
//strike in createstore represents deprecated.
export const configureStore = () => {
    const store = createStore(combineReducers({
            studentsReducer,staffReducer,UsersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        return store
}