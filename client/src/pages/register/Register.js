import React, { useState } from "react";
import PropTypes from "prop-types";
import Editbox from "../../components/editbox/Editbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

// import ChampButton from "../../components/button/ChampButton";
import "../login/Login.css";

import { faLock, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import Toast from "../../components/alert/alert";
import { register } from "../../actions/auth";

const Register = ({ register }) => {
  const [registerData, setRegisterData] = useState({
    mobile: "",
    password: "",
    password2: "",
  });

  const { mobile, password, password2 } = registerData;

  const setValue = (e) => {
    e.preventDefault();
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const clickRegister = () => {
    // e.preventDefault();
    register(mobile, password, password2);
  };

  return (
    <>
      {<Toast />}
      <div className="login">
        <div className="register__backgroundImage"></div>

        <form className="login__form glass" onSubmit={clickRegister}>
          <h1>Register</h1>
          <Editbox
            name="mobile"
            placeholder="MOBILE NO"
            Icon={faMobileAlt}
            value={mobile}
            onChange={(e) => setValue(e)}
            color="rgba(255, 255, 255, 0.5)"
          />
          <Editbox
            name="password"
            placeholder="PASSWORD"
            type="password"
            Icon={faLock}
            value={password}
            onChange={(e) => setValue(e)}
            color="rgba(255, 255, 255, 0.5)"
          />
          <Editbox
            name="password2"
            placeholder="CONFIRM PASSWORD"
            type="password"
            Icon={faLock}
            value={password2}
            onChange={(e) => setValue(e)}
            color="rgba(255, 255, 255, 0.5)"
          />
          <input className="inputSubmit" type="submit" value="Register" />

          <div className="login__social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </div>
        </form>
      </div>
    </>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(null, { register })(Register);
