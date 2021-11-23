import React from "react";
/**
 * Компонент отвечает за вывод ссылок на популярные сайты.
 */

export default function Visited({visitedLink1,visitedLink2,VisitedLinkText1,VisitedLinkText2}) {

    return (
        <div className="visited_container">
            <div className="title"> Посещаемое</div>
            <div><a href={visitedLink1}>{VisitedLinkText1}</a></div>
            <div><a href={visitedLink2}>{VisitedLinkText2}</a></div>
        </div>
    )
}
