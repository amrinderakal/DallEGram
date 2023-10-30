import React, { useState } from "react";
import {
  Form,
  Button,
  Alert,
  FloatingLabel,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Col,
  Image, 
  Row,
  Table,
  Modal
} from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import NavigationBar from "../components/NavigationBar";

export default function Homepage() {
  // Set states here
  const [img_desc, setImageDesc] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function call --> submit button
  async function handleSubmit(e) {
    try {
      setError("");
      setLoading(true);
      console.log("successful");
      //   add function call --> await(setImageDesc)
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  }
  return (

    // CSS
    <>
      <NavigationBar />

      {/* Adding Modal */}
      <Button 
        variant="primary" 
        onClick={handleShow}
        style={{marginTop:"1%", marginLeft:"90%"}}
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
                  style={{ borderColor: '#000000' }}
                  placeholder="First Name"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-4"> 
              <FloatingLabel label="Last Name">
                <Form.Control
                  type="text"
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={{ borderColor: '#000000' }}
                  placeholder="First Name"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-4"> 
              <FloatingLabel label="Email">
                <Form.Control
                  type="text"
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={{ borderColor: '#000000' }}
                  placeholder="First Name"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-4"> 
              <FloatingLabel label="Biography">
                <Form.Control
                  type="text"
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={{ borderColor: '#000000' }}
                  placeholder="First Name"
                />
              </FloatingLabel>
            </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Update Profile</Button>
        </Modal.Footer>
      </Modal>

      <div
        className="d-flex flex-row align-items-center justify-content-center"
      >
      <Row>
        <Col xs={6} style={{marginTop:"2%"}}>
          <Image
                className="d-block"
                thumbnail
                fluid
                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
                alt="Empty Profile Page Image"
                width="32%"
                height="32%"
                style={{ marginLeft: '20%'}}
            />
        </Col>

        <Col xs={6} style={{marginTop:"2%", marginLeft:"-22%"}}>
          <h1 style={{textAlign:"left"}}>
            Johnny Appleseed
          </h1>
          <p style={{textAlign:"left"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Pellentesque sit amet aliquam lorem. Donec molestie eleifend augue vitae congue. 
          Nulla maximus imperdiet feugiat. Vivamus suscipit tortor non velit vulputate, ac hendrerit neque dignissim. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          Vivamus vel facilisis magna. Integer vel vestibulum libero. Nullam turpis mi, egestas tempor lacus sit amet, lacinia fermentum ante. 
          Ut eleifend vitae sem vel aliquam. Mauris sed maximus arcu. Nulla risus odio, interdum a massa id, dictum pretium diam.
          </p>
        </Col>
      
        <Table bordered size="sm" style={{width:"12%", marginLeft: '12%', textAlign:"center", marginTop:"1%"}}>
          <thead>
            <tr>
              <th>Followers</th>
              <th>Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>300</td>
              <td>250</td>
            </tr>
          </tbody>
        </Table>
        </Row>
        </div>

      <Row className="d-flex flex-column mx-auto" style={{marginTop:"-2%",  textAlign:"center"}}>
        <Col>
          <h2>
            <b><u>Your Creations</u></b>
          </h2>
        </Col>
      </Row>

    </>
  );
}
