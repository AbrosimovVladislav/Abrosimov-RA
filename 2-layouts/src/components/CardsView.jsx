import React from "react";
import ShopCard from "./ShopCard";

export default function CardsView({cards, visibility}) {

    return (
        <div className={"" + (!visibility ? "hidden" : "cards_view_container")}>
            {cards.map((card,idx) => <ShopCard key={idx} card={card}/>)}
        </div>
    )
}
