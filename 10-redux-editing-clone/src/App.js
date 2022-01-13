import './App.css';
import {useState} from "react";
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";

const initialState = [
    {id: Math.random(), name: "TEst1", price: 1000},
    {id: Math.random(), name: "TEst2", price: 5000},
    {id: Math.random(), name: "TEst3", price: 200},
]

function App() {

    const [items, setItems] = useState(initialState)

    const handleAdd = (item) => {
        setItems([...items, item])
    }



    return (
        <div>
            <ServiceAdd handleAdd={handleAdd}/>
            <ServiceList/>
        </div>
    )
}

export default App;
