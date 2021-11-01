import React from "react";

export default function Toolbar({filters, selected, onSelectFilter}) {

    console.log(selected)

    const selectedStyle = {
        color: 'white',
        background: '#3d464d'
    };

    return (
        <div>
            {filters.map((filter, idx) =>
                <button className="button_categories"
                    key={idx}
                    onClick={onSelectFilter}
                    style={selected === filter ? selectedStyle : {}}
                >{filter}</button>)
            }
        </div>
    )
}
