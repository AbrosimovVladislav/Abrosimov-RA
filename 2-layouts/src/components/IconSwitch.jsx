import React from "react";

export default function IconSwitch({icon,onSwitch}) {

    return (
        <div className="icon_switch_container">
            <button onClick={onSwitch}>{icon}</button>
        </div>
    )
}
