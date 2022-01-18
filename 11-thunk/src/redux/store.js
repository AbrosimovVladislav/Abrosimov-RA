import listReducer from "./listReducer";
import formReducer from "./formReducer";
import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({
    listReducer,
    formReducer
})

const store = createStore(rootReducer)

export default store