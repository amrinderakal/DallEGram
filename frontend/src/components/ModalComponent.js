import React, { useState } from "react";
import { Form, Button, FloatingLabel, Modal, Container } from "react-bootstrap";

function ModalComponent({ show, setShow, handleClose, handleShow }) {
  return (
    <>
      <Container>
        {/* <Button
          variant="primary"
          onClick={handleShow}
          style={{ marginTop: "1%", marginLeft: "90%" }}
        >
          Edit Profile
        </Button> */}

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Profile Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-4">
              <FloatingLabel label="First Name">
                <Form.Control
                  type="text"
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={{ borderColor: "#000000" }}
                  placeholder="First Name"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-4">
              <FloatingLabel label="Last Name">
                <Form.Control
                  type="text"
                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  required
                  style={{ borderColor: "#000000" }}
                  placeholder="Last Name"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-4">
              <FloatingLabel label="Email">
                <Form.Control
                  type="text"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ borderColor: "#000000" }}
                  placeholder="Email"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-4">
              <FloatingLabel label="Biography">
                <Form.Control
                  type="text"
                  // value={biography}
                  // onChange={(e) => setBiography(e.target.value)}
                  required
                  style={{ borderColor: "#000000" }}
                  placeholder="Biography"
                />
              </FloatingLabel>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
              className="close-btn"
            >
              Close
            </Button>
            <Button variant="primary" className="edit-btn">
              Update Profile
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      {/* Media queries for responsiveness */}
    </>
  );
}

export default ModalComponent;
