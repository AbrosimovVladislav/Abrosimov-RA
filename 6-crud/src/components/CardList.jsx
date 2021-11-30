import React from "react";
import Card from "./Card";

export default function CardList({cards, baseUrl}) {

    const deleteNoteUrl = "/notes/";

    const onDeleteCLick = (evt) => {
        fetch(baseUrl + deleteNoteUrl + evt.target.id, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(resp => resp.json)
    }

    return (
        <div className="cardList_container">
            {cards.map(card =>
                <div className="card_container">
                    <Card key={card.id} card={card.content}/>
                    <button id={card.id} onClick={onDeleteCLick}>X</button>
                </div>
            )}
        </div>
    )
}
