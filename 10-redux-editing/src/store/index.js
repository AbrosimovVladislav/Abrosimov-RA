import {combineReducers, createStore} from "redux";
import noteListReducer from "../reducers/NoteListReducer";
import formNoteReducer from "../reducers/FormNoteReducer";

const reducer = combineReducers({
    noteListReducer: noteListReducer,
    formNoteReducer: formNoteReducer
})

const store = createStore(reducer)

export default store;