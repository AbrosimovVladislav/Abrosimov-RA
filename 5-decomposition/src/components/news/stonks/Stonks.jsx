import React from "react";
import StonksItem from "./StonksItem";

export default function Stonks() {

    const items=[{id:1},{id:2},{id:3}]

    return (
        <div>
            {items.map(item => <StonksItem key={item.id} item={item}/>)}
        </div>
    )
}
