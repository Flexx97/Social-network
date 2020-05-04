import React from 'react';
import Post from './Post/Post';
import my from './myPosts.module.css';

const MyPosts = (props) => {
    let newPostDate =
        props.newPostWay.map(PostData =>
            (<Post message={PostData.message} like={PostData.like}/>)
        );

    let Text = React.createRef();

    let ChangeAction = () => {
        let add = Text.current.value
        props.ChangeAction(add)
    };

    return <div>
        <div className={my.myp}>
            <div>New posts</div>
            <textarea ref={Text} className={my.textarea} onChange={ChangeAction} value={props.PostText}/>
            <button className={my.btn} onClick={ props.onAddPost }>send</button>
        </div>
        <div className={my.post}>My post</div>
        {newPostDate}
    </div>
};

export default MyPosts;