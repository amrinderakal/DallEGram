import React from "react";
import { Col, Row, Image, Container} from "react-bootstrap";
import ImageGenerator from "../components/ImageGenerator";
import NavigationBar from "../components/NavigationBar";
import example1 from "../assets/example1.png";
import example2 from "../assets/example2.png";
import example3 from "../assets/example3.png";

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

          <Row
            className="d-flex flex-column align-items-center justify-content-center mt-3"
            style={{ color: "white" }}
          >
            <Col style={{ marginTop: "20px", textAlign: "center" }}>
              <h2 style={{ fontSize: "1.5rem" }}>
                <b>
                  <u>Generated Images Examples</u>
                </b>
              </h2>
            </Col>
          </Row> 

        <Container fluid>
         <Row
           className="d-flex flex-row align-items-center justify-content-center"
           style={{ color: "white"}}
         >
           <Col className="d-flex justify-content-center">
             <Image
               className="d-block"
               thumbnail
               src={example1}
               style={{ width: "50%", height: "50%" }} 
             />
           </Col>
           <Col className="d-flex justify-content-center">
             <Image
               className="d-block"
               thumbnail
               src={example2}
               style={{ width: "50%", height: "50%" }} 
             />
           </Col>
           <Col className="d-flex justify-content-center">
             <Image
               className="d-block"
               thumbnail
               src={example3}
               style={{ width: "50%", height: "50%" }} 
             />
           </Col>
         </Row> 
         </Container>

      </div>
    </>
  );
}
