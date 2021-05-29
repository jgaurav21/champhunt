import React from "react";
import PropTypes from "prop-types";
import {
  QuestionAnswerRounded,
  RssFeed,
  Chat,
  VideoLibrary,
  People,
  Bookmark,
  Work,
  Event,
  School,
  PhotoLibrary,
  HelpOutlined,
} from "@material-ui/icons";

import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Pitch</span>
          </li>
          <li className="sidebarListItem">
            <PhotoLibrary className="sidebarIcon" />
            <span className="sidebarListItemText">Gallery</span>
          </li>

          <li className="sidebarListItem">
            <People className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <HelpOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Quiz</span>
          </li>

          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
        </ul>
        {/* <button className="sidebarButton">Show More</button> */}
        <hr className="sidebarHr" />
        <span className="sidebarSectionHeader">Followers</span>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src={
                "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900"
              }
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src={
                "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900"
              }
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src={
                "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900"
              }
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src={
                "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900"
              }
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src={
                "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900"
              }
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src={
                "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900"
              }
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
