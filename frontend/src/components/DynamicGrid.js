import React, { useState } from "react";
import { useDatabase } from "../context/DatabaseContext";
import Card from "./post/Card";
import "../styles/grid.css";

import { useEffect } from "react";

function DynamicGrid({ feedImages }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div class="row">
      {feedImages.map((item, index) => (
        <div className={`column_${item.uid == "false" ? "false" : "true"} `}>
          <div className="post_container ">
            <Card
              profileImageUrl={item.profilePicUrl}
              username={item.username}
              mediaUrl={item.imageURL}
              like={item.liked}
              likes={item.likes}
              caption={item.caption}
              posted={formatDate(item.timestamp)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DynamicGrid;
