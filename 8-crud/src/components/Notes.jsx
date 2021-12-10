import React, {useEffect, useState} from "react";
import NoteMicroCard from "./NoteMicroCard";
import {Button} from "react-bootstrap";

export default function Notes() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7777/posts")
            .then(response => response.json())
            .then(notes => setNotes(notes))
    }, [])

    return (
        <div>
            <a href="/posts/new"><Button>Создать пост</Button></a>
            <p/>
            {
                notes.map(note => <NoteMicroCard key={note.id} note={note}/>)
            }
        </div>
    )
}
