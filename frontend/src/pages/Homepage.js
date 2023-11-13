// ALL CURRENT HTML NEEDS TO BE A ENTIRELY DIFF FUNCTIONAL COMONENT (NAV BAR and IMAGE GENERATION) FOR CLEANER CODE
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useDatabase } from "../context/DatabaseContext";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import DynamicGrid from "../components/DynamicGrid";
import Loading from "../components/Loading";
export default function Homepage() {
  // Set states here

  const { currentUser } = useAuth();
  const { isLoading, getImgagesForTheFeed, feedImages } = useDatabase();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      const timer = setTimeout(() => {
        getImgagesForTheFeed();
      }, 1000);
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
        style={{
          background: "#383838",
          position: "absolute",
          margin: 0,
          width: "100%",
        }}
      >
        {/* <Container className="d-flex flex-column align-items-center justify-content-center w-100 h-100 mt-4 "> */}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="d-flex flex-row align-items-center justify-content-center  ">
            <DynamicGrid feedImages={feedImages} />
          </div>
        )}

        {/* </Container> */}
      </div>
    </>
  );
}
