import React from "react";
import PropTypes from "prop-types";

import "./Share.css";

import { EmojiEmotions, Label, PhotoAlbum, Room } from "@material-ui/icons";

const Share = (props) => {
  return (
    <div className="share">
      <div className="shareContainer">
        <div className="shareTop">
          <img
            src={
              "https://m.economictimes.com/thumb/msid-70119616,width-1200,height-900,resizemode-4,imgsize-160034/rohit-sharma-the-odi-cricket-phenomenon.jpg"
            }
            alt=""
            className="shareTopImg"
          />
          <input
            placeholder="What's on your mind Rohit"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PhotoAlbum htmlColor="Red" className="shareOptionIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareOptionIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareOptionIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Feeling</span>
            </div>

            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Share.propTypes = {};

export default Share;
