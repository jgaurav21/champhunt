import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_USER,
} from "./types";
import { setAlert } from "./alert";

export const register = (mobile, password, password2) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = { mobile, password, password2 };

    const res = await axios.post("/api/users", body, config);

    localStorage.setItem("token", res.data.token);
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
  } catch (err) {
    const captured = err.response.data.errors;

    if (captured) {
      captured.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (mobile, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = { mobile, password };

    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const captured = err.response.data.errors;

    if (captured) {
      captured.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const loginWithGoogle = (user) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(user);

    const res = await axios.post("/api/user/createToken", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const sendOtp = (mobile) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(mobile);

    const response = await axios.post("/api/sendOtp", body, config);
  } catch (err) {}
};
