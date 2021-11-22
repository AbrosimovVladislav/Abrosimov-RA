import './App.css';
import NewsBlock from "./components/news/NewsBlock";
import SearchBlock from "./components/search/SearchBlock";
import React from "react";
import InfoBlock from "./components/info/InfoBlock";

function App() {

    return (
        <div>
            <NewsBlock/>
            <SearchBlock/>
            <InfoBlock/>
        </div>
    )
}

export default App;
