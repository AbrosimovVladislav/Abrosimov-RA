import React from "react";

export default function List({listData, onUserClick}) {

    return (
        <div>
            {listData.map(data => <h2 onClick={onUserClick} id={data.id} key={data.id}>{data.name}</h2>)}
        </div>
    )
}
