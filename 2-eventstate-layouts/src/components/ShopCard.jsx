import React from "react";

export default function ShopCard({card}) {

    return (
        <div className="shop_card">
            <div className="name">{card.name}</div>
            <div className="color">{card.color}</div>
            <img src={card.img}/>
            <div className="price_and_button">
                <div className="price">${card.price}</div>
                <button>ADD TO CARD</button>
            </div>

        </div>
    )
}
