import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import "./assets/material-dashboard.css?v=2.1.2";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './config/PrivateRoute'
// import { useSelector, useDispatch } from "react-redux";

function App() {
  // const {token,user} = useSelector(state => state.auth)

  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
