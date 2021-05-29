import React from "react";
import PropTypes from "prop-types";

import "./Rightbar.css";
import { Add, Cake } from "@material-ui/icons";
const Righbar = (props) => {
  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        <div className="rightbarBirthday">
          <Cake htmlColor="Pink" className="cakeIcon" />
          <p className="birthdayText">
            <b>Virat Kohli</b> and <b>3 other firends</b> have birthday today.
          </p>
        </div>

        <div className="onlineFriends">
          <span className="righbarSectionHeader">ONLINE CHAMPS</span>
          <hr className="rightbarHr" />
          <div className="onlineFriend">
            <img
              src={
                "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900"
              }
              alt=""
              className="onlineFriendImg"
            />
            <div className="onlineFriendStatus"></div>
            <span className="onlineFriendName">Virat Kohli</span>
          </div>

          <div className="onlineFriend">
            <img
              src={
                "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900"
              }
              alt=""
              className="onlineFriendImg"
            />
            <div className="onlineFriendStatus"></div>
            <span className="onlineFriendName">Virat Kohli</span>
          </div>

          <div className="onlineFriend">
            <img
              src={
                "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900"
              }
              alt=""
              className="onlineFriendImg"
            />
            <div className="onlineFriendStatus"></div>
            <span className="onlineFriendName">Virat Kohli</span>
          </div>

          <div className="onlineFriend">
            <img
              src={
                "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900"
              }
              alt=""
              className="onlineFriendImg"
            />
            <div className="onlineFriendStatus"></div>
            <span className="onlineFriendName">Virat Kohli</span>
          </div>
        </div>

        <div className="friendSuggestions">
          <span className="righbarSectionHeader">CHAMP SUGGESTIONS</span>
          <hr className="rightbarHr" />

          <div className="friendSuggestion">
            <div className="friendSuggestionLeft">
              <img
                src={
                  "https://gumlet.assettype.com/swarajya%2F2020-08%2Fbbab0bff-d042-4a7e-bd93-3330f0b116ed%2FEfd9DtmUYAIaAyx.jpg?w=640&q=75&auto=format%2Ccompress"
                }
                alt=""
                className="friendSuggestionImg"
              />
              <span className="friendSuggestionName">Mahendra Singh Dhoni</span>
            </div>
            <div className="friendSuggestionRight">
              <Add htmlColor="blue" className="friendSuggestionIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Righbar.propTypes = {};

export default Righbar;
