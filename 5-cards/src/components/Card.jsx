import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({children,title,text,link}) {


    return (
        <div className="card">
            {children}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
)
}
