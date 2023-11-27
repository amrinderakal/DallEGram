import React from "react";
import defaultImg from "../../assets/defaultPic.jpeg";
const Header = (props) => (
  <>
    <div className="header">
      <div className="left">
        <img
          src={props.profileImageUrl == "" ? defaultImg : props.profileImageUrl}
          alt="profile"
          className="profile__img"
        />
        <div className="user__name">{props.username}</div>
      </div>
    </div>
  </>
);

export default Header;
