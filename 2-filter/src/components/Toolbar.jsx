import React from "react";

export default function Toolbar({filters, selected, onSelectFilter}) {

    console.log(selected)

    const selectedStyle = {
        color: 'white',
        background: 'gray'
    };

    return (
        <div>
            {filters.map((filter,idx) =>
                <button
                    key={idx}
                    onClick={onSelectFilter}
                    style= {selected===filter ? selectedStyle : {}}
                >{filter}</button>)
            }
        </div>
    )
}
