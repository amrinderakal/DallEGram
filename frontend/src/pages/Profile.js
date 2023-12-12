import React, { useEffect, useState } from "react";
import { Col, Image, Row, Button } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import ModalComponent from "../components/ModalComponent";
import { useDatabase } from "../context/DatabaseContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import DynamicGrid from "../components/DynamicGrid";
import Loading from "../components/Loading";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../styles/profile.css";
import defaultImg from "../assets/defaultPic.jpeg";

export default function Homepage() {
  const { isLoading, profileImages, user } = useDatabase();
  const { currentUser } = useAuth();

  const [show, setShow] = useState(false);

  // Show modal if edit button is clicked
  const handleShow = () => setShow(true);

  // Default to login page if no user logged in
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <NavigationBar />
      <div
        style={{
          background: "#faf9f6",
        }}
      >
        <div class="main-container">
          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={6}>
                <div class="container">
                  <img
                    src={user.profilePic == "" ? defaultImg : user.profilePic}
                    alt="John"
                    style={{
                      width: "65%",
                      borderRadius: "100%",
                    }}
                  />
                  <br />
                </div>
                <ModalComponent
                  show={show}
                  setShow={setShow}
                  // handleClose={handleClose}
                  handleShow={handleShow}
                  currFname={user.fName}
                  currLname={user.lName}
                  currUsername={user.username}
                  currBio={user.bio}
                  currProfilePic={user.profilePic}
                />
                <Button className="edit_btn" onClick={handleShow}>
                  Edit Profile
                </Button>
              </MDBCol>

              <MDBCol sm={6}>
                <div class="container">
                  <h1 class="name">
                    {user.fName} {user.lName}{" "}
                  </h1>
                  <h2 class="username">{user.username}</h2>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol md={3}>
                      <h6>Bio </h6>
                    </MDBCol>
                    <MDBCol md={9}>
                      <p class="bio">{user.bio}</p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div class="main-container ">
          <div className="d-flex flex-row align-items-center justify-content-center  ">
            <DynamicGrid feedImages={profileImages} />
          </div>
        </div>
      </div>
    </>
  );
}
