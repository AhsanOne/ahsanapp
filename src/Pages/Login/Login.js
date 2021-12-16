import logo from '../../ahsanapp-logo.png'
import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login__page">
            <div className="login__pageWrapper">
                <div className="login__pageHeader">
                    <img src={logo} alt="" className="login__pageHeaderLogo" />
                    <h1 className="login__pageHeaderTitle">Login</h1>
                </div>
                <div className="login__pageForm">
                    <form>
                        <div className="login__pageFormControl">
                            <input required type="email" name="email" placeholder="Enter email" />
                        </div>
                        <div className="login__pageFormControl">
                            <input required type="password" name="password" placeholder="Enter password" />
                        </div>
                        <div className="login__pageFormControl">
                            <a href="/" className="login__pageForgotPass">Forgot Password</a>
                        </div>
                        <div className="login__pageFormControl">
                            <input type="submit" value="Login" />
                        </div>
                        <div className="login__pageFormControl">
                            <Link to="/register" className="login__pageSignUpLink">Create an account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
