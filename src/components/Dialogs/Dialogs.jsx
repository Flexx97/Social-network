import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/textarea";
import {required} from "../utils/validators";


const Dialogs = (props) => {

    let submit = (value) => {
        props.addText(value)
    }

    let newData =
        props.Data.map(dialog =>
            (<DialogsItem name={dialog.name} id={dialog.id}/>)
        );

    let newMessage =
        props.newMessageWay.map(messages =>
            (<Message message={messages.message} id={messages.id}/>)
        );

    return (
        <div className={dialogs.message}>
            <div className={dialogs.dialogs}>
                {newData}
            </div>
            <div className={dialogs.chats}>
                {newMessage}
                <DialogsReduxForm onSubmit={submit} />
            </div>
        </div>
    )
};

const SendMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} type='textarea' name='messageText' className={dialogs.send} validate={[required]} />
            <button className={dialogs.btn}>send</button>   
        </form>
    )
}

let DialogsReduxForm = reduxForm({
    form: 'messages'
})(SendMessage)




export default Dialogs;