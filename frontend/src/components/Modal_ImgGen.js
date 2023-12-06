import React, { useState } from "react";
import { Form, Button, FloatingLabel, Modal, Container } from "react-bootstrap";

function Modal_ImgGen({ show, setShow, handleShow, handlePostButtonClick, result, currentUser, user}) {
  const [caption, setCaption] = useState("");

  const handleClose = () => {
    setShow(false);
    setCaption("");
    // handleShow(); // Commenting this out as it may not be necessary
  };

  const handlePostImage = () => {
    console.log("Post Image button clicked with caption:", caption);
    handlePostButtonClick(result, currentUser, user, caption);
    handleClose();
  };

  return (
    <Container>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Post Image</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-4">
            <FloatingLabel label="Caption">
              <Form.Control
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                required
                style={{ borderColor: "#000000" }}
                placeholder="Caption"
              />
            </FloatingLabel>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <style type="text/css">
            {`
              .modal-btn {
                width: 200px;
                height: 40px;
                margin-right: 10px;
              }
            `}
          </style>
          <Button variant="secondary" onClick={handleClose} className="modal-btn">
            Close
          </Button>
          <Button onClick={handlePostImage} className="modal-btn">
            Post Image
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Modal_ImgGen;
