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
        <div className="noteInput_container">
            <form onSubmit={handleSubmit}>
                <div>New note</div>
                    <div className="node_title_input_container">
                        <input id="noteInput" name="noteInput" value={noteText.content}
                               onChange={onNoteTextChange}/>
                        <button type="submit">Add</button>
                    </div>
            </form>
        </div>
    )
}
