import React from "react";

export default function CreationForm({handleSubmit,inputClockName, inputClockTimeZone, onInputClockNameChange, onInputClockTimeZoneChange}) {

    return (
        <div>
            <div className="noteInput_container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>Название</div>
                        <input id="clockNameInput" name="clockNameInput" value={inputClockName}
                               onChange={onInputClockNameChange}/>
                    </div>
                    <div>
                        <div>Временная Зона</div>
                        <input id="clockTimeZoneInput" type="number" name="clockTimeZoneInput" value={inputClockTimeZone}
                               onChange={onInputClockTimeZoneChange}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}
