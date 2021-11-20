import React from "react";

export default function Card({children,title,text,link}) {

    let styleVar = {
        width: "18rem"
    }

    return (
        <div className="card" style={styleVar}>
            {children}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
)
}
