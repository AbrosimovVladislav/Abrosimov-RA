import React from "react";
import {addNote} from "../actions/actionCreators";
import {useDispatch, useSelector} from "react-redux";

export default function Form({
                                 form,
                                 editing,
                                 handleTextChange,
                                 handlePriceChange,
                                 onSaveHandler,
                                 onUpdateHandler,
                                 onEditCancelHandler
                             }) {

    const state= useSelector(state => state);
    const selectedNote= useSelector(state => state.formNoteReducer);
    const dispatch = useDispatch();

    const onSaveHandlerRedux = (evt) => {
        evt.preventDefault();
        console.log("onSaveHandlerRedux")
        console.log(selectedNote);
        dispatch(addNote(selectedNote.text, selectedNote.price))
    }

    return (
        <div>
            <form onSubmit={editing ? onUpdateHandler : onSaveHandlerRedux}>
                <input name="text" value={form.text}
                       onChange={handleTextChange}/>
                <input name="price" value={form.price}
                       onChange={handlePriceChange}/>
                <button type="submit">Save</button>
                <button hidden={!editing} onClick={onEditCancelHandler}>Cancel</button>
            </form>
        </div>
    )
}
