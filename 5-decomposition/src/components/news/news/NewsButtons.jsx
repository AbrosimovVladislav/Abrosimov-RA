import React from "react";
import NewsButton from "./NewsButton";

export default function NewsButtons({newsButtons}) {

    return (
        <div>
            {newsButtons.map(but => <NewsButton key={but.id}/>)}
        </div>
    )
}
