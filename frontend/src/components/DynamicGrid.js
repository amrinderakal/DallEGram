import React, { useState } from "react";
// import {
//   Card,
//   CardBody,
//   CardTitle,
//   CardText,
//   CardImg,
//   CardHeader,
//   Button,
// } from "react-bootstrap";
import { useDatabase } from "../context/DatabaseContext";
import Card from "./post/Card";
import "../styles/grid.css";
import "../styles/card.css";
import { useEffect } from "react";

function DynamicGrid({ items }) {
  // const { feed } = useDatabase();
  if (items.length % 3 != 0) {
    while (items.length % 3 != 0) {
      items.push({ fname: "false" });
    }
  }

  const url =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--1YjkUU2Q--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/a86595fypnp8bws7b3em.jpg";
  return (
    <>
      <div class="row">
        {items.map((item, index) => (
          <div className={`column_${item.fname == "false" ? "false" : "true"}`}>
            <div className="post_container">
              <Card
                profileImageUrl={item.imageURL}
                username={item.username}
                mediaUrl={item.imageURL}
                like={item.liked}
                likes={item.likes}
                caption={item.caption}
                posted={item.posted}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DynamicGrid;