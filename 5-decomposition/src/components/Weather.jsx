import React from "react";
/**
 * Компонент отвечает за отображение погоды.
 */
export default function Weather({weatherIcon, weatherDegree, weatherMorningDegree,weatherEveningDegree}) {

    return (
        <div className="weather_container">
            <div className="title">Погода</div>
            <div className="weather_content">
                <img src={weatherIcon} alt="weather"/>
                <div className="weather_degree">
                    {weatherDegree}
                </div>
                <div className="weather_evening_morning_container">
                    <div className="weather_morning">
                        Утром{weatherMorningDegree}
                    </div>
                    <div className="weather_evening">
                        Вечером{weatherEveningDegree}
                    </div>
                </div>
            </div>
        </div>
    )
}
