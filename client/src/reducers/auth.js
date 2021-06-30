import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_USER,
  GOOGLE_LOGIN,
  GOOGLE_LOGOUT,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  loading: true,
  token: null,
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload,
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        isAuthenticated: true,
        loading: false,
        token: payload.token,
      };
    case LOGIN_FAILED:
      localStorage.removeItem("token");

      return {
        isAuthenticated: false,
        loading: false,
        token: null,
      };
    case GOOGLE_LOGIN:
      return {
        isAuthenticated: true,
        loading: false,
        token: payload.token,
      };

    default:
      return { ...state };
  }
};

export default auth;
