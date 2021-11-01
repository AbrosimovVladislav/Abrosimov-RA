import React from "react";
import ShopCard from "./ShopCard";

export default function CardsView({cards, visibility}) {

    if (!visibility) {
        return null;
    }

    return (
        <div className={"cards_view_container"}>
            {cards.map((card, idx) => <ShopCard key={idx} card={card}/>)}
        </div>
    )

}
