import React from "react";
/**
 * Компонент отвечает за вывод телепрограмм.
 */

export default function TvProgram({tvTime,tvContent,tvChanel}) {

    return (
        <div className="tv_program_container">
            <div className="title_container">
                <div className="title">Телепрограмма</div>
                <button>Эфир</button>
            </div>
            <div>{tvTime}{tvContent}{tvChanel}</div>
        </div>
    )
}
