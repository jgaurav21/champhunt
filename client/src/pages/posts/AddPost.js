import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import "./AddPost.css";

const AddPost = (props) => {
  return (
    <div className="addPost">
      <div class="addPost__postDetails">
        <Avatar src="G" />
        <input type="edit" placeholder="Share your Shot" />
      </div>
    </div>
  );
};

AddPost.propTypes = {};

export default AddPost;
