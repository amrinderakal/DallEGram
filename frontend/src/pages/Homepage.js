// ALL CURRENT HTML NEEDS TO BE A ENTIRELY DIFF FUNCTIONAL COMONENT (NAV BAR and IMAGE GENERATION) FOR CLEANER CODE
import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useDatabase } from "../context/DatabaseContext";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import DynamicGrid from "../components/DynamicGrid";
export default function Homepage() {
  // Set states here
  const [img_desc, setImageDesc] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const { getImgagsForTheFeed } = useDatabase();
  const navigate = useNavigate();

  // const items = [
  //   {
  //     uid: "nuyX7PwtIuYjjPRAnxZfoEdKYpu1",
  //     imageURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png",
  //     likes: 23,
  //     caption: "Albert Einstein",
  //     username: "AB431",
  //     liked: "far fa-heart",
  //     posted: "5 DAYS AGO",
  //   },
  //   {
  //     uid: "nuyX7PwtIuYjjPRAnxZfoEdKYpu1",
  //     imageURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png",
  //     likes: 23,
  //     caption: "Albert Einstein",
  //     username: "AB431",
  //     liked: "far fa-heart",
  //     posted: "5 DAYS AGO",
  //   },
  //   {
  //     uid: "nuyX7PwtIuYjjPRAnxZfoEdKYpu1",
  //     imageURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png",
  //     likes: 23,
  //     caption: "Albert Einstein",
  //     username: "AB431",
  //     liked: "far fa-heart",
  //     posted: "5 DAYS AGO",
  //   },
  //   {
  //     uid: "nuyX7PwtIuYjjPRAnxZfoEdKYpu1",
  //     imageURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png",
  //     likes: 23,
  //     caption: "Albert Einstein",
  //     username: "AB431",
  //     liked: "far fa-heart",
  //     posted: "5 DAYS AGO",
  //   },
  //   {
  //     uid: "nuyX7PwtIuYjjPRAnxZfoEdKYpu1",
  //     imageURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png",
  //     likes: 23,
  //     caption: "Albert Einstein",
  //     username: "AB431",
  //     liked: "far fa-heart",
  //     posted: "5 DAYS AGO",
  //   },

  //   // Add more items as needed
  // ];
  // const [items, setItems] = useState([]);
  useEffect(() => {
    if (currentUser) {
    } else {
      navigate("/login");
    }
  }, []);

  return (
    // CSS

    <>
      <NavigationBar />
      {/* <Post></Post> */}
      <div
        className="d-flex flex-row align-items-center justify-content-center"
        style={{ background: "#383838" }}
      >
        {/* <Container className="d-flex flex-column align-items-center justify-content-center w-100 h-100 mt-4 "> */}
        <div className="d-flex flex-row align-items-center justify-content-center  ">
          <DynamicGrid />
        </div>

        {/* </Container> */}
      </div>
    </>
  );
}
