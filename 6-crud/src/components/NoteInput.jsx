import React from "react";

export default function NoteInput({baseUrl}) {

    const addNoteUrl = "/notes";

    const [noteText, setNoteText] = React.useState({id: "", content: ""});

    const onNoteTextChange = (evt) => {
        setNoteText({id: "", content: evt.target.value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        postNewNote();
    }

    const postNewNote = () => {
        fetch(baseUrl + addNoteUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(noteText)
        })
            .then(resp => resp.json);
        setNoteText({id: "", content: ""});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form_container">
                    <div className="km_container">
                        <div>New note</div>
                        <input id="noteInput" name="noteInput" value={noteText.content}
                               onChange={onNoteTextChange}/>
                    </div>
                    <div className="accept_container">
                        <button type="submit">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
