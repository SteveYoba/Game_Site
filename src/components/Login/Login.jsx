import React from 'react'

const LoginForm = () => {
    return <form>
    <div><input placeholder = {'Login'}></input></div>
    <div><input placeholder = {'Password'}></input></div>
    <div><input type = {'checkbox'}/>remember me</div>
    <div><button>Login</button> </div>
</form>
}

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

export default Login