import React, { useEffect, useState } from "react";
import { Col, Image, Row, Button } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import ModalComponent from "../components/ModalComponent";
import { useDatabase } from "../context/DatabaseContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import DynamicGrid from "../components/DynamicGrid";
import Loading from "../components/Loading";
export default function Homepage() {
  const { isLoading, getImagesForProfile, feedImages } = useDatabase();
  const { currentUser, uid } = useAuth();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      const timer = setTimeout(() => {
        getImagesForProfile(uid);
      }, 1000);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <style type="text/css">
        {`
       .btn-primary {
         background-color: #007AAD;
         color: white;
         width:50%;
         height:100%;
        
       }    
       .btn-primary:hover{
         background-color: #005071;
         color: white;
          width:50%;
         height:100%;
       }
        @media (max-width: 993px) {
          .justify-content-center {
            text-align: center;
            
          }

          

          
        }
    `}
      </style>
      <NavigationBar />

      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          background: "#383838",
        }}
      >
        <Row
          className="d-flex flex-row align-items-center justify-content-center mt-1 mb-1"
          style={{ color: "white" }}
        >
          <Col
            lg={2}
            className="d-flex flex-row align-items-center justify-content-center m-2"
          >
            <Image
              className="d-block"
              thumbnail
              src={
                "https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png"
              }
              alt="Empty Profile Page Image"
              // style={{ width: "75%", height: "75%" }}
            />
          </Col>

          <Col
            lg={6}
            className="d-flex flex-column  justify-content-center mt-1 mb-1"
          >
            <h1 style={{ fontSize: "3rem" }}>Johnny Appleseed</h1>
            <p style={{ fontSize: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet aliquam lorem. Donec molestie eleifend augue
              vitae congue. Nulla maximus imperdiet feugiat. Vivamus suscipit
              tortor non velit vulputate, ac hendrerit neque dignissim. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Vivamus vel facilisis magna. Integer vel
              vestibulum libero. Nullam turpis mi, egestas tempor lacus sit
              amet, lacinia fermentum ante. Ut eleifend vitae sem vel aliquam.
              Mauris sed maximus arcu. Nulla risus odio, interdum a massa id,
              dictum pretium diam.
            </p>
          </Col>
          <Col
            lg={2}
            className="d-flex flex-column align-items-center justify-content-top mt-1 mb-1"
          >
            <ModalComponent
              show={show}
              setShow={setShow}
              handleClose={handleClose}
              handleShow={handleShow}
            />
            <Button onClick={handleShow} variant="primary">
              Edit Profile
            </Button>
          </Col>
        </Row>

        <Row
          className="d-flex flex-column align-items-center justify-content-center mt-3"
          style={{ color: "white" }}
        >
          <Col style={{ marginTop: "20px", textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem" }}>
              <b>
                <u>Your Creations</u>
              </b>
            </h2>
          </Col>
        </Row>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="d-flex flex-row align-items-center justify-content-center  ">
            <DynamicGrid feedImages={feedImages} />
          </div>
        )}
      </div>
      {/* Media queries for responsiveness */}
    </>
  );
}
