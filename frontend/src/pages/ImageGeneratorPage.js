import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import ImageGenerator from "../components/ImageGenerator";
import NavigationBar from "../components/NavigationBar";

export default function ImageGeneratorPage() {
  return (
    <>
      <NavigationBar />

      <div
        style={{
          background: "#383838",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >

        {/* mt: margin top, mb: margin bottom */}
        <Row>
          <Col
            lg={12}
            className="d-flex flex-column mt-1 mb-1"
            style={{ textAlign: "left", marginLeft: "205px" }}
          >
            <h6 style={{ fontSize: "1rem", color: "white" }}>Start with a detailed description</h6>
          </Col>
          <Col>
            <ImageGenerator/>
          </Col>
        </Row>

        {/* <Row
          className="d-flex flex-column align-items-center justify-content-center mt-3"
          style={{ color: "white" }}
        >
          <Col style={{ marginTop: "20px", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem" }}>
              <b>
                <u>Generated Image</u>
              </b>
            </h2>
          </Col>
        </Row> */}

        {/* <Row
          className="d-flex flex-row align-items-center justify-content-center"
          style={{ color: "white"}}
        >
          <Col className="d-flex justify-content-center">
            <Image
              className="d-block"
              thumbnail
              src={
                "https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png"
              }
              alt="Empty Profile Page Image"
              style={{ width: "50%", height: "50%" }} 
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image
              className="d-block"
              thumbnail
              src={
                "https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png"
              }
              alt="Empty Profile Page Image"
              style={{ width: "50%", height: "50%" }} 
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image
              className="d-block"
              thumbnail
              src={
                "https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png"
              }
              alt="Empty Profile Page Image"
              style={{ width: "50%", height: "50%" }} 
            />
          </Col>
        </Row> */}

      </div>
    </>
  );
}
