import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {Navigate} from "react-router-dom";

export default function CreateNewPost() {

    const [value, setValue] = useState("");
    const [redirect, setRedirect] = useState(false);

    const onNoteTextChange = (evt) => {
        evt.preventDefault()
        setValue(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        postNewNote()
    }

    const onClose = () => {
        setRedirect(true)
    }

    const postNewNote = () => {
        fetch("http://localhost:7777/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id": 0, "content": value})
        })
            .then(resp => resp.json);
        setValue("");
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to='/'/>;
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>НОВЫЙ ПОСТ</Form.Label>
                    <button onClick={onClose}>X</button>
                    <p/>
                    <Form.Control onChange={onNoteTextChange} value={value} as="textarea"/>
                </Form.Group>
                <p/>
                <button type="submit">
                    Опубликовать
                </button>
            </Form>
        </div>
    )
}
