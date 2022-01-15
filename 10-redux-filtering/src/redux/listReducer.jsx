const initialState = {
    items: [
        {id: Math.random(), name: "TEst1", price: 1000},
        {id: Math.random(), name: "TEst2", price: 5000},
        {id: Math.random(), name: "TEst3", price: 200},
    ],
    filteredItems: [
        {id: Math.random(), name: "TEst1", price: 1000},
        {id: Math.random(), name: "TEst2", price: 5000},
        {id: Math.random(), name: "TEst3", price: 200},
    ],
    filter: ''
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
            return resultState;
        case 'FILTER' :
            const filterValue = action.payload;
            console.log("FILTERING - newValue = " + filterValue)
            let arr2 = [...state.items]
            arr2 = arr2.filter(item => item.name.includes(filterValue))
            return {...state, filteredItems: arr2, filter: filterValue}
        case 'SYNC_FILTERED_ITEMS' :
            return {...state, filteredItems: [...state.items]}
        default :
            return state;
    }
}