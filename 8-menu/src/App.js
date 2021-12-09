import './App.css';
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";

export default function App() {

    const links = [
        {path: "/", element: <HomePage/>, name: "Главная"},
        {path: "/drift", element: <DriftPage/>, name: "Дрифт-Такси"},
        {path: "/timeattack", element: <TimeAttackPage/>, name: "Time Attack"},
        {path: "/forza", element: <ForzaPage/>, name: "Forza Картинг"},
    ]

    return (
        <div>
            <Menu links={links}/>
            <div className="page">
                <Routes>
                    {links.map(link => <Route key={Math.random()} path={link.path} exact element={link.element}/>)}
                </Routes>
            </div>
        </div>
    );
}