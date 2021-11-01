import React from "react";

export default function ShopItem({item}) {

    return (
        <div>
            <h1>{item.name}</h1>
            <h3>{item.price}</h3>
            <p>{item.color}</p>
            <img src={item.img}/>
        </div>
    )
}
