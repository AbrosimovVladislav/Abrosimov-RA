import React from "react";
import Star from "./Star";

export default function Stars({count = 0}) {

    console.log(typeof count)

    //правильнее будет запилить проп тайпс, но по условию задачи ИМХО это более очевидное решение
    if (typeof count !== "number" || count < 1 || count > 5) {
        return null;
    }

    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(i);
    }

    return (
        <div>
            <ul className="card-body-stars">
                {
                    arr.map(star => <Star ket={star}/>)
                }
            </ul>
        </div>
    )
}