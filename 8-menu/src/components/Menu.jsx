import React from "react";
import {NavLink} from "react-router-dom";

export default function Menu({links}) {

    return (
        <nav className="menu">
            {
                links.map(link => {
                    return <NavLink key={Math.random()} activeClassName="menu__item-active" className="menu__item" to={link.path}>{link.name}</NavLink>
                })
            }
        </nav>
    )
}
