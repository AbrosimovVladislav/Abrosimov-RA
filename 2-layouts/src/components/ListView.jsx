import React from "react";
import ShopItem from "./ShopItem";

export default function ListView({items, visibility}) {

    return (
        <div className={"" + (!visibility ? "hidden" : "list_view_container")}>
            {items.map((item,idx) => <ShopItem key={idx} item={item}/>)}
        </div>
    )
}
