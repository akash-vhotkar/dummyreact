import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AuthReducer from "./reducer/AuthReducer";
import UserReducer from "./reducer/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { ENVIROMENT } from '../config/Env';


const rootReducer = combineReducers({
    auth: AuthReducer,
    UserReducer
})

const middleware = [thunkMiddleware];

const Store = createStore(
    rootReducer,
    ENVIROMENT === "DEV" ? composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware)
);

export default Store;