import React from 'react';
import header from './header.module.css';

const Header = (props) => {

    const LogOut = () => {
        props.getLogOut()
    }

    return (<>
        <header className={header.header}>
            <div>
                {props.login
                    ?<div>
                        {props.login}
                        <button onClick={LogOut}>Log out</button>
                    </div>
                    : "You not authorized"
                }
            </div>
        </header>

    </>)

}

export default Header;