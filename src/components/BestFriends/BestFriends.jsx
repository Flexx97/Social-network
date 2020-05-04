import React from 'react';
import best from './BestFriends.module.css';

const BestFriends = (props) => {
    let Friends =
        props.FriendsWay.map(state =>
            <div>
                <img className={best.img} src={state.img}/>
                <div>{state.name}</div>
            </div>
        );

    return (
        <div className={best.best}>
            <div className={best.decor}>Best Friends</div>
            <div className={best.frpos}>
                {Friends}
            </div>
        </div>
    );
};

export default BestFriends;