import React from "react";

export default function ShopCard({card}) {

    return (
        <div className="shop_card">
            <div className="name">{card.name}</div>
            <div className="color">{card.color}</div>
            <img src={card.img}/>
            <div className="prise">${card.price}</div>
        </div>
    )
}
