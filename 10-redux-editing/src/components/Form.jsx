import React from "react";

export default function Form({
                                 form,
                                 editing,
                                 handleTextChange,
                                 handlePriceChange,
                                 onSaveHandler,
                                 onUpdateHandler,
                                 onEditCancelHandler
                             }) {

    return (
        <div>
            <form onSubmit={editing ? onUpdateHandler : onSaveHandler}>
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
