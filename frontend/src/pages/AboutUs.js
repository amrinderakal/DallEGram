import React from "react";
import { Col, Image, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import NavigationBar from "../components/NavigationBar";

export default function Homepage() {
  const teamMembers = [
    {
      name: "Shehneel Ashraf",
      imageSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      description: "Short Description",
    },
    {
      name: "Amrinderpal Akal",
      imageSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      description: "Short Description",
    },
    {
      name: "Pavan Patel",
      imageSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      description: "Short Description",
    },
    {
      name: "Aman Karangutkar",
      imageSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      description: "Short Description",
    },
    {
      name: "Alaka Rajesh",
      imageSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      description: "Short Description",
    },
  ];

  const renderTooltip = (description) => <Tooltip id="button-tooltip">{description}</Tooltip>;

  return (
    <>
      <NavigationBar />

      <Col xs={12} md={6} className="mx-auto text-center">
        <p style={{ textDecoration: "underline", fontSize: "50px", marginTop: "6%", fontFamily: "Serif" }}>What is DalleGram?</p>
        <p style={{ fontSize: "18px", fontFamily: "Serif" }}>
          Welcome to DallEGram, where our goal is to bring your imagination to life! We are an application that allows you to 
          create and post AI-generated images to your feed! Describe an image in text, and in return, you will receive an 
          image matching your description, which you can then choose to post to your account. The more images you share, 
          the more exciting your collection becomes, and your followers can view, like, and comment on your pictures. 
          Feel free to be as creative as possible on DallEGram, and we look forward to seeing your collection!
        </p>
      </Col>

      <Row className="justify-content-center" style={{ marginTop: "3%" }}>
        <Col xs={12} md={6} className="text-center mb-3">
          <h1 style={{ textDecoration: "underline", fontSize: "40px" }}>Meet The Team</h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {teamMembers.map((member, index) => (
          <Col key={index} xs={12} md={4} className="mb-3">
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip(member.description)}
            >
              <Image
                className="d-block mx-auto"
                thumbnail
                fluid
                src={member.imageSrc}
                alt={`Profile Picture of ${member.name}`}
                width="100%"
                height="auto"
                style={{ maxWidth: "250px" }}
              />
            </OverlayTrigger>
            <p style={{ marginTop: "1%", textAlign: "center" }}>{member.name}</p>
          </Col>
        ))}
      </Row>
    </>
  );
}
