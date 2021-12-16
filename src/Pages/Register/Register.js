import logo from '../../ahsanapp-logo.png'
import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="register__page">
            <div className="register__pageWrapper">
                <div className="register__pageHeader">
                    <img src={logo} alt="" className="register__pageHeaderLogo" />
                    <h1 className="register__pageHeaderTitle">Register</h1>
                </div>
                <div className="register__pageForm">
                    <form>
                        <div className="register__pageFormControl">
                            <input required type="text" name="name" placeholder="Enter full name" />
                        </div>
                        <div className="register__pageFormControl">
                            <input required type="email" name="email" placeholder="Enter email" />
                        </div>
                        <div className="register__pageFormControl">
                            <input required type="password" name="password" placeholder="Enter password" />
                        </div>
                        <div className="register__pageFormControl">
                            <div className="register__pagePtCheck">
                                <input type="checkbox" name="ptcheck" />
                                <span>I agree to the </span> <Link to="/">Privacy</Link> & <Link to="/">Terms of Service</Link>
                            </div>
                        </div>
                        <div className="register__pageFormControl">
                            <input type="submit" value="Register" />
                        </div>
                        <div className="register__pageFormControl register_pageSignIn">
                            <span>Already have an account?</span>
                            <Link to="/" className="register__pageSignInLink">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
