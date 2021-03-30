import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Feed.css";

const Feed = (props) => {
  return (
    <div className="feed">
      <div class="feed_posts">
        <Post
          profilePic="https://images.news18.com/ibnlive/uploads/2020/08/1598011792_rohit-sharma.jpg"
          image="https://c.ndtvimg.com/2020-04/u3a8nia8_ipl-trophy-twitter_625x300_13_April_20.jpg"
          message="First Post"
        />
        <Post />
      </div>
    </div>
  );
};

Feed.propTypes = {};

export default Feed;
