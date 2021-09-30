import React, { useState } from 'react'
import Layout from '../container/Layout'
import { toast } from 'react-toastify';
import { ResetUserPassword } from '../store/action/user.action'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
const ResetPassword = (props) => {
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

    const onSubmit = async () => {
        let err = validate(data)
        if (err) {
            toast.error(err);
            return
        }
        const resp = await dispatch(ResetUserPassword({ password: data.password, repeat_password: data.confirmPassword }));
        if (resp) {
            setData({ password: '', confirmPassword: '' })
        }
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <React.Fragment>
            <Layout>
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <form id="example-form" noValidate onSubmit={(e) => { e.preventDefault() }}>
                                        <h3 id="steps-uid-0-h-0" tabIndex={-1} className="title current">Reset Password</h3>
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
                                        <button onClick={() => props.history.goBack()} style={{ width: '100%', marginTop: '10px', backgroundColor: '#fff', color: 'black' }} className="btn btn-secondary ">Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default withRouter(ResetPassword)