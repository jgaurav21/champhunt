import React from "react";
import PropTypes from "prop-types";
import {
  FavoriteBorder,
  ModeComment,
  MoreVert,
  Share,
} from "@material-ui/icons";

import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <div className="postTop_left">
            <img
              src={
                "https://m.economictimes.com/thumb/msid-70119616,width-1200,height-900,resizemode-4,imgsize-160034/rohit-sharma-the-odi-cricket-phenomenon.jpg"
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">Rohit Sharma</span>
            <span className="postTime">5 mins Ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <p className="postMessage">This is a test message</p>
          <img
            src={
              "https://www.mykhel.com/img/2018/11/rohitsharma-cropped_fg3ec7qrkgv1b6j0scq9o1gr.jpg"
            }
            alt=""
            className="postCenterImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomItem">
            <FavoriteBorder className="postBottomIcon" />
            <span className="postBottomText">Like</span>
          </div>
          <div className="postBottomItem">
            <ModeComment className="postBottomIcon" />
            <span className="postBottomText">Comment</span>
          </div>
          <div className="postBottomItem">
            <Share className="postBottomIcon" />
            <span className="postBottomText">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {};

export default Post;
