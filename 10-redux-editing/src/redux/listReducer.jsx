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
            const item = action.payload
            return {...state, items: [...state.items, {...item, id: Math.random()}]}
        case 'DELETE_ITEM' :
            const currentId = action.payload
            return {...state, items: state.items.filter((item) => item.id !== currentId)}
        case 'EDIT_ITEM' :
            const {id, name, price} = action.payload
            let editingItem = state.items.find(item => item.id == id)
            const editingItemIndex = state.items.indexOf(editingItem)
            const arr = [...state.items]
            arr[editingItemIndex] = {id: id, name: name, price: price}
            const resultState = {...state, items: arr}
            console.log(resultState)
            return resultState;
        default :
            return state;
    }
}