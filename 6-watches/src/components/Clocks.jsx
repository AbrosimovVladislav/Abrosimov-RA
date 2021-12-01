import React from "react";
import Clock from "./Clock";

export default function Clocks({clocks}) {
    return (
        <div>
            {clocks.map(clock => <Clock key={Math.random()} clock={clock}/>)}
        </div>
    )
}
