const initialState = {
    items: [
        {id: Math.random(), name: "TEst1", price: 1000},
        {id: Math.random(), name: "TEst2", price: 5000},
        {id: Math.random(), name: "TEst3", price: 200},
    ],
    loadingState: 'idle'
}

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM' :
            const item = action.payload;
            return {...state, items: [...state.items, {...item, id: Math.random()}]}
        case 'DELETE_ITEM' :
            const id = action.payload;
            return {...state, items: state.items.filter((item) => item.id !== id)}
        default :
            return state;
    }
}