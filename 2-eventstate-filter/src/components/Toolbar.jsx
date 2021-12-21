import React from "react";

export default function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <div>
            {filters.map((filter) =>
                <button className={selected === filter ? "selected_button" : "button_categories"}
                        key={Math.random()}
                        onClick={onSelectFilter}
                >{filter}</button>)
            }
        </div>
    )
}
