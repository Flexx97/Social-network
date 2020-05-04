import React from 'react';
import header from './header.module.css';

const Header = (props) => {
    return ( <>
        <header className={header.header}>{props.login}</header>

    </>)

}

export default Header;