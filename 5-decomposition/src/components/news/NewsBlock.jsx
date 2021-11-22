import React from "react";
import News from "./News";
import Stonks from "./Stonks";
import Interesting from "./Interesting";

export default function NewsBlock() {

    return (
        <div>
            <News/>
            <Stonks/>
            <Interesting/>
        </div>
    )
}
