import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let mes = React.createRef();


    let changeMessage = () => {
        let message = mes.current.value
        props.changeMessageWay(message)
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
                <div>
                    <textarea onChange={ changeMessage } ref={mes} className={dialogs.send} value={props.updateMessage}/>
                    <button onClick={props.addMessageWay} className={dialogs.btn}>send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;