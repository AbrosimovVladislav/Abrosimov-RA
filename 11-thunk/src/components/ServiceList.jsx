import React from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ServiceList() {
    const dispatch = useDispatch()
    const items = useSelector((store) => store.listReducer.items)

    const handleRemove = (id) => {
        dispatch({type: 'DELETE_ITEM', payload: id})
    }

    const handleEdit = (item) => {
        dispatch({type: 'START_EDITING', payload: item})
    }

    return (
        <ul>
            {items &&
            items.map(item => (
                <li key={item.id} style={{marginTop: 10}}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleRemove(item.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}
