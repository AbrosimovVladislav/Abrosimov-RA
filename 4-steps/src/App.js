import './App.css';
import FormSteps from "./components/FormSteps";
import TableSteps from "./components/TableSteps";
import React from "react";

function App() {

    const [records, setRecords] = React.useState([]);
    const [lastId, setLastId] = React.useState(0);
    const [form, setForm] = React.useState({date: '', distance: 0})

    const onDeleteClick = (evt) => {
        const id = evt.target.name;
        let arr = records.filter(rec => rec.id != id);
        console.log(arr)
        setRecords(arr);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let arr = records;
        const currentDistance = parseFloat(form.distance);
        if (form.date !== '' && currentDistance !== 0 && currentDistance.toString() !== "NaN") {

            const recordsByDate = records.filter(rec => rec.date === form.date);
            if (recordsByDate.length > 0) {
                let recordByCurrentDate = recordsByDate[0];
                let resultDistance = recordByCurrentDate.distance + currentDistance;
                recordByCurrentDate = {
                    id: recordByCurrentDate.id,
                    date: recordByCurrentDate.date,
                    distance: resultDistance
                };
                arr = arr.filter(rec => rec.id !== recordByCurrentDate.id);
                arr.push(recordByCurrentDate);
            } else {
                const currentId = lastId + 1;
                setLastId(currentId);
                arr.push({id: currentId, date: form.date, distance: currentDistance})
            }
            setRecords(sortByDate(arr));
        }
    }

    const sortByDate = (arr) => {
        arr.sort(function (a, b) {
            var dateA = new Date(a.date), dateB = new Date(b.date)
            return dateB - dateA
        })
        return arr;
    }

    const handleDateChange = (evt) => {
        setForm(prevForm => ({...prevForm, date: evt.target.value}));
    }


    const handleDistanceChange = (evt) => {
        setForm(prevForm => ({...prevForm, distance: evt.target.value}));
    }

    return (
        <div className="container">
            <FormSteps handleSubmit={handleSubmit} onDateChange={handleDateChange}
                       onDistanceChange={handleDistanceChange} form={form}/>
            <TableSteps records={records} onDeleteClick={onDeleteClick}/>
        </div>
    )
}

export default App;
