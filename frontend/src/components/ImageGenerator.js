import React, { useState } from "react";
import { Form, Button, FloatingLabel, Container, Col, Row } from "react-bootstrap";

function ImageGenerator() {
  const [img_desc, setImageDesc] = useState("");

  return (
    <>
      <style type="text/css">
        {`
       .btn-primary {
         background-color: #007AAD;
         color: white;
         width: 120%;
         height: 80%; // Set button height to 100%
       }    
       .btn-primary:hover {
         background-color: #005071;
         color: white;
       }
        @media (max-width: 993px) {
          .justify-content-center {
            text-align: center;
          }
        }
    `}
      </style>

      <Row
        className="d-flex flex-row align-items-stretch justify-content-center mt-1 mb-1"
        style={{ color: "white" }}
      >
        <Col
          lg={8}
          className="d-flex flex-column align-items-center justify-content-top mt-1 mb-1"
          style={{ marginLeft: "200px" }}
        >
          <Form className="w-100">
            <Form.Group id="img-description" className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Description">
                <Form.Control
                  type="img_desc"
                  value={img_desc}
                  onChange={(e) => setImageDesc(e.target.value)}
                  required
                  style={{ borderColor: "#000000", width: "100%" }} // Make the search bar wider
                  placeholder="Description"
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Col>
        <Col
          className="d-flex flex-column align-items-center justify-content-top mt-1 mb-1"
          style={{ marginRight: "12%"}}
        >
          {/* onClick={handleGenerate} */}
          <Button variant="primary" >
            Generate
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default ImageGenerator;
