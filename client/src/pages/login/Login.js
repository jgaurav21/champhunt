import React from "react";
// import PropTypes from "prop-types";
import "./Login.css";
import Editbox from "../../components/editbox/Editbox";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import ChampButton from "../../components/button/ChampButton";
// import CountrySelect from "../../components/countrySelect/CountrySelect";
import "./Login.css";

function Login(props) {
  const otpLogin = (
    <div>
      <Editbox type="password" placeholder="ENTER OTP" Icon={faLock} />
    </div>
  );

  return (
    <div className="login">
      <form className="login__form">
        <h1>Login Page</h1>
        <Editbox name="mobile" placeholder="MOBILE NO" Icon={faMobileAlt} />
        <Editbox
          name="password"
          type="password"
          placeholder="PASSWORD"
          Icon={faLock}
        />
        <ChampButton value="Login with OTP" variant="outlined" />
        {/* <ChampButton value="Login" variant="contained" /> */}
        <input className="inputSubmit" type="submit" value="Login" />
        {/* <CountrySelect /> */}
      </form>
    </div>
  );
}

// Login.propTypes = {};

export default Login;
