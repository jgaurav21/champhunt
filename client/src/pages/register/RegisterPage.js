import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../components/canvas/Canvas.css";
import "../login/LoginPage.css";

import { connect } from "react-redux";
import { register, sendOtp, verifyOtp } from "../../actions/auth";
import { verify } from "jsonwebtoken";

const RegisterPage = ({
  sendOtp,
  verifyOtp,
  session,
  register,
  otpVerified,
}) => {
  const [registerData, setRegisterData] = useState({
    mobile: "",
    otp: "",
    password: "",
    confirmPassword: "",
    disableOtp: true,
    disablePassword: true,
  });
  const {
    mobile,
    otp,
    password,
    confirmPassword,
    disableOtp,
    disablePassword,
  } = registerData;

  //const otpRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const clickSendOTP = (e) => {
    e.preventDefault();
    sendOtp(mobile);
    setRegisterData({ ...registerData, disableOtp: false });
  };

  const clickVerifyOtp = (e) => {
    e.preventDefault();
    verifyOtp(session, otp, mobile);
    //verifyOtp("4b8f553f-35f0-4312-9584-497aba24b14c", "786456", "9561303989");
    setRegisterData({ ...registerData, disablePassword: false });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    if (!otpVerified) console.log("OTP verification not complete");
    else {
      if (password === confirmPassword)
        register(mobile, password, confirmPassword);
      else console.log("Passwords donot match");
    }
  };

  return (
    <div className="canvas">
      <div className="canvas__glass">
        <div className="loginPage">
          <form className="loginPage__form" onSubmit={(e) => clickSubmit(e)}>
            <div className="mobile">
              <label htmlFor="mobile">MOBILE</label>
              <input
                type="text"
                placeholder="MOBILE"
                name="mobile"
                value={mobile}
                maxLength="10"
                onChange={(e) => handleChange(e)}
              />
              <button onClick={(e) => clickSendOTP(e)}>SEND OTP</button>
            </div>

            <div className="OTP">
              <label htmlFor="OTP">ENTER OTP</label>
              <input
                type="text"
                placeholder="ENTER OTP"
                name="otp"
                value={otp}
                disabled={disableOtp}
                onChange={(e) => handleChange(e)}
              />
              <button disabled={disableOtp} onClick={(e) => clickVerifyOtp(e)}>
                VERIFY OTP
              </button>
            </div>

            <div className="registerPage__password">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                placeholder="PASSWORD"
                disabled={disablePassword}
                name="password"
                value={password}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="registerPage__confirmPassword">
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <input
                type="password"
                placeholder="CONFIRM PASSWORD"
                disabled={disablePassword}
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="loginPage__button">
              <input
                type="submit"
                value="REGISTER"
                disabled={disablePassword}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

RegisterPage.propTypes = {
  sendOtp: PropTypes.func.isRequired,
  verifyOtp: PropTypes.func.isRequired,
  session: PropTypes.string,
  register: PropTypes.func.isRequired,
  otpVerified: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  session: state.otpAuth.session,
  otpVerified: state.otpAuth.otpVerified,
});

export default connect(mapStateToProps, { sendOtp, verifyOtp, register })(
  RegisterPage
);
