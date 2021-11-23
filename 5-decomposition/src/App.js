import './App.css';

import React from "react";
import News from "./components/News";
import Search from "./components/Search";
import Banner from "./components/Banner";
import ErrorWork from "./components/ErrorWork";
import Weather from "./components/Weather";
import Visited from "./components/Visited";
import Map from "./components/Map";
import TvProgram from "./components/TvProgram";
import Ether from "./components/Ether";

import icon from "./accets/hotOffers.png";
import weatherIcon from "./accets/weather.png";


function App() {
    const news1 = {
        newsIcon: icon,
        newsContent: "Пример текста новости",
        newsLink: "https://www.google.com/"
    }
    const search = {
        searchInfoText: "Фазы луны",
        searchInfoLink: "https://www.google.com/"
    }
    const weather = {
        weatherIcon: weatherIcon,
        weatherDegree: 15,
        weatherMorningDegree: 16,
        weatherEveningDegree: 14
    }
    const visited = {
        visitedLink1: "https://www.google.com/",
        visitedLink2: "https://www.google.com/",
        VisitedLinkText1: "Недвожимость - о сталинках",
        VisitedLinkText2: "Маркет - люстры и светильники"
    }
    const map = {
        timetables: "расписания",
    }
    const tvProgram = {
        tvTime: "22:00",
        tvContent: "ТНТ best",
        tvChanel: "TNT international"
    }
    const ether = {
        tvContent: "Управление как искусство",
        tvChanel: "Успех"
    }
    return (
        <>
            <div className="news_error_container">
                <News {...news1}/>
                <ErrorWork/>
            </div>
            <div className="search_banner_container">
                <Search{...search}/>
                <Banner/>
            </div>
            <div className="other_container">
                <Weather {...weather}/>
                <Visited{...visited}/>
                <Map{...map}/>
                <TvProgram{...tvProgram}/>
                <Ether{...ether}/>
            </div>
        </>
    )
}

export default App;
