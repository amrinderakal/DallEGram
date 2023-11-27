import React from "react";

const Likes = (props) => (
  <div className="likes">{new Array(props.likes).length} likes</div>
);

export default Likes;
