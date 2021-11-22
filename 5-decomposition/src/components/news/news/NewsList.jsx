import React from "react";
import NewsItem from "./NewsItem";

export default function NewsList({newsList}) {

    return (
        <div>
            {newsList.map(item => <NewsItem key={item.id}/>)}
        </div>
    )
}
