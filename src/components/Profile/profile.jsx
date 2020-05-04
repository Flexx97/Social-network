import React from 'react';
import profile from './profile.module.css';
import UserInfo from "./UserInfo/userinfo";
import MyPostsContainer from "./Myposts/myPostsContainer";

const Profile = (props) => {
    return <div>
            <UserInfo userProfile={props.userProfile} />
            <MyPostsContainer
                store={props.store}
            />
        </div>
};

export default Profile;