import {ADD_NOTE, CHANGE_FORM_NOTE} from "../actions/actionTypes";

const initialState = {
    id: null,
    text: "",
    price: ""
};

export default function formNoteReducer(state = initialState, action) {
    switch (action.type) {

        case CHANGE_FORM_NOTE:
            console.log("CHANGE_FORM_NOTE");
            const {text, price} = action.payload;
            return {id: Math.random(), text: text, price: price}
        default :
            return state;

    }
}