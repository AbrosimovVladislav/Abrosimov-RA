import {ADD_NOTE} from "../actions/actionTypes";

export function addNote(name, price) {
    return ({type: ADD_NOTE, payload: {name, price}});
}