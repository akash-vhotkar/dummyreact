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
// import { useSelector, useDispatch } from "react-redux";

function App() {
  // const {token,user} = useSelector(state => state.auth)
  
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/addhow" component={Addhow} />
        <PrivateRoute exact path="/viewhow" component={Viewhow} />
        <PrivateRoute exact path="/viewdonner" component={Alldonner} />
        <PrivateRoute exact path="/viewrevnue" component={Viewrevnue} />
        

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
