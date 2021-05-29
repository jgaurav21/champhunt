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
} from "@material-ui/icons";

import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideoLibrary className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <People className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuestionAnswerRounded className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

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
