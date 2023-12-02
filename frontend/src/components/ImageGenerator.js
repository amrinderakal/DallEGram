import React, { useState } from "react";
import { Form, Button, Col, Row, Container, Image} from "react-bootstrap";
import OpenAI from "openai";
import Modal_ImgGen from "../components/Modal_ImgGen";

function ImageGenerator() {
  const [img_desc, setImageDesc] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY,
    dangerouslyAllowBrowser: true, // IDK ABOUT THIS
  });

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const res = await openai.images.generate({
        prompt: img_desc,
        n: 1,
        size: "256x256",
      });
  
      setLoading(false);
      setResult(res.data[0].url);
      handleShow();
  
    } catch (error) {
      setLoading(false);
      console.error("Error generating image:", error.message);
    }
  };  

  return (
    <>
      <style type="text/css">
        {`
       .btn-primary {
         background-color: #007AAD;
         color: white;
         width: 60%;
         height: 50px;
       }    
       .btn-primary:hover {
         background-color: #005071;
         color: white;
       }
    `}
      </style>

      <Container fluid style={{ marginLeft: "70px" }}>
        <Row className="mt-1" style={{ color: "white" }}>
          <Col xs={12} className="mt-1 mb-1" style={{paddingTop:"60px"}}>
            <p>Start with a detailed description</p>
          </Col>
          <Col xs={8} md={8} className="mt-1 mb-1">
            <Form>
              <Form.Group id="img-description" className="mb-3">
                <Form.Control
                  type="text"
                  value={img_desc}
                  onChange={(e) => setImageDesc(e.target.value)}
                  required
                  style={{
                    borderColor: "#000000",
                    width: "100%",
                    height: "50px",
                  }}
                  placeholder="An armchair in the shape of an avocado..."
                />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} md={4} className="mt-1 mb-1">
            <Button variant="primary" onClick={handleGenerate} disabled={loading}>
              Generate
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Display result image if available */}
      {result && (
      <>
        <Row className="d-flex flex-row align-items-center justify-content-center">
          <Col lg={8} className="d-flex justify-content-center">
            <Image
              className="result-image"
              thumbnail
              src={result}
              alt="result"
              style={{ width: "50%", height: "75%" }}
            />
          </Col>
        </Row>

        {/* Post button if image appears */}
        <Row className="d-flex flex-column align-items-center justify-content-center">
          <Col lg={8} className="text-center">
            <Button variant="primary" onClick={handleShow}>
              Post
            </Button>
            <Modal_ImgGen show={show} setShow={setShow} handleShow={handleShow} />
          </Col>
        </Row>
      </>
    )}
    </>
  );
}

export default ImageGenerator;
