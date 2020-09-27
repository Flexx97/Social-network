import React from 'react'
import {Field, reduxForm} from "redux-form";
import {getLogIn} from "../../redux/Auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./login.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Username or Password' component='input' type='textarea' name='login' className={style.login}/>
            </div>
            <div>
                <Field placeholder='Password' component='input' type='password' name='password' className={style.password}/>
            </div>
            <div>
                <Field component='input' type='checkbox' name='rememberMe'/>
                Remember me
            </div>
            <div>
                {props.error}
            </div>
            <div>
                <button className={style.btn}>Log In</button>
            </div>
        </form>

    )
}

let LoginReduxForm = reduxForm({
    form: 'Login'
})(LoginForm)

const Login = (props) => {
     let submit = (value) => {
         props.getLogIn(value.login, value.password, value.rememberMe)
    }
    if (props.isAuth === true){
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={submit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {getLogIn})(Login)