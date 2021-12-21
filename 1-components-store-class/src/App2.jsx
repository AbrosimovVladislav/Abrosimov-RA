import './App.css';
import InputForm from "./9-editing/InputForm";
import NotesList from "./9-editing/NotesList";
import {useState} from "react";

function App2() {

    const [notes, setNotes] = useState([
        {id: Math.random(), name: "Test1", price: "20000"},
        {id: Math.random(), name: "Test2", price: "40000"},
        {id: Math.random(), name: "Test3", price: "60000"}
    ]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [editing, setEditing] = useState(-1);

    const onSubmitHandle = (evt) => {
        evt.preventDefault();
        let buttonType = evt.target.name;

        let resultSaveArr = notes;

        console.log(editing)
        console.log(evt.target)

        if (editing == -1 && buttonType === "") {
            console.log("OnSave")
            resultSaveArr.push({id: Math.random(), name: name, price: price});
            setNotes(resultSaveArr)
            setName("")
            setPrice("")
        } else if (editing > -1 && buttonType === "save") {
            console.log("OnSaveEdit")
            let editingNote = notes.find(note => note.id == editing);

        } else if (buttonType === "cancel") {
            console.log("OnCancelEdit")
            setName("")
            setPrice("")
        }
    }

    const onNameChange = (evt) => {
        setName(evt.target.value);
    }

    const onPriceChange = (evt) => {
        setPrice(evt.target.value);
    }

    const onEdit = (evt) => {
        const targetName = evt.target.name;
        let note = notes.find(note => note.name === targetName);
        setEditing(note.id)

        setName(note.name)
        setPrice(note.price)
    }

    return (
        <div>
            <InputForm onSubmitHandle={onSubmitHandle} onNameChange={onNameChange} onPriceChange={onPriceChange}
                       name={name}
                       price={price} editing={editing}/>
            <NotesList notes={notes} onEdit={onEdit}/>
        </div>
    )
}

export default App2;