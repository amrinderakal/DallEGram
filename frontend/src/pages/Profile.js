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
  Table
} from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import NavigationBar from "../components/NavigationBar";

export default function Homepage() {
  // Set states here
  const [img_desc, setImageDesc] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      <style type="text/css">
        {`
    .btn-primary {
      background-color: #3366CC;
      color: white;
     
    }    
    .btn-primary:hover{
      background-color: #333399;
      color: white;
    }
    `}
      </style>

      {/* Navigation Bar */}
      <NavigationBar />

      {/* User Profile  */}

      {/* Greeting User (text) */}
      <Container
        // className="d-flex flex-column align-items-center justify-content-center"
        className="d-flex flex-column"
        style={{ minHeight: "20vh" }}
      >
      
      <Row>
        <Col xs={6} style={{marginTop:"6%"}}>
          <Image
                className="d-block"
                thumbnail
                fluid
                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
                alt="Empty Profile Page Image"
                width="37%"
                height="37%"
                style={{ marginLeft: '20%'}}
            />
        </Col>
        <Col xs={6} style={{marginTop:"6%", marginLeft:"-20%"}}>
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
      </Row>

      <Row className="d-flex">
        <Table bordered size="sm" style={{width:"15%", marginLeft: '12%', textAlign:"center"}}>
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

      <Row className="d-flex flex-column mx-auto" style={{marginTop:"-2%"}}>
        <Col>
          <h2>
            <b><u>Your Creations</u></b>
          </h2>
        </Col>
      </Row>

      </Container>
    </>
  );
}
