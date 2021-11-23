import React from "react";
/**
 * Компонент отвечает за новостной блок.
 */

export default function News({newsIcon, newsContent, newsLink}) {

    return (
        <div className="news_container">
            <div className="news_header_container">
                <div className="news_header">Сейчас в СМИ</div>
                <div className="news_header">в Германии</div>
                <div className="news_header">Рекомендуем</div>
            </div>
            <div className="news_content_container">
                <img alt="news" src={newsIcon}/>
                <div className="news_content">
                    <a href={newsLink}>{newsContent}</a>
                </div>
            </div>
        </div>
    )
}
