import React from 'react';
import {addText} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRedirectLogin} from "../HOC-isAuth/hocRedirectLogin";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        newMessageWay: state.messagePage.MesData,
        Data: state.messagePage.Data
    }
}

 export default compose(connect(mapStateToProps, {addText}),
    withRedirectLogin
)(Dialogs)
