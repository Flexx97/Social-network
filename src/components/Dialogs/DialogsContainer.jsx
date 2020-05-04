import React from 'react';
import {addText, updateMessageText} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageWay: state.messagePage.MesData,
        updateMessage: state.messagePage.updateMessage,
        Data: state.messagePage.Data
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessageWay: () => {
            dispatch(addText())
        },
        changeMessageWay: (message) => {
            dispatch(updateMessageText(message))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;