import React from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ServiceList() {
    const dispatch = useDispatch()
    const items = useSelector((store) => store.listReducer.items)

    const handleRemove = (id) => {
        dispatch({type:'DELETE_ITEM',payload:id})
    }
    return (
        <ul>
            {items &&
            items.map(item => (
                <li key={item.id} style={{marginTop: 10}}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <button onClick={() => handleRemove(item.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}
