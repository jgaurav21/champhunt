import React, { useState } from "react";
import PropTypes from "prop-types";
import Editbox from "../../components/editbox/Editbox";
// import ChampButton from "../../components/button/ChampButton";
import "../login/Login.css";

import {
  faCheckCircle,
  faLock,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
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

  const handleReset = (e) => {
    e.preventDefault();
    setRegisterData({
      ...registerData,
      mobile: "",
      password: "",
      password2: "",
    });
  };

  return (
    <>
      {<Toast />}
      <div className="login">
        <form className="login__form" onSubmit={clickRegister}>
          <h1>Register</h1>
          <Editbox
            name="mobile"
            placeholder="MOBILE NO"
            Icon={faMobileAlt}
            value={mobile}
            onChange={(e) => setValue(e)}
          />
          <Editbox
            name="password"
            placeholder="PASSWORD"
            type="password"
            Icon={faLock}
            value={password}
            onChange={(e) => setValue(e)}
          />
          <Editbox
            name="password2"
            placeholder="CONFIRM PASSWORD"
            type="password"
            Icon={faLock}
            value={password2}
            onChange={(e) => setValue(e)}
          />
          <input className="inputSubmit" type="submit" value="Register" />
        </form>
      </div>
    </>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(null, { register })(Register);
