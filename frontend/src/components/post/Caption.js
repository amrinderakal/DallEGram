import React from "react";

const Caption = (props) => (
  <div className="caption">
    <div className="left">
      <div className="cap-username">{props.username}</div>
      <div className="cap-text">{props.caption}</div>
    </div>
  </div>
);

export default Caption;
