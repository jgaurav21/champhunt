import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbupIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import PropTypes from "prop-types";

const Post = ({ profilePic, image, timeStamp, userName, message }) => {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topInfo">
          <h3>{userName}</h3>
          <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt="" />
      </div>

      <div className="post_options">
        <div className="post_option">
          <ThumbupIcon />
          <p>Like</p>
        </div>

        <div className="post_option">
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>

        <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  profilePic: PropTypes.string,
  image: PropTypes.string,
  timeStamp: PropTypes.string,
  userName: PropTypes.string,
  message: PropTypes.string,
};

export default Post;
