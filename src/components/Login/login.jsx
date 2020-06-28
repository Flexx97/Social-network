import React from 'react'
import {Field, reduxForm} from "redux-form";
import {getLogIn} from "../../redux/Auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login' component='input' type='textarea' name='login'/>
            </div>
            <div>
                <Field placeholder='Password' component='input' type='textarea' name='password'/>
            </div>
            <div>
                <Field component='input' type='checkbox' name='rememberMe'/>
                Remember me
            </div>
            <div>
                {props.error}
            </div>
            <div>
                <button>Log In</button>
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