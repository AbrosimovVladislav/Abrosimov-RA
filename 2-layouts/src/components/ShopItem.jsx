import React from "react";

export default function ShopItem({item}) {

    return (
        <div className="shop_item">
            <img src={item.img}/>
            <div className="name">{item.name}</div>
            <div className="color">{item.color}</div>
            <div className="price">${item.price}</div>
        </div>
    )
}
