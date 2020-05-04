import React from 'react';
import nav from './nav-bar.module.css';
import {NavLink} from "react-router-dom";
import BestFriendsContainer from "../BestFriends/BestFriendsContainer";

const Nav = (props) => {
    return (<nav className={nav.nav}>
        <NavLink to='/profile' className={nav.item} activeClassName={nav.active}>Profile</NavLink>
        <NavLink to='/dialogs' className={nav.item} activeClassName={nav.active}>Messages</NavLink>
        <NavLink to='/users' className={nav.item} activeClassName={nav.active}>Users</NavLink>
        <NavLink to='/news' className={nav.item} activeClassName={nav.active}>News</NavLink>
        <NavLink to='/music' className={nav.item} activeClassName={nav.active}>Music</NavLink>
        <NavLink to='settings' className={`${nav.item} ${nav.important}`}
                 activeClassName={nav.active}>Settings</NavLink>
        <div className={`${nav.best} ${nav.item}`}><BestFriendsContainer/></div>
    </nav>);
}

export default Nav;