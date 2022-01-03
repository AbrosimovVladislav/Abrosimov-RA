import React from "react";

export default function Note({note,onEditHandler}) {

    return (
        <div>
            <p>{note.text} {note.price} <button id={note.id} onClick={onEditHandler}>Edit</button> <button>X</button></p>
        </div>
    )
}
