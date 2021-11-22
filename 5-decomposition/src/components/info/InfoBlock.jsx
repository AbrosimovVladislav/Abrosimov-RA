import React from "react";
import Advertisment from "./Advertisment";
import Weather from "./Weather";
import Visited from "./Visited";
import CountryMap from "./CountryMap";
import TvShow from "./TvShow";
import YandexEfir from "./YandexEfir";

export default function InfoBlock() {

    return (
        <div>
            <Advertisment/>
            <Weather/>
            <Visited/>
            <CountryMap/>
            <TvShow/>
            <YandexEfir/>
        </div>
    )
}
