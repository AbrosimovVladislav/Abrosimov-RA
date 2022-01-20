import './App.css';
import {Route, Routes} from "react-router-dom";
import ServicesList from "./components/ServicesList";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ServiceItem from "./components/ServiceItem";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/services" element={<ServicesList/>} exact/>
                <Route path="/services/:id" element={<ServiceItem/>} exact/>
            </Routes>
        </div>
    )
}

export default App;
