import React, { useState } from "react";
import { Form, Button, Alert, FloatingLabel, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../assets/dallegramlogo5.png";

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
          .btn-primary:hover {
            background-color: #005071;
            color: white;
          }
          h5 {
            font-size: 1.5rem;
          }
          img {
            width: 250px; 
          }
          .reset-box {
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            margin: auto;
          }
        `}
      </style>
      <div style={{ background: "#FAF9F6" }}>
        <Container
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "700px" }}>
            <div className="d-flex align-items-center justify-content-center w-100">
              <img src={Logo} alt="Dallegram Logo" />
            </div>

            <div className="reset-box">
              <div className="d-flex align-items-center justify-content-center w-100 mb-5">
                <h5>Forgot your password? Reset it!</h5>
              </div>

              {error && (
                <Alert variant="danger" className="w-100">
                  {error}
                </Alert>
              )}
              {success && (
                <Alert variant="success" className="w-100">
                  {success}
                </Alert>
              )}

              <Form.Group id="username" className=" mb-4">
                <FloatingLabel controlId="floatingInput" label="Email">
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                  />
                </FloatingLabel>
              </Form.Group>

              <Button
                disabled={loading}
                variant="primary"
                className="w-100"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>

              <div className="w-100 text-center mt-3">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <div className="me-1">Already reset password?</div>
                  <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
