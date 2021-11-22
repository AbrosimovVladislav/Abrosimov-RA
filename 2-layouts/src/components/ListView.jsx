import React from "react";
import ShopItem from "./ShopItem";

export default function ListView({items, visibility}) {

    if (!visibility) {
        return null;
    }

    return (
        <div className={"list_view_container"}>
            {items.map((item) => <ShopItem key={Math.random()} item={item}/>)}
        </div>
    )
}
