import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { ResetUserPassword } from "../../store/action/user.action";
import { Link, withRouter } from "react-router-dom";
import { CLEAR_LOGIN_ERRORS } from "../../store/constant";
import HolyPennies from '../../assets/images/HolyPennies-Logo.png';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function ResetPassword(props) {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({ password: '', confirmPassword: '' })

    const validate = values => {
        let error = '';

        let regx = new RegExp(/(?=^.{8,64}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])(?!.*\s).*$/);

        if (!values.password) {
            error = 'Please Enter Current Password.';
        } else if (!values.confirmPassword) {
            error = 'Please Enter Confirm Password.';
        }
        else if (values.password !== values.confirmPassword) {
            error = 'Password and Confirm Password should be same.';
        }
        // else if (!regx.test(values.password)) {
        //     error = 'Password must be  of 8 characters, must have one number, one lowercase character, one uppercase character and one special character';
        // } 

        return error;
    };

    const onSubmit = async (event) => {
        let id = props.match.params && props.match.params.id
        let err = validate(data)
        if (err) {
            toast.error(err);
            return
        }
        const resp = await dispatch(ResetUserPassword({ password: data.password, repeat_password: data.confirmPassword, id: id }));
        if (resp) {
            setData({ password: '', confirmPassword: '' })
        }
    };


    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className="reset-password-wrapper container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                    <div style={{ textAlign: 'center', marginBottom: '15px' }} className="brand-logo">
                                        <img src={HolyPennies} alt="logo" />
                                    </div>
                                    <h4 style={{ textAlign: 'center' }}>Reset Password</h4>
                                    <form id="example-form" noValidate onSubmit={(e) => { e.preventDefault() }}>
                                        <section id="steps-uid-0-p-0" role="tabpanel" aria-labelledby="steps-uid-0-h-0" className="body current" aria-hidden="false">
                                            <div style={{ position: 'relative' }} className="form-group">
                                                <label>New Password*</label>
                                                <input value={data.password} type={showPassword ? "text" : "password"} className="form-control" name="password" placeholder="New password" onChange={onChange} required />
                                                {showPassword ?
                                                    <VisibilityOffIcon style={{ position: 'absolute', top: '43px', right: '10px' }} onClick={() => { setShowPassword(false) }} /> :
                                                    <VisibilityIcon style={{ position: 'absolute', top: '43px', right: '10px' }} onClick={() => { setShowPassword(true) }} />}
                                            </div>
                                            <div style={{ position: 'relative' }} className="form-group">
                                                <label>Confirm Password*</label>
                                                <input value={data.confirmPassword} type={showConfirmPassword ? "text" : "password"} className="form-control" name="confirmPassword" placeholder="Confirm password" onChange={onChange} required />
                                                {showConfirmPassword ?
                                                    <VisibilityOffIcon style={{ position: 'absolute', top: '43px', right: '10px' }} onClick={() => { setShowConfirmPassword(false) }} />
                                                    : <VisibilityIcon style={{ position: 'absolute', top: '43px', right: '10px' }} onClick={() => { setShowConfirmPassword(true) }} />}

                                            </div>
                                        </section>
                                        <button onClick={onSubmit} className="btn btn-primary btn-block">Reset Password</button>
                                        <div
                                            style={{ width: '100%', marginTop: '10px', textAlign: 'center' }}
                                        >
                                            <Link to="/" className="auth-link text-black">Back to login</Link>
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

export default withRouter(ResetPassword);
