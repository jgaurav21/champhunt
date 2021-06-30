import React from "react";
import PropTypes from "prop-types";
import {
  FavoriteBorder,
  ModeComment,
  MoreVert,
  Share,
} from "@material-ui/icons";

import "./Post.css";

const Post = ({ profileImg, postUser, postTime, postMessage, postImg }) => {
  return (
    <div className="post ">
      <div className="postContainer">
        <div className="postTop">
          <div className="postTop_left">
            <img
              src={profileImg}
              //"https://m.economictimes.com/thumb/msid-70119616,width-1200,height-900,resizemode-4,imgsize-160034/rohit-sharma-the-odi-cricket-phenomenon.jpg"
              //}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{postUser}</span>
            <span className="postTime">{postTime}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          {postMessage && <p className="postMessage">{postMessage}</p>}
          {postImg && (
            <img
              src={postImg}
              // "https://www.mykhel.com/img/2018/11/rohitsharma-cropped_fg3ec7qrkgv1b6j0scq9o1gr.jpg"
              alt=""
              className="postCenterImg"
            />
          )}
        </div>
        <hr className="postHr" />
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

Post.propTypes = {
  profileImg: PropTypes.string,
  postUser: PropTypes.string,
  postTime: PropTypes.string,
  postMessage: PropTypes.string,
  postImg: PropTypes.string,
};

export default Post;
