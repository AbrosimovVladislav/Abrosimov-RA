import React from "react";
import Note from "./Note";

export default function NoteList({list, onEditHandler}) {

    return (
        <div>
            {list.map(note => <Note note={note} onEditHandler={onEditHandler}/>)}
        </div>
    )
}
