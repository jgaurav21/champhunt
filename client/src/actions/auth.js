import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_USER,
} from "./types";
import { setAlert } from "./alert";
import { useGoogleLogin } from "react-google-login";

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

const clientId =
  "618867215095-k3j6e2v0v4dqjijpsq451rbjpu5u4kqj.apps.googleusercontent.com";
export const googleAuth = () => async (dispatch) => {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });
};
