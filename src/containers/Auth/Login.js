import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { FaGooglePlus } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //JSX
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 login-text">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input type="text" className="form-control " placeholder="Enter your username" />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <input type="password" className="form-control " placeholder="Enter your password" />
                        </div>
                        <div className="col-12 ">
                            <button className='login-btn'>
                                Login
                            </button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="">Or Sign in with:</span>
                        </div>
                        <div className="col-12 social-login">
                            <span className="google-icon"><FaGooglePlus /></span>
                            <span className="facebook-icon"><FaFacebook /></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
