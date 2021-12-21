import React from "react";
/**
 * Компонент отвечает телепрограммы в эфире
 */

export default function Ether({tvContent,tvChanel}) {

    return (
        <div className="ether_container">
            <div className="title">Эфир</div>
            <div>{tvContent}{tvChanel}</div>
        </div>
    )
}
