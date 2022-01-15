import React from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ServiceFilter() {

    const dispatch = useDispatch()
    const {filter} = useSelector(store => store.listReducer)

    const handleFilter = (evt) => {
        const {value} = evt.target;
        dispatch({type: 'FILTER', payload: value})
    }

    return (
        <div>
            <h3>Filter</h3>
        <input
            name="filter"
            onChange={handleFilter}
            value={filter}
        />
        </div>
    )
}
