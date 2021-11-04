import React, { useState, useEffect } from 'react'
import Layout from '../container/Layout'
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from "@material-ui/core/Avatar";
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../store/action/user.action';
import _ from 'lodash';

const Profile = (props) => {
    const dispatch = useDispatch();
    const [showEdit, setShowEdit] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const [viewAvatar, setViewAvatar] = useState(false)
    const [updateDetailClick, setUpdateDetailClick] = useState(false)
    let userData = _.cloneDeep(JSON.parse(localStorage.getItem('user'))) || {};
    const [data, setData] = useState({ name: userData.name, email: userData.email, mobile: userData.mobile })

    const handleUpload = () => {

    }
    const handleMouseHover = () => {

    }

    const onSubmit = async () => {
        if (!data.name) {
            toast.error("Name required");
            return;
        }
        else if (!data.email) {
            toast.error("Email required");
            return;
        } else if (!data.mobile) {
            toast.error("Mobile number required");
            return;
        }
        const resp = await dispatch(updateProfile(data))
        if (resp) {
            userData.email = data.email
            userData.mobile = data.mobile
            userData.name = data.name
            localStorage.setItem('user', JSON.stringify(userData))
            setUpdateDetailClick(false)
        }
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    return (
        <React.Fragment>
            <Layout>
                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12">
                                    <h3 id="steps-uid-0-h-0" tabIndex={-1} className="title current">{updateDetailClick ? "Update Profile Details" : "Profile"}</h3>
                                    {updateDetailClick ?
                                        <div>
                                            <form id="example-form" noValidate onSubmit={(e) => { e.preventDefault() }}>
                                                <section id="steps-uid-0-p-0" role="tabpanel" aria-labelledby="steps-uid-0-h-0" className="body current" aria-hidden="false">
                                                    <div className="form-group">
                                                        <label>Name Of Admin*</label>
                                                        <input type="text" name="name" value={data.name} className="form-control" onChange={onChange} placeholder="John" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email address*</label>
                                                        <input type="email" value={data.email} className="form-control" name="email" onChange={onChange} placeholder="John@example.com" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Mobile Number*</label>
                                                        <input type="number" value={data.mobile} name="mobile" className="form-control" onChange={onChange} placeholder="91+485818181" required />
                                                    </div>
                                                </section>
                                                <div style={{ display: 'flex' }}>
                                                    <button style={{ paddingLeft: "10px" }} onClick={() => setUpdateDetailClick(false)} style={{ width: '100%', marginTop: '10px', backgroundColor: '#fff', color: 'black' }} className="btn btn-secondary ">Cancel</button>
                                                    <button style={{ marginLeft: "10px", height: '38px', marginTop: "10px" }} onClick={onSubmit} className="btn btn-primary btn-block">Update details</button>
                                                </div>
                                            </form>
                                        </div>
                                        : <div className="row">
                                            <div className="col-lg-4 col-sm-12 grid-margin stretch-card">
                                                <div
                                                    className="circle"
                                                    style={{ width: '100%', textAlign: 'center', marginTop: '15px', cursor: 'pointer' }}
                                                >
                                                    <input
                                                        id='profile-upload-input'
                                                        type='file'
                                                        accept='.png,.jpg,.svg'
                                                        onChange={handleUpload}
                                                        hidden
                                                    />
                                                    <Avatar
                                                        onMouseEnter={handleMouseHover}
                                                        onMouseLeave={handleMouseHover}
                                                        imgProps={{ style: { padding: '10px' } }}
                                                        style={{ height: '200px', width: '210px', display: 'inline-flex', position: 'relative' }}
                                                        alt={'Hi'}
                                                        onClick={() =>
                                                            document
                                                                .getElementById('profile-upload-input')
                                                                .click()
                                                        }
                                                    >
                                                        {showLoader ?
                                                            <CircularProgress style={{ height: '25px', width: '25px', position: 'absolute', color: 'black' }} /> :
                                                            showEdit ?
                                                                <i style={{ position: 'absolute', color: 'black' }} className="fas fa-pen"></i>
                                                                : null
                                                        }

                                                        <img style={{ opacity: showEdit || showLoader ? '0.6' : '1', height: '210px' }} src={`https://holypenniesapi.herokuapp.com/images/${userData.image}`} className="profile-pic" id='jpg' />
                                                    </Avatar>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-sm-12" style={{ paddingTop: '50px' }}>
                                                <div style={{ margin: 'auto' }} className="profile-table table-striped">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <td>{userData.name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Email</th>
                                                                <td>{userData.email}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Contact Number</th>
                                                                <td>{userData.mobile}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Action(s)</th>
                                                                <td>
                                                                    <button onClick={() => { setUpdateDetailClick(true) }} className="btn btn-primary btn-block">Update details</button>
                                                                </td>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment >
    )
}

export default withRouter(Profile)