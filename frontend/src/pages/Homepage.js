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
  const { feedImages } = useDatabase();
  const { uid } = useAuth();
  const navigate = useNavigate();

  // If to user is logged in default to the login page
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <NavigationBar />
      <div
        className="d-flex flex-row align-items-center justify-content-center"
        style={{
          background: "#FAF9F6",
          position: "absolute",
          margin: 0,
          width: "100%",
        }}
      >
        <div className="d-flex flex-row align-items-center justify-content-center  ">
          <DynamicGrid feedImages={feedImages} />
        </div>
      </div>
    </>
  );
}
