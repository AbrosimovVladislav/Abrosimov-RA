import './App.css';
import Title from "./components/Title";
import NoteInput from "./components/NoteInput";
import CardList from "./components/CardList";
import React from "react";

function App() {

    const baseUrl = "http://localhost:7777";
    const getNotesUrl = "/notes";
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        fetch(baseUrl + getNotesUrl)
            .then(response => response.json())
            .then(notes => setCards(notes))
    }, [])

    return (
        <div className="crud_container">
            <Title/>
            <CardList baseUrl={baseUrl} cards={cards}/>
            <NoteInput baseUrl={baseUrl}/>
        </div>
    )
}

export default App;
