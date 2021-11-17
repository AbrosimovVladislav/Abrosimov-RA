import React from "react";

export default function TableSteps({records, onDeleteClick}) {

    return (
        <div>
            <table>
                <tr>
                    <th>Дата(ДД.ММ.ГГ)</th>
                    <th>Пройдено км</th>
                    <th>Действия</th>
                </tr>
                {records.map(rec => {
                    return <tr>
                        <td>{rec.date}</td>
                        <td>{rec.distance}</td>
                        <td>
                            <button name={rec.id} onClick={onDeleteClick}>X</button>
                        </td>
                    </tr>
                })}
            </table>
        </div>
    )
}
