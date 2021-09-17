import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { login } from "../store/action/auth.action";
import { Link, useHistory } from "react-router-dom";
import { CLEAR_LOGIN_ERRORS } from "../store/constant";
import HolyPennies from '../assets/images/HolyPennies-Logo.png';

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { loginerror, token } = useSelector(state => state.auth)

  useEffect(() => {
    if (loginerror.loginerror !== "") {
      toast.error(loginerror.message);
    }
    if (token) {
      // window.location.href = "/dashboard";
      history.push('/dashboard');
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
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth px-0">
            <div class="row w-100 mx-0">
              <div class="col-lg-4 mx-auto">
                <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div class="brand-logo">
                    <img src={HolyPennies} alt="logo" />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 class="font-weight-light">Sign in to continue.</h6>
                  <form onSubmit={onSubmit} class="pt-3">
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={InputEvent}
                        class="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={InputEvent}
                        class="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <button class="
                        btn btn-block btn-primary btn-lg
                        font-weight-medium
                        auth-form-btn
                      " type="submit">
                      Sign in
                    </button>
                    <div
                      class="
                      my-2
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <div class="form-check">
                        <label class="form-check-label text-muted">
                          <input type="checkbox" class="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <a href="#" class="auth-link text-black"
                      >Forgot password?</a
                      >
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
