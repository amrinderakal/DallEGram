import React, { useEffect, useState } from "react";
import Header from "./Header";
import Media from "./Media";
import ActionsBar from "./ActionsBar";
import Likes from "./Likes";
import Caption from "./Caption";
import Posted from "./Posted";
import Comment from "./Comment";
import "../../styles/card.css";
const Card = (props) => {
  const [liked, isLiked] = useState(false);
  return (
    <>
      <div className="card ">
        <Header
          profileImageUrl={props.profileImageUrl}
          username={props.username}
        />
        <Media mediaUrl={props.mediaUrl} />
        <div className="lower_container">
          <ActionsBar likes={props.likes} postId={props.postID} />
          <Likes likes={props.likes} />
          <Caption username={props.username} caption={props.caption} />
          <Posted posted={props.posted} />
          {/* <Comment /> */}
        </div>
      </div>
    </>
  );
};

export default Card;
