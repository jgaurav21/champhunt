import { REGISTER_FAIL, REGISTER_USER } from "../actions/types";

const initialState = {
  isAuthenticated: null,
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
    default:
      return { ...state };
  }
};

export default auth;
