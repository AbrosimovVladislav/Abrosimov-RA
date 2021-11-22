import React from "react";

export default function Block({name, color}) {

    const style = {
        color: color
    }

    return (<button style={style}>{name}</button>)
}
