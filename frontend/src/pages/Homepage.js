// ALL CURRENT HTML NEEDS TO BE A ENTIRELY DIFF FUNCTIONAL COMONENT (NAV BAR and IMAGE GENERATION) FOR CLEANER CODE
import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import DynamicGrid from "../components/DynamicGrid";
export default function Homepage() {
  // Set states here
  const [img_desc, setImageDesc] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const items = [
    { Item1: "Pavan" },
    { Item1: "Pavan" },
    { Item1: "Pavan" },
    { Item1: "Pavan" },
    { Item1: "Pavan" },

    // Add more items as needed
  ];

  useEffect(() => {
    if (currentUser) {
      try {
        //await info from frontend
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  }, []);

  return (
    // CSS

    <>
      <NavigationBar />
      {/* <Post></Post> */}
      <div className="bg-success d-flex flex-row align-items-center justify-content-center ">
        {/* <Container className="d-flex flex-column align-items-center justify-content-center w-100 h-100 mt-4 "> */}
        <div className="d-flex flex-row align-items-center justify-content-center  ">
          <DynamicGrid items={items} />
        </div>

        {/* </Container> */}
      </div>
    </>
  );
}
