import React, { useState } from "react";
import { Form, Button, Alert, FloatingLabel, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../assets/dallegramLogo.png";

export default function CreateUser() {
  const [email, setEmail] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const { resetPassword } = useAuth(); // change

  const createErrorResponse = (err) => {
    const res = err.code;
    switch (res) {
      case "auth/invalid-email":
        setError("Invalid Email");
        break;
      default:
        setError(JSON.stringify(err));
    }
  };

  async function handleSubmit(e) {
    // e.preventDefault();
    // resetPassword --> why don't we need to send password?
    try {
      setError("");
      setSuccess("");
      setLoading(true);
      await resetPassword(email);
      console.log("successful");
      setSuccess("Password reset link sent to email");
    } catch (err) {
      console.log(err);
      createErrorResponse(err);
      setLoading(false);
    }
  }
  return (
    <>
      <style type="text/css">
        {`
    .btn-primary {
      background-color: #007AAD;
      color: white;
     
    }    
    .btn-primary:hover{
      background-color: #005071;
      color: white;
    }
    `}
      </style>
      <div style={{ background: "#383838" }}>
        <Container
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "700px" }}>
            <div className="d-flex align-items-center justify-content-center w-100">
              {/* <img className="mb-4 w-100" src={logo} alt="" /> */}
            </div>
            {error && (
              <Alert
                variant="danger"
                className="d-flex align-items-center justify-content-center w-100"
              >
                {error}
              </Alert>
            )}
            {success && (
              <Alert
                variant="success"
                className="d-flex align-items-center justify-content-center w-100"
              >
                {success}
              </Alert>
            )}
            <div className="d-flex align-items-center justify-content-center w-100">
              <img src={Logo}></img>
            </div>

            <div className="d-flex align-items-center justify-content-center w-100 mb-5">
              <h4 style={{ color: "white" }}>
                Forgot your password? Reset it!
              </h4>
            </div>

            {/* <div className="d-flex align-items-center justify-content-center w-100">
            <h5>We'll Send You an Email</h5>
          </div> */}

            <Form.Group id="username" className=" mb-4">
              {" "}
              {/* email or username? */}
              <FloatingLabel controlId="floatingInput" label="Email">
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ borderColor: "#000000", borderRadius: "50px" }}
                  placeholder="Email"
                />
              </FloatingLabel>
            </Form.Group>

            <Button
              disabled={loading}
              variant="primary"
              className="w-100"
              type="submit"
              onClick={() => handleSubmit()}
              style={{ borderRadius: "50px" }}
            >
              Submit
            </Button>

            <div className="w-100 text-center mt-3">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <div className="me-1" style={{ color: "white" }}>
                  Already reset password?
                </div>
                <Link to="/login" style={{ color: "#007aad" }}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
