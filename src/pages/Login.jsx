import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { login } from "../store/action/auth.action";
import { Link } from "react-router-dom";
import { CLEAR_LOGIN_ERRORS } from "../store/constant";
import HolyPennies from '../assets/images/HolyPennies-Logo.png';

function Login(props) {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { loginerror, token } = useSelector(state => state.auth)

  useEffect(() => {
    if (loginerror.length > 0) {

      loginerror.map(function (loginer) {
        toast.error(loginer.message);
        dispatch({ type: CLEAR_LOGIN_ERRORS, payload: [] });
      })

    };
    if (token) {
      window.location.href = "/dashboard";
      // history.push('/dashboard');
    }
    // eslint-disable-next-line
  }, [loginerror, token]);

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!data.email || !data.password) {
      toast.error("Email and password must be provided");
    } else {
      dispatch(login(data));
    }
    dispatch({ type: CLEAR_LOGIN_ERRORS, payload: [] });

  };

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div style={{ textAlign: 'center' }} className="brand-logo">
                    <img src={HolyPennies} alt="logo" />
                  </div>
                  <h4 style={{ textAlign: 'center' }}>Hello! let's get started</h4>
                  <h6 style={{ textAlign: 'center' }} className="font-weight-light">Sign in to continue.</h6>
                  <form onSubmit={onSubmit} className="pt-3">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={InputEvent}
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={InputEvent}
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <button className="
                        btn btn-block btn-primary btn-lg
                        font-weight-medium
                        auth-form-btn
                      " type="submit">
                      Sign in
                    </button>
                    <div
                      className="
                      my-2
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <Link to="/forgot-password" className="auth-link text-black"
                      >Forgot password?</Link>
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

export default Login;
