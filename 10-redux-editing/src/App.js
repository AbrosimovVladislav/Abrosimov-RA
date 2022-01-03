import './App.css';
import NoteList from "./components/NoteList";
import Form from "./components/Form";
import {useState} from "react";

function App() {

    const [list, setList] = useState([
        {id: Math.random(), text: "Pip", price: "2100"},
        {id: Math.random(), text: "Pop", price: "300"},
        {id: Math.random(), text: "Pep", price: "450"}
    ])

    const [form, setForm] = useState({
        id: null,
        text: "",
        price: ""
    })

    const [editing, setEditing] = useState(false);

    const onEditCancelHandler = (evt) => {
        setForm({id: null, text: "", price: ""})
        setEditing(false)
    }

    const onEditHandler = (evt) => {
        const selectedId = evt.target.id;
        const selected = list.filter(note => selectedId == note.id)[0];

        if (!selected) {
            return null;
        }

        setEditing(true);
        setForm({id: selectedId, text: selected.text, price: selected.price});
    }

    const onUpdateHandler = (evt) => {
        evt.preventDefault();
        const selected = list.find(el => el.id == form.id);
        const selectedIndex = list.indexOf(selected);
        const arr = list;
        arr[selectedIndex] = {id: form.id, text: form.text, price: form.price};
        setList(arr);
        setForm({id: null, text: "", price: ""})
        setEditing(false)
    }

    const handleTextChange = (evt) => {
        setForm(prevForm => ({...prevForm, text: evt.target.value}));
    }

    const handlePriceChange = (evt) => {
        setForm(prevForm => ({...prevForm, price: evt.target.value}));
    }

    const onSaveHandler = (evt) => {
        evt.preventDefault()
        const arr = list;
        arr.push({id: Math.random(), text: form.text, price: form.price})
        setList(arr);
        setForm({id: null, text: "", price: ""})
    }

    return (
        <div>
            <Form form={form} editing={editing} handleTextChange={handleTextChange}
                  handlePriceChange={handlePriceChange} onUpdateHandler={onUpdateHandler}
                  onSaveHandler={onSaveHandler} onEditCancelHandler={onEditCancelHandler}/>
            <NoteList list={list} onEditHandler={onEditHandler}/>
        </div>
    )
}

export default App;
