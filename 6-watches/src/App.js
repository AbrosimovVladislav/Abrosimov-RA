import './App.css';
import CreationForm from "./components/CreationForm";
import Clocks from "./components/Clocks";
import React from "react";

function App() {

    const [clocks, setClocks] = React.useState([{name: "Moscow", timezone: "GMT+3"}]);

    return (
        <div>
            <CreationForm/>
            <Clocks clocks={clocks}/>
        </div>
    )
}

export default App;
