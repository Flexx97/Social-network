import React from 'react';
import dialogs from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={`${dialogs.dialog} ${dialogs.active}`}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default DialogsItem;