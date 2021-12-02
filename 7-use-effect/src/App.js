import './App.css';
import Details from "./components/Details";
import List from "./components/List";
import {useEffect, useState} from "react";

function App() {

    const [listData, setListData] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(0);
    const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                return setListData(json)})
    }, [])

    const onUserClick = (evt) => {
        let id = evt.target.id;
        setSelectedUserId(id)
    }

    return (
        <div>
            <List listData={listData} onUserClick={onUserClick}/>
            <Details selectedUserId={selectedUserId}/>
        </div>
    )
}

export default App;
