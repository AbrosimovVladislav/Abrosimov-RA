import React from "react";
import logo from "../accets/logo.png";
/**
 * Компонент отвечает сылку на работу над ошибками.
 */

export default function ErrorWork() {

    return (
        <div className="error_work_container">
            <img src={logo} alt="error_work"/>
            <div className="title"> Работа над ошибками </div>
            <div className="text"> Смотрите на яндексе и запоминайте </div>
        </div>
    )
}
