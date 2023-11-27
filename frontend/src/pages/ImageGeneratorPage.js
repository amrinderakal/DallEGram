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

        <ImageGenerator/>

      </div>
    </>
  );
}
