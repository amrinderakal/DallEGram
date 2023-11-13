import React, { useState } from "react";
import { Form, Button, FloatingLabel, Modal, Container } from "react-bootstrap";

function ModalComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ marginTop: "1%", marginLeft: "90%" }}
        >
          Edit Profile
        </Button>

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
            <Button variant="secondary" onClick={handleClose} className="close-btn">
              Close
            </Button>
            <Button variant="primary" className="edit-btn">
              Update Profile
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      {/* Media queries for responsiveness */}
      <style jsx>{`
        @media (max-width: 767px) {
          .justify-content-center {
            text-align: center;
          }

          .mt-3 {
            margin-top: 10px;
          }

          Button {
            margin-left: 20%; /* Adjust as needed */
            transform: translateX(-30%);
          }

          .close-btn,
          .edit-btn {
            width: 40%;
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default ModalComponent;
