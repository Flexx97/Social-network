import React from 'react';
import profile from './userinfo.module.css';
import Loader from "../../common/loader/loader";


const UserInfo = (props) => {
    if(!props.userProfile) {
        return <Loader/>
    }
    return <>
        <div>
            <div className={profile.avatar}>
                <img src={props.userProfile.photos.small} height='100px' width='100px'/>
                <div>{props.userProfile.fullName}</div>
            </div>
        </div>
    </>
}

export default UserInfo;