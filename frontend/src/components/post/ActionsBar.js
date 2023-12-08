import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";
import { useDatabase } from "../../context/DatabaseContext";
const ActionsBar = (props) => {
  const [liked, setIsLiked] = useState();
  const { uid } = useAuth();
  const {
    addUidLikedToImageFeed,
    removeUidLikedToImageFeed,
    getImgagesForTheFeed,
    getImagesForProfile,
  } = useDatabase();
  useEffect(() => {
    const likedUIDs = props.likes;
    if (likedUIDs) {
      if (likedUIDs.includes(uid)) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
  }, []);

  const likeButtonClick = async () => {
    if (liked) {
      setIsLiked(false);
      await removeUidLikedToImageFeed(props.postId, uid);
      await getImgagesForTheFeed();
      await getImagesForProfile(uid);
    } else {
      setIsLiked(true);
      await addUidLikedToImageFeed(props.postId, uid);
      await getImgagesForTheFeed();
      await getImagesForProfile(uid);
    }
  };
  return (
    <div className="ActionBar">
      <div className="left">
        <div className="like">
          <button
            className={`icn_btn_${liked ? "true" : "false"} `}
            onClick={likeButtonClick}
          >
            <FontAwesomeIcon icon={faHeart} size="lg" fixedWidth />
          </button>
        </div>
        <div className="comment">
          <button className="icn_btn_false">
            <FontAwesomeIcon icon={faComment} size="lg" fixedWidth />
          </button>
          <i className="fas fa-share"></i>
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;
