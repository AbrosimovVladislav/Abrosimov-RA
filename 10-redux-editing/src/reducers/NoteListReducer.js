import {ADD_NOTE} from "../actions/actionTypes";

const initialState = [
    {id: Math.random(), text: "Pip", price: "2100"},
    {id: Math.random(), text: "Pop", price: "300"},
    {id: Math.random(), text: "Pep", price: "450"}
];

export default function noteListReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_NOTE:
            console.log("ADD_NOTE");
        default :
            return state;

    }
}