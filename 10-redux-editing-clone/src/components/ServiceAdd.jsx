import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ServiceAdd({handleAdd}) {

    const dispatch = useDispatch()
    const {name, price} = useSelector(store => store.formReducer)

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        dispatch({type: 'CHANGE_FORM_VALUES', payload: {fieldName: name, fieldValue: value}})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        dispatch({type: 'ADD_ITEM', payload: {name: name, price: price}})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                onChange={handleChange}
                value={name}
            />
            <input
                name="price"
                onChange={handleChange}
                value={price}
            />
            <button type="submit">save</button>
        </form>
    )
}
