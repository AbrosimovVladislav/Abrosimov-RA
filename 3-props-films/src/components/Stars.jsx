import React from "react";
import Star from "./Star";

export default function Stars({count = 0}) {

    if (typeof count !== "number" || count < 1 || count > 5) {
        return null;
    }

    let arr = []
    for (let i = []; i.length < count; i.push(<Star/>)) {
        arr = i;
    }

    return (
        <div className="card-body-stars">
            <ul className="stars">
                {arr}
            </ul>
        </div>
    )
}