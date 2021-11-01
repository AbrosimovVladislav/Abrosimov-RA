import React from "react";

export default function IconSwitch({icon,onSwitch}) {

    return (
        <div>
            <button onClick={onSwitch}>{icon}</button>
        </div>
    )
}
