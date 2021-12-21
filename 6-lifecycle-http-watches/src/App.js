import './App.css';
import CreationForm from "./components/CreationForm";
import Clocks from "./components/Clocks";
import React from "react";

function App() {

    const [clocks, setClocks] = React.useState([{name: "Москва", timezone: 3}]);
    const [inputClockName, setInputClockName] = React.useState("")
    const [inputClockTimeZone, setInputClockTimeZone] = React.useState(0)

    const onInputClockNameChange = (evt) => {
        setInputClockName(evt.target.value)
    }

    const onInputClockTimeZoneChange = (evt) => {
        setInputClockTimeZone(parseInt(evt.target.value))
    }

    const onDeleteClick = (evt) => {
        let tempArr = clocks;
        tempArr = tempArr.filter(clock => clock.name !== evt.target.name)
        setClocks(tempArr)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let tempArr = clocks;
        tempArr.push({name: inputClockName, timezone: inputClockTimeZone})
        setClocks(tempArr)
        console.log(clocks)
        //Не понимаю почему setClocks не вызывает ререндера??????????
        //Из за этого скидываю значения инпутформ стейтов
        setInputClockName("")
        setInputClockTimeZone(0)
    }

    return (
        <div>
            <CreationForm
                handleSubmit={handleSubmit}
                inputClockName={inputClockName}
                inputClockTimeZone={inputClockTimeZone}
                onInputClockNameChange={onInputClockNameChange}
                onInputClockTimeZoneChange={onInputClockTimeZoneChange}/>
            <Clocks clocks={clocks} onDeleteClick={onDeleteClick}/>
        </div>
    )
}

export default App;
