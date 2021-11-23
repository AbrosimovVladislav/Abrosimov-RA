import React from "react";
import logo from "../accets/logo.png";
/**
 * Компонент отвечает поиск.
 */
export default function Search({searchInfoLink,searchInfoText}) {

    return (
        <div className="search_container">
            <div className="search_main">
                <img src={logo} alt="logo"/>
                <input type="search"/>
                <button> Найти </button>
            </div>
            <div className="search_info">
                <div className="search_info_text">Например</div>
                <div className="search_info_link"><a href={searchInfoLink}>{searchInfoText}</a></div>
            </div>
        </div>
    )
}
