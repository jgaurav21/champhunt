import React from "react";
import PropTypes from "prop-types";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../components/canvas/Canvas.css";
import "./LoginPage.css";
import { useState } from "react";
import { login, sendOtp, verifyOtp } from "../../actions/auth";
import { connect } from "react-redux";

const MobileLogin = ({ sendOtp, verifyOtp, session }) => {
  const [loginData, setLoginData] = useState({
    mobile: "",
    otp: "",
    disableOtp: true,
  });
  const { mobile, otp, disableOtp } = loginData;

  const handleChange = (e) => {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const clickGetOtp = (e) => {
    e.preventDefault();
    sendOtp(mobile);
    setLoginData({ ...loginData, disableOtp: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyOtp(session, otp, mobile);
    setLoginData({ mobile: "", password: "" });
  };

  return (
    <div className="canvas__ball">
      <div className="loginPage__title">WELCOME TO CHAMPHUNT</div>
      {/* <div className="loginPage__subtitle">CHAMP LOGIN</div> */}
      <div className="card">
        <div className="canvas__bat"></div>
        <div className="face">
          <div className="loginPage">
            <form className="loginPage__form" onSubmit={(e) => handleSubmit(e)}>
              <div className="loginPage__form__mobile">
                <label htmlFor="mobileNo">MOBILE NO</label>
                <input
                  className="inputBox"
                  type="text"
                  placeholder="MOBILE NO"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="loginPage__button">
                <button className="inputSubmit" onClick={(e) => clickGetOtp(e)}>
                  GET OTP
                </button>
              </div>
              <div className="loginPage__form__password">
                <label htmlFor="ENTER OTP">ENTER OTP</label>
                <input
                  className="inputBox"
                  type="text"
                  placeholder="ENTER OTP"
                  name="otp"
                  value={otp}
                  disabled={disableOtp}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="loginPage__button">
                <input
                  className="inputSubmit"
                  type="submit"
                  value="LOGIN"
                  disabled={disableOtp}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileLogin.propTypes = {
  sendOtp: PropTypes.func.isRequired,
  verifyOtp: PropTypes.func.isRequired,
  session: PropTypes.string,
};

const mapStateToProps = (state) => ({
  session: state.otpAuth.session,
});

export default connect(mapStateToProps, { sendOtp, verifyOtp })(MobileLogin);
