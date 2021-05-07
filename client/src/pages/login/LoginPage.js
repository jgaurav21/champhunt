import React from "react";
import PropTypes from "prop-types";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../components/canvas/Canvas.css";
import "./LoginPage.css";
import { useState } from "react";
import { login } from "../../actions/auth";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

const LoginPage = ({ login }) => {
  const [loginData, setLoginData] = useState({ mobile: "", password: "" });
  const { mobile, password } = loginData;

  const handleChange = (e) => {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(mobile, password);
    setLoginData({ mobile: "", password: "" });
  };

  return (
    <div className="canvas">
      <div className="canvas__glass">
        <div className="loginPage">
          <form className="loginPage__form" onSubmit={(e) => handleSubmit(e)}>
            <div className="loginPage__form__mobile">
              <label htmlFor="mobileNo">MOBILE NO</label>
              <input
                type="text"
                placeholder="MOBILE NO"
                name="mobile"
                value={mobile}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="loginPage__form__password">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                placeholder="PASSWORD"
                name="password"
                value={password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="loginPage__button">
              <input type="submit" value="LOGIN" />
            </div>
            <div className="loginPage__socialLogin">
              {/* <FontAwesomeIcon icon={faGoogle} /> */}
              <GoogleLogin />
              <Link to={"/MobileLogin"}>
                <FontAwesomeIcon icon={faPhone} />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(LoginPage);
