import React from "react";
import Card from "./Card";

export default function CardList({cards, baseUrl}) {

    const deleteNoteUrl = "/notes/";

    const onDeleteCLick = (evt) => {
        fetch(baseUrl + deleteNoteUrl + evt.target.name, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(resp => resp.json)
    }

    return (
        <div>
            {cards.map(card =>
                <div>
                    <Card key={card.id} card={card.content}/>
                    <button name={card.id} onClick={onDeleteCLick}>X</button>
                </div>
            )}
        </div>
    )
}
