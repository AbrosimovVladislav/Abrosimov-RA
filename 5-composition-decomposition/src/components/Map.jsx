import React from "react";
/**
 * Компонент отвечает сылку на места на карте.
 */

export default function Map({timetables}) {

    return (
        <div className="map_container">
            <div className="title">Катра германии</div>
            <div>{timetables}</div>
        </div>
    )
}
