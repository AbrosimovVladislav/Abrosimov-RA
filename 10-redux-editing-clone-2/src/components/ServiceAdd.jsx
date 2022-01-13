import React from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ServiceAdd() {

    const dispatch = useDispatch()
    const {id, name, price, isEditing} = useSelector(store => store.formReducer)

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        dispatch({type: 'CHANGE_FORM_VALUES', payload: {fieldName: name, fieldValue: value}})
    }

    const handleEditCancelling = (evt) => {
        evt.preventDefault()
        dispatch({type:'FINISH_EDITING'})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (isEditing) {
            dispatch({type: 'EDIT_ITEM', payload: {id: id, name: name, price: price}})
            dispatch({type:'FINISH_EDITING'})
        } else {
            dispatch({type: 'ADD_ITEM', payload: {name: name, price: price}})
        }
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
            <button onClick={handleEditCancelling} hidden={!isEditing}>cancel</button>
        </form>
    )
}
