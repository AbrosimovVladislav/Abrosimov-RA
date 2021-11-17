import './App.css';
import FormSteps from "./components/FormSteps";
import TableSteps from "./components/TableSteps";
import React from "react";

function App() {

    const [records, setRecords] = React.useState([{id:1, date:"12.12.2021",distance:"4.2"},{id:2, date:"12.12.2021",distance:"4.2"}]);
    const [currentDate, setCurrentDate] = React.useState('');
    const [currentDistance, setCurrentDistance] = React.useState('');

    const onDeleteClick = (evt) => {
        const id = evt.target.name;
        let arr = records.filter(rec => rec.id!=id);
        console.log(arr)
        setRecords(arr);
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault();
    }

    const handleDateChange = () =>{

    }


    const handleDistanceChange = (evt) =>{
        console.log(evt.target.value)
    }

  return (
      <div className="container">
          <FormSteps handleSubmit={handleSubmit} onDateChange={handleDateChange} onDistanceChange={handleDistanceChange}/>
          <TableSteps records={records} onDeleteClick={onDeleteClick}/>
      </div>
  )
}

export default App;
