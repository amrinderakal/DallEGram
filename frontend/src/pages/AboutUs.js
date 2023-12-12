import React from "react";
import { Col, Image, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import NavigationBar from "../components/NavigationBar";
import alaka from "../assets/alaka.png";
import shehneel from "../assets/shehneel.png";

export default function Homepage() {
  const teamMembers = [
    {
      name: "Shehneel Ashraf",
      imageSrc: shehneel,
      description: "Shehneel is a senior at Rutgers University studying computer science and creative writing. She has enjoyed working on this project because she gained a lot of frontend development experience. Post graduation, Shehneel plans on working at Bank of America as a software engineer.",
    },
    {
      name: "Amrinderpal Akal",
      imageSrc:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      description: "Product Owner",
    },
    {
      name: "Pavan Patel",
      imageSrc:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      description: "Developer",
    },
    {
      name: "Aman Karangutkar",
      imageSrc:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      description: "Developer",
    },
    {
      name: "Alaka Rajesh",
      imageSrc: alaka,
      description: "Alaka is a senior at Rutgers University studying computer science and data science. She is graduating in December, and is excited for life after college!",
    },
  ];

  const renderTooltip = (description) => (
    <Tooltip id="button-tooltip">{description}</Tooltip>
  );

  return (
    <>
      <NavigationBar />
      <div
        style={{
          background: "#faf9f6",
          // border: "40px solid gray",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Col xs={12} md={6} className="mx-auto text-center">
          <p
            style={{
              textDecoration: "underline",
              fontSize: "50px",
              marginTop: "6%",
              fontFamily: "Serif",
              color: "black",
            }}
          >
            What is DallEGram?
          </p>
          <p style={{ fontSize: "18px", fontFamily: "Serif", color: "black" }}>
            Welcome to DallEGram, where our goal is to bring your imagination to
            life! We are an application that allows you to create and post
            AI-generated images to your feed! Describe an image in text, and in
            return, you will receive an image matching your description, which
            you can then choose to post to your account. The more images you
            share, the more exciting your collection becomes, and your followers
            can view, like, and comment on your pictures. Feel free to be as
            creative as possible on DallEGram, and we look forward to seeing
            your collection!
          </p>
        </Col>

        <Row className="justify-content-center" style={{ marginTop: "3%" }}>
          <Col xs={12} md={6} className="text-center mb-3">
            <h1
              style={{
                textDecoration: "underline",
                fontSize: "40px",
                color: "black",
              }}
            >
              Meet The Team
            </h1>
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
              <p
                style={{
                  marginTop: "1%",
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {member.name}
              </p>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

