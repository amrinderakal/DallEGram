// ImageGenerator.jsx
import React, { useState } from "react";
import { Form, Button, Col, Row, Container, Image } from "react-bootstrap";
import OpenAI from "openai";
import Modal_ImgGen from "../components/Modal_ImgGen";
import { useAuth } from "../context/AuthContext";
import { useDatabase } from "../context/DatabaseContext";

function ImageGenerator() {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [caption, setCaption] = useState("");
  const { user } = useDatabase();

  const [img_desc, setImageDesc] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false); // Use a separate state for the modal

  // API keys for OpenAI
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY,
    dangerouslyAllowBrowser: true, // IDK ABOUT THIS
  });

  // Call the openAI API to generate images with Dalle
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
      // handleShow();
    } catch (error) {
      setLoading(false);
      console.error("Error generating image:", error.message);
    }
  };

  // Posts the image generated to the feed
  const handlePostButtonClick = async (result, currentUser, user, caption) => {
    setShowModal(false);

    try {
      setIsLoading(true);

      const response = await fetch(
        "http://localhost:8000/add_image_to_feed_collection",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: currentUser.uid,
            imageURL: result,
            caption: caption,
            username: user.username,
            profilePic: user.profilePic,
          }),
        }
      );

      if (response.ok) {
        console.log("Image added to the feed");
      } else {
        console.error("Error adding image to the feed");
      }
    } catch (error) {
      console.error("Error adding image to the feed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Downloads the generated image onto the users local computer
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = result;
    link.target = "_blank";
    link.download = "generated_image.png";
    link.click();
  };

  return (
    <>
      <style type="text/css">
        {`
       .btn-primary {
         background-color: #007AAD;
        //  border: 2px solid #000000;
         color: white;
         width: 40%;
         height: 50px;
       }    
       .btn-primary:hover {
         background-color: #005071;
         color: white;
       }

       @media (max-width: 576px) {
        .form-width,
        .btn-primary {
          width: 90%;
        }
      }

      @media (min-width: 577px) and (max-width: 992px) {
        .form-width {
          width: 80%;
        }

        .btn-primary {
          width: 50%;
        }
      }

      @media (min-width: 993px) {
        .form-width {
          width: 100%;
        }

        .btn-primary {
          width: 40%;
        }
      }
    `}
      </style>

      <Container fluid>
        <Row
          className="d-flex flex-row align-items-center justify-content-center"
          style={{ color: "black" }}
        >
          <Col lg={8} className="d-flex justify-content-center mt-5">
            <p>Start with a detailed description</p>
          </Col>
          <Col lg={8} className="d-flex justify-content-center">
            <Form className="form-width">
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
          <Col lg={8} className="d-flex justify-content-center">
            <Button
              variant="primary"
              onClick={handleGenerate}
              disabled={loading}
              className="btn-primary"
            >
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
                style={{
                  width: "50%",
                  height: "75%",
                  border: "2px solid black",
                }}
              />
            </Col>
          </Row>
          {/* Download button */}
          <Row className="d-flex flex-column align-items-center justify-content-center">
            <Col lg={8} className="text-center">
              <Button variant="primary" onClick={handleDownload}>
                Download
              </Button>
            </Col>
          </Row>
          {/* Post button if image appears */}
          <Row className="d-flex flex-column align-items-center justify-content-center">
            <Col lg={8} className="text-center">
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Post
              </Button>
              <Modal_ImgGen
                show={showModal}
                setShow={setShowModal}
                handlePostButtonClick={handlePostButtonClick}
                result={result}
                currentUser={currentUser}
                user={user}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default ImageGenerator;
