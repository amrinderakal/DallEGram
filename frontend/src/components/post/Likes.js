import React from "react";

const Likes = (props) => {
  return (
    <div className="likes">
      {props.likes ? props.likes.length : "Und"} likes
    </div>
  );
};

export default Likes;
