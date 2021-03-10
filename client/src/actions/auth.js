import axios from "axios";
import { REGISTER_FAIL, REGISTER_USER } from "./types";
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
    localStorage.setItem("token", res.data);
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
