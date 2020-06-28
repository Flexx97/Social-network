import React from 'react';
import UserInfo from "./UserInfo/userinfo";
import MyPostsContainer from "./Myposts/myPostsContainer";

const Profile = (props) => {
    return <div>
            <UserInfo userProfile={props.userProfile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
};

export default Profile;