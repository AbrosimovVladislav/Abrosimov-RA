const initialState = {name: '', price: 0}

export default function formReducer(state=initialState, action) {
    switch (action.type) {
        case 'CHANGE_FORM_VALUES' :
            const {fieldName, fieldValue} = action.payload;
            return {...state, [fieldName]: fieldValue};
        default :
            return state;
    }
}