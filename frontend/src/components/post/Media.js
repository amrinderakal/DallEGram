import React from "react";

const Media = (props) => (
  <>
    <div className="media">
      <img src={props.mediaUrl} alt="media" className="mediaPhoto" />
    </div>
  </>
);

export default Media;
