import React from "react";
import News from "./news/News";
import Stonks from "./stonks/Stonks";
import Interesting from "./interesting/Interesting";

/**
 * Блок с новостями, акциями и рекламным местом под интересное
 * */
export default function NewsBlock() {

    return (
        <div>
            <News/>
            <Stonks/>
            <Interesting/>
        </div>
    )
}
