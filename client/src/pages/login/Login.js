import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Editbox from "../../components/editbox/Editbox";

import { faLock, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import ChampButton from "../../components/button/ChampButton";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

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

  return (
    <div className="login">
      {/* <Toast /> */}
      <form className="login__form" onSubmit={(e) => clickLogin(e)}>
        <h1>Login Page</h1>
        <Editbox
          name="mobile"
          placeholder="MOBILE NO"
          Icon={faMobileAlt}
          value={mobile}
          onChange={(e) => handleChange(e)}
        />
        <Editbox
          name="password"
          type="password"
          placeholder="PASSWORD"
          Icon={faLock}
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <input className="inputSubmit" type="submit" value="Login" />

        <ChampButton value="Login with OTP" variant="outlined" />
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
