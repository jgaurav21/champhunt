import React from "react";
import PropTypes from "prop-types";
import "./Canvas.css";
import Editbox from "../editbox/Editbox";
import { faLock, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import ChampButton from "../button/ChampButton";

const Canvas = (props) => {
  return (
    <div className="canvas">
      <div className="canvas__glass">
        {/* <div className="canvas__image"></div> */}
        <form className="canvas__form">
          <Editbox
            name="mobile"
            placeholder="MOBILE NO"
            width="50%"

            //   onChange={(e) => handleChange(e)}
          />

          <Editbox
            name="password"
            placeholder="PASSWORD"
            width="50%"
            type="password"
            color="rgb(233, 233, 233)"
          />
          <div className="form__buttons">
            <input className="inputSubmit" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

Canvas.propTypes = {};

export default Canvas;
