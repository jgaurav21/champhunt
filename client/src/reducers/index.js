import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import profile from "./profile";
import otpAuth from "./otpAuth";
export default combineReducers({ alert, auth, profile, otpAuth });
