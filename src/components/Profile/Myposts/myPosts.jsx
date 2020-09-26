import React from 'react';
import Post from './Post/Post';
import my from './myPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {required, maxLength15} from "../../utils/validators";
import {Textarea} from "../../common/textarea";

const MyPosts = (props) => {
    let newPostDate =
        props.newPostWay.map(PostData =>
            (<Post message={PostData.message} like={PostData.like}/>)
        )
    let submit = (value) => {
        props.addPostActionCreator(value)
    }

    return <div>
        <div className={my.myp}>
            <div>New posts</div>
            <PostReduxForm onSubmit={submit}/>
        </div>
        {newPostDate}
    </div>
}

const myPostSendMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} type='textarea' name='posText' className={my.textarea} validate={[required, maxLength15]}/>
            <div>
                <button className={my.btn}>send</button>
            </div>
        </form>
    )
}

let PostReduxForm = reduxForm({
    form: 'Post'
})(myPostSendMessage)


export default MyPosts;

