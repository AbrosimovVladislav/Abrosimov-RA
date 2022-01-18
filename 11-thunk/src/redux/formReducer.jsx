const initialState = {id: '', name: '', price: 0, isEditing: false}

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_FORM_VALUES' :
            const {fieldName, fieldValue} = action.payload;
            return {...state, [fieldName]: fieldValue};
        case 'START_EDITING' :
            const {id, name, price} = action.payload;
            return {id: id, name: name, price: price, isEditing: true};
        case 'FINISH_EDITING' :
            return initialState;
        default :
            return state;
    }
}