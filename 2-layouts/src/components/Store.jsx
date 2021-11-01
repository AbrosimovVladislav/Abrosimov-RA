import React, {useState} from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

export default function Store() {

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    const availableIcons = ["view_list", "view_module"];

    const [icon, setIcon] = useState("view_module");

    function onSwitch() {
        let oppositeToCurrentIcon = icon === availableIcons[0] ? availableIcons[1] : availableIcons[0];
        setIcon(oppositeToCurrentIcon);
    }


    return (
        <div>
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            <CardsView visibility={icon === availableIcons[1]} cards={products}/>
            <ListView visibility={icon === availableIcons[0]} items={products}/>
        </div>
    )
}
