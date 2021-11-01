import React from "react";
import ShopCard from "./ShopCard";

export default function CardsView({cards, visibility}) {

    return (
        <div hidden={!visibility}>
            <h1>CARD VIEW (DELETE THIS LINE)</h1>
            {cards.map(card => <ShopCard card={card}/>)}
        </div>
    )
}
