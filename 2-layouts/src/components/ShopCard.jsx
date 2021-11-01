import React from "react";

export default function ShopCard({card}) {

    return (
        <div>
            <h1>{card.name}</h1>
            <h3>{card.price}</h3>
            <p>{card.color}</p>
            <img src={card.img}/>
        </div>
    )
}
