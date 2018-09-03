import {combineReducers} from "redux";
import userInfo from "./userInfoReducer"
import todos from "./todoReducer"
import userLogin from "./userLoginReducer"
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    userLogin,
    userInfo,
    todos,
    routing:routerReducer
});
export default rootReducer

