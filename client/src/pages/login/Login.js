import React from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Editbox from "../../components/editbox/Editbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Login(props) {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <Editbox placeholder="Test" Icon={faUser} />
    </div>
  );
}

Login.propTypes = {};

export default Login;
