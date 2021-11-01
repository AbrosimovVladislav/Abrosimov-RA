import React from "react";
import ViewList from '@material-ui/icons/ViewList';
import ViewModule from '@material-ui/icons/ViewModule';

export default function IconSwitch({icon,onSwitch}) {

    const availableIcons = ["view_list", "view_module"];
    let iconView;

    if (icon === availableIcons[0]){
        iconView = <ViewList onClick={onSwitch} className="view_list_icon"/>
    } else if (icon === availableIcons[1]){
        iconView = <ViewModule onClick={onSwitch} className="cards_view_icon"/>
    }

    return (
        <div className="icon_switch_container">
            {iconView}
        </div>
    )
}
