import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
const ActionsBar = () => (
  <div className="ActionBar">
    <div className="left">
      <div className="like">
        <button className="icn_btn">
          <FontAwesomeIcon icon={faHeart} size="lg" fixedWidth />
        </button>
      </div>
      <div className="comment">
        <button className="icn_btn">
          <FontAwesomeIcon icon={faComment} size="lg" fixedWidth />
        </button>
        <i className="fas fa-share"></i>
      </div>
    </div>
  </div>
);

export default ActionsBar;
