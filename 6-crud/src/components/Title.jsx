import React from "react";

export default function Title() {

    const onClick = () => {
       window.location.reload();
    }

    return (
        <div>
            <h1>Notes</h1>
            <button onClick={onClick}>Refresh</button>
        </div>
    )
}
