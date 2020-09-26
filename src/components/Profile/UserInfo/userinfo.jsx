import React from 'react';
import profile from './userinfo.module.css';
import Loader from "../../common/loader/loader";
import ProfileStatus from "./pofileStatus/profileStatus";
import userPhoto from '../../img/user.png'


const UserInfo = (props) => {
    if (!props.userProfile) {
        return <Loader/>
    }
    return <>
        <div className={profile.avatar}>
        <img src={props.userProfile.photos.small == null ? userPhoto : props.userProfile.photos.small} height='100px' width='100px'/>
            <div>
                <div>{props.userProfile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    </>
}

export default UserInfo;