import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Editbox from "../../components/editbox/Editbox";

import { faLock, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import ChampButton from "../../components/button/ChampButton";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import googleIcon from "../../images/google2.png";
import RadioButton from "../../components/radio/Radio";

const Login = ({ login }) => {
  const [loginData, setLoginData] = useState({
    mobile: "",
    password: "",
  });

  const { mobile, password } = loginData;

  const handleChange = (e) => {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const clickLogin = (e) => {
    e.preventDefault();
    login(mobile, password);
  };
  const loginType = ["Password", "OTP"];

  return (
    <div className="login">
      {/* <Toast /> */}
      <div className="login__backgroundImage"></div>
      <form className="login__form glass" onSubmit={(e) => clickLogin(e)}>
        <h1>Login Page</h1>
        <Editbox
          name="mobile"
          placeholder="MOBILE NO"
          Icon={faMobileAlt}
          value={mobile}
          onChange={(e) => handleChange(e)}
        />
        <RadioButton options={loginType} />
        <Editbox
          name="password"
          type="password"
          placeholder="PASSWORD"
          Icon={faLock}
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <input className="inputSubmit" type="submit" value="Login" />

        <ChampButton
          value="Login with OTP"
          variant="contained"
          color="secondary"
        />
        <div className="login__social">
          {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
          {/* <FontAwesomeIcon icon={faGoogle} size="2x" /> */}
          <img src={googleIcon} className="login__social__google" />
        </div>
        <div className="login__signUp">
          <label>Not Registered Yet!!</label>
          <Link to="/register">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
