import React from "react";
import NewsButtons from "./NewsButtons";
import NewsList from "./NewsList";
import CurrentDateTime from "./CurrentDateTime";

export default function News() {

    const newsButtons = [{id: "1"}, {id: "2"}, {id: "3"}]
    const newsList = [{id: "1"}, {id: "2"}, {id: "3"}, {id: "4"}, {id: "5"}, {id: "6"}]

    return (
        <div>
            <NewsButtons newsButtons={newsButtons}/>
            <CurrentDateTime/>
            <NewsList newsList={newsList}/>
        </div>
    )
}
