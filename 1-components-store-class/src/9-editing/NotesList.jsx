import React from "react";

export default function NotesList({notes,onEdit}) {


    return (
        <ul>
            {notes.map(note => {
                return <li key={note.id}>
                    <div>
                        <div>{note.name} {note.price}</div>
                        <button name={note.name} onClick={onEdit}>Edit</button>
                    </div>
                </li>
            })}
        </ul>
    )
}
