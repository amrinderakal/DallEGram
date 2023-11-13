import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import ModalComponent from "../components/ModalComponent";

export default function Homepage() {
  return (
    <>
      <NavigationBar />
      <ModalComponent />

      <Row className="justify-content-center mt-3">
        <Col
          md={6}
          lg={4}
          xl={3}
          style={{
            marginTop: "30px",
            maxWidth: "300px",
          }}
        >
          <Image
            className="d-block"
            thumbnail
            fluid
            src={
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }
            alt="Empty Profile Page Image"
            style={{ width: '80%', height: 'auto' }}
          />
        </Col>

        <Col
          md={6}
          lg={8}
          xl={6}
          style={{
            marginTop: "20px",
            maxWidth: "500px",
            textAlign: "center"
          }}
        >
          <h1 style={{ fontSize: "30px", textAlign: "center"}}>Johnny Appleseed</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque sit amet aliquam lorem. Donec molestie eleifend augue vitae congue. 
            Nulla maximus imperdiet feugiat. Vivamus suscipit tortor non velit vulputate, ac hendrerit neque dignissim. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Vivamus vel facilisis magna. Integer vel vestibulum libero. Nullam turpis mi, egestas tempor lacus sit amet, lacinia fermentum ante. 
            Ut eleifend vitae sem vel aliquam. Mauris sed maximus arcu. Nulla risus odio, interdum a massa id, dictum pretium diam.
          </p>
        </Col>

        <Col md={12} style={{ marginTop: "20px", textAlign: "center" }}>
          <h2 style={{ fontSize: "28px" }}>
            <b>
              <u>Your Creations</u>
            </b>
          </h2>
        </Col>
      </Row>

      {/* Media queries for responsiveness */}
      <style jsx>{`
        /* Screens with width between 768px and 1024px */
        @media (min-width: 768px) and (max-width: 1024px) {
          .justify-content-center {
            text-align: center;
            align-items: center;
          }
          .mt-3 {
            margin-top: 15px;
          }
          h1 {
            font-size: 25px;
          }
          h2 {
            font-size: 18px;
          }
        }

        /* Screens with width <= 767px */
        @media (max-width: 767px) {
          .justify-content-center {
            text-align: center;
            align-items: center;
          }
          .mt-3 {
            margin-top: 10px;
          }
          h1 {
            font-size: 20px;
          }
          h2 {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}
