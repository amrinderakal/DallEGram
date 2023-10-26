import React from "react";
import {
  Row,
  Container,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardHeade,
  Button,
} from "react-bootstrap";

import "./grid.css";
function DynamicGrid({ items }) {
  const styles = {
    card: {
      backgroundColor: "#B7E0F2",
      borderRadius: 55,
      padding: "3rem",
    },
    cardImage: {
      objectFit: "cover",
      borderRadius: 100,
      backgroundColor: "#B7E0F2",
    },
  };
  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }
  const url =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--1YjkUU2Q--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/a86595fypnp8bws7b3em.jpg";
  return (
    <>
      <div class="row">
        {items.map((item, index) => (
          <div class="column">
            <Card className="border-1 shadow">
              <Card.Header>Username</Card.Header>

              <CardBody>
                <CardImg
                  width="512"
                  height="512"
                  top
                  src={url}
                  alt="Card image cap"
                />
                <CardTitle tag="h5">Number of Likes </CardTitle>
                <CardText>Caption</CardText>
                <Button onClick={console.log("click")}></Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      {/* {items.map((item, index) => (
        <Row
          lg={9}
          className="d-flex flex-row align-items-center justify-content-center"
        >
          <Col key={index} lg={9} className="m-1">
            <Card className="border-1 shadow">
              <Card.Header>Username</Card.Header>

              <CardBody>
                <CardImg
                  width="512"
                  height="512"
                  top
                  src={url}
                  alt="Card image cap"
                />
                <CardTitle tag="h5">Number of Likes </CardTitle>
                <CardText>Caption</CardText>
                <Button onClick={console.log("click")}>
                
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))} */}
    </>
  );
}

export default DynamicGrid;
