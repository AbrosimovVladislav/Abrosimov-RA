import React from "react";
import ViewList from '@material-ui/icons/ViewList';
import ViewModule from '@material-ui/icons/ViewModule';

export default function IconSwitch({icon, onSwitch}) {

    const viewOptions = new Map();
    //Здесь не могу не передавать className внутрь компонента, тк это не мой компонент а иконка @material-ui
    viewOptions.set("view_list", <ViewList onClick={onSwitch} className="view_list_icon"/>);
    viewOptions.set("view_module", <ViewModule onClick={onSwitch} className="cards_view_icon"/>);

    let iconView = viewOptions.get(icon);
    return (
        <div className="icon_switch_container">
            {iconView}
        </div>
    )
}
