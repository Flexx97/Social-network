import React from 'react';
import nav from './nav-bar.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (<nav className={nav.nav}>
        <NavLink to='/profile' className={nav.item} activeClassName={nav.active}><span class="material-icons">person_outline</span>Profile</NavLink>
        <NavLink to='/dialogs' className={nav.item} activeClassName={nav.active}><span class="material-icons">mail</span>Messages</NavLink>
        <NavLink to='/users' className={nav.item} activeClassName={nav.active}><span class="material-icons">group</span>Users</NavLink>
        <NavLink to='/news' className={nav.item} activeClassName={nav.active}><span class="material-icons">fiber_new</span>News</NavLink>
        <NavLink to='/music' className={nav.item} activeClassName={nav.active}><span class="material-icons">library_music</span>Music</NavLink>
        <NavLink to='settings' className={`${nav.item} ${nav.important}`}
                 activeClassName={nav.active}><span class="material-icons">settings</span>Settings</NavLink>
        
    </nav>);
}

export default Nav;