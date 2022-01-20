const initialState = {
    item: {
        id: null,
        name: "",
        price: 0,
        content: ""
    },
    getItemByIdUrl: "http://localhost:7070/api/services/",
    saveItemUrl: "http://localhost:7070/api/services",
    itemLoadingStatus: "idle"
};

export default function serviceItemReducer(state = initialState, action) {
    switch (action.type) {
        case "PUT_ITEM" :
            const item = action.payload;
            return {...state, item: item};
        case "SET_ITEM_FIELD" :
            const {fieldName, fieldValue} = action.payload;
            return {...state, item: {...state.item, [fieldName]: fieldValue}};
        case 'SET_LOADING_ITEM_STATUS' :
            const status = action.payload;
            return {...state, itemLoadingStatus: status}
        default :
            return state;
    }
}
