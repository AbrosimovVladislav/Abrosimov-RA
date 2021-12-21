import React from "react";

export default function Hex2Rgb({onChange,rgb}) {
    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2];
    return (
        <div className="container" style={{ backgroundColor: 'rgb('+r+','+g+','+b+')'}}>
            <input maxLength="7" size="7"  onChange={onChange}/>
            <input className="rgb" maxLength="20" size="20"  readOnly="readOnly" value={rgb}/>
        </div>
    )
}
