import {
  GENERATE_OTP_SUCCESS,
  VERIFY_OTP_FAILED,
  VERIFY_OTP_SUCCESS,
} from "../actions/types";

const initialState = {
  session: null,
  otpVerified: false,
  mobile: null,
  loading: true,
};

export const otpAuth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GENERATE_OTP_SUCCESS:
      return {
        session: payload.data.data.Details,
        mobile: payload.mobile,
        loading: false,
      };

    case VERIFY_OTP_SUCCESS:
      return {
        otpVerified: true,
        loading: false,
      };
    case VERIFY_OTP_FAILED:
      return {
        otpVerified: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default otpAuth;
