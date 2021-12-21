import React, {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import {Form} from "react-bootstrap";

export default function NoteDetails() {

    const {id} = useParams();
    const [note, setNote] = useState({});
    const [edit, setEdit] = useState(false);
    const [editValue, setEditValue] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch("http://localhost:7777/posts")
            .then(response => response.json())
            .then(notes => notes.find(note => note.id == id))
            .then(note => setNote(note))
    }, [])

    const onChange = () => {
        setEdit(true)
    }

    const onCloseEditing = () => {
        setEdit(false)
    }

    const onSaveEditing = () => {
        fetch("http://localhost:7777/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id": id, "content": editValue})
        })
            .then(resp => resp.json);
        setEditValue("");
        setEdit(false)
    }

    const onDelete = () => {
        fetch("http://localhost:7777/posts/" + id, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(resp => resp.json)
        setRedirect(true)
    }

    const onNoteTextChange = (evt) => {
        evt.preventDefault()
        setEditValue(evt.target.value);
    }

    if (redirect) {
        return <Navigate to='/'/>;
    }

    if(edit) {
        return <div>
            <Form onSubmit={onSaveEditing}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Редактирование</Form.Label>
                    <button onClick={onCloseEditing}>X</button>
                    <p/>
                    <Form.Control onChange={onNoteTextChange} value={editValue} as="textarea"/>
                </Form.Group>
                <p/>
                <button type="submit">
                    Сохранить
                </button>
            </Form>
            <p/>
        </div>
    }

    return (
        <div>
            {note.content}
            <button onClick={onChange}>Изменить</button>
            <button onClick={onDelete}>Удалить</button>
        </div>
    )
}
