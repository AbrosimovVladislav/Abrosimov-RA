import React from "react";

export default function InputForm({onSubmitHandle, onNameChange, onPriceChange, name, price, editing}) {

    const getButtons = () => {
        if (editing > -1) {
            return <div>
                <button name="save" type="submit">Save</button>
                <button name="cancel" type="submit">Cancel</button>
            </div>
        } else {
            return <button name="save" type="submit">Save</button>
        }
    }

    return (
        <div>
            <form onSubmit={onSubmitHandle}>
                <div className="node_title_input_container">
                    <input id="nameInput" value={name}
                           onChange={onNameChange}/>
                    <input id="priceInput" value={price}
                           onChange={onPriceChange}/>
                    {getButtons()}
                </div>
            </form>
        </div>
    )
}
