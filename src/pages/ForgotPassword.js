import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { forgotPassword } from "../store/action/user.action";
import { Link, withRouter } from "react-router-dom";
import { CLEAR_LOGIN_ERRORS } from "../store/constant";
import HolyPennies from '../assets/images/HolyPennies-Logo.png';

function ForgotPassword(props) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const InputEvent = (event) => {
        setEmail(event.target.value)
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!email) {
            toast.error("Email must be provided");
        } else {
            const resp = await dispatch(forgotPassword({ email }))
            if (resp) {
                setEmail('')
            }
        }
    };

    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                    <div style={{ textAlign: 'center', marginBottom: '15px' }} className="brand-logo">
                                        <img src={HolyPennies} alt="logo" />
                                    </div>
                                    <h4 style={{ textAlign: 'center' }}>Forgot Password</h4>
                                    <form onSubmit={onSubmit} className="pt-3">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={InputEvent}
                                                className="form-control form-control-lg"
                                                id="exampleInputEmail1"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <button
                                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                            type="submit"
                                        >
                                            Forgot Password
                                        </button>
                                        <div
                                            style={{ width: '100%', marginTop: '10px', textAlign: 'center' }}
                                        >
                                            <Link to="/" className="auth-link text-black">Back to login?</Link>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(ForgotPassword);
