import React from 'react';
import header from './header.module.css';

const Header = (props) => {

    const LogOut = () => {
        props.getLogOut()
    }

    return (<>
        <header className={header.header}>
            <div className={header.logo}><img src='https://demo.wellthemes.com/velocity/wp-content/uploads/2019/12/logo.png'></img></div>
            <div>
                {props.login
                    ?<div className={header.name}>
                        {props.login}
                        <button onClick={LogOut}>LogOut</button>
                    </div>
                    : "You not authorized"
                }
            </div>
        </header>

    </>)

}

export default Header;