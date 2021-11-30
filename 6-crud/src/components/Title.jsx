import React from "react";

export default function Title() {

    const onClick = () => {
       window.location.reload();
    }

    return (
        <div className="title_container">
            <div className="title">Notes</div>
            <button onClick={onClick}>Refresh</button>
        </div>
    )
}
