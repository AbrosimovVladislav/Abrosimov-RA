import React from "react";
import ShopItem from "./ShopItem";

export default function ListView({items, visibility}) {

    return (
        <div hidden={!visibility}>
            <h1>LIST VIEW (DELETE THIS LINE)</h1>
            {items.map(item => <ShopItem item={item}/>)}
        </div>
    )
}
