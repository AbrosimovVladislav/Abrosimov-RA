import React from "react";

export default function FormSteps({handleSubmit, onDateChange, onDistanceChange}) {

    let date = '';
    let distance = '';

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form_container">
                    <div className="date_container">
                        <div className="date_text">Дата(ДД.ММ.ГГ)</div>
                        <input className="date" type="date" value={date} onChange={onDateChange}/>
                    </div>
                    <div className="km_container">
                        <div className="km_text">Пройдено км</div>
                        <input className="km" id="distance" name="distance" type="number" value={distance} onChange={onDistanceChange}/>
                    </div>
                    <div className="accept_container">
                        <button type="submit">ОК</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
