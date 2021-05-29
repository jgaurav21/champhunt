import React from "react";
import PropTypes from "prop-types";

import "./Pitch.css";
import Share from "../../components/share/Share";
import Post from "./Post";

const Pitch = (props) => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post
          profileImg="https://m.economictimes.com/thumb/msid-70119616,width-1200,height-900,resizemode-4,imgsize-160034/rohit-sharma-the-odi-cricket-phenomenon.jpg"
          postUser="Rohit Sharma"
          postTime="5 Min Ago"
          postMessage="This is test post without any image"
        />
        <Post
          profileImg="https://m.economictimes.com/thumb/msid-70119616,width-1200,height-900,resizemode-4,imgsize-160034/rohit-sharma-the-odi-cricket-phenomenon.jpg"
          postUser="Rohit Sharma"
          postTime="5 Min Ago"
          postMessage="This is test post with an image"
          postImg="https://www.mykhel.com/img/2018/11/rohitsharma-cropped_fg3ec7qrkgv1b6j0scq9o1gr.jpg"
        />
      </div>
    </div>
  );
};

Pitch.propTypes = {};

export default Pitch;
