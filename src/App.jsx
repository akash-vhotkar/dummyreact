import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './config/PrivateRoute'
import Addhow from "./pages/Addhow";
import Viewhow from "./pages/Viewhow";
import Alldonner from "./pages/Alldonner";
import Viewrevnue from "./pages/Viewrevnue";
import DonnerRevenue from "./pages/DonnerRevenue";
import Fullrevenue from "./pages/Fullrevenue";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from './pages/ForgotPassword';
import ResetPasswordLoginPage from './pages/ResetPasswordLoginPage/ResetPasswordLoginPage';
// import Profile from './pages/Profile';
// import { useSelector, useDispatch } from "react-redux";

function App() {
  // const {token,user} = useSelector(state => state.auth)

  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/hp/reset/:id" component={ResetPasswordLoginPage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/reset-password" component={ResetPassword} />
        <PrivateRoute exact path="/addhow" component={Addhow} />
        {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
        <PrivateRoute exact path="/viewhow" component={Viewhow} />
        <PrivateRoute exact path="/viewdonner" component={Alldonner} />
        <PrivateRoute exact path="/viewrevnue" component={Viewrevnue} />
        <PrivateRoute exact path="/donnerrevnue" component={DonnerRevenue} />
        <PrivateRoute exact path="/fullrevennue" component={Fullrevenue} />


        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
