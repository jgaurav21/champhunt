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

import { Link, Redirect } from "react-router-dom";
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
    <div className="canvas__ball">
      <div className="loginPage__title">WELCOME TO CHAMPHUNT</div>
      {/* <div className="loginPage__subtitle">CHAMP LOGIN</div> */}
      <div className="card">
        <div className="canvas__bat"></div>
        <div className="face">
          <div className="loginPage">
            <form className="loginPage__form" onSubmit={(e) => handleSubmit(e)}>
              <div className="loginPage__form__mobile">
                {/* <label htmlFor="mobileNo">MOBILE NO</label> */}
                <input
                  className="inputBox"
                  type="text"
                  placeholder="MOBILE NO"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="loginPage__form__password">
                {/* <label htmlFor="password">PASSWORD</label> */}
                <input
                  className="inputBox"
                  type="password"
                  placeholder="PASSWORD"
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="loginPage__button">
                <Link to="/home">
                  <input type="submit" value="LOGIN" className="inputSubmit" />
                </Link>
              </div>
              <div className="loginPage__socialLogin">
                {/* <FontAwesomeIcon icon={faGoogle} /> */}
                <GoogleLogin />
                <Link to={"/MobileLogin"}>
                  <FontAwesomeIcon icon={faPhone} />
                </Link>
              </div>
              <div className="loginPage__register">
                <label>NOT A CHAMPION YET</label>
              </div>
              <div className="loginPage__register">
                {/* <Link to="/register"> */}
                {/* <input
                  type="submit"
                  className="inputSubmit"
                  value="Register"
                  // onClick={() => {
                  //   <Redirect to="/registerPage" />;
                  // }}
                /> */}
                <Link to="/registerPage">
                  <button className="inputSubmit">REGISTER</button>
                </Link>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(LoginPage);
