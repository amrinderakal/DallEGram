import React, { useState } from "react";
import {
  Form,
  Button,
  Alert,
  FloatingLabel,
  Container,
  Toast,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDatabase } from "../../context/DatabaseContext";
import Logo from "../../assets/dallegramlogo5.png";

export default function CreateUser() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, login, uid } = useAuth();
  const { addUser, checkUsernameExists } = useDatabase();

  const nav = useNavigate();

  // Creates and error response to display
  const createErrorResponse = (err) => {
    const res = err.code;
    switch (res) {
      case "auth/weak-password":
        setError("Password should be at least 6 characters");
        break;
      case "auth/email-already-in-use":
        setError("Account with this email already in use");
        break;
      default:
        setError(JSON.stringify(err));
    }
  };

  // Creates a user when the submit button is clicked
  async function handleSubmit(e) {
    //e.preventDefault();

    try {
      setError("");
      setSuccess("");
      setLoading(true);

      // Check if the username already exists in the backend
      const existingUser = await checkUsernameExists(username);
      if (existingUser) {
        setError(
          "Username already exists. Please choose a different username."
        );
        setLoading(false);
        return;
      }

      // If the username doesn't exist, proceed with account creation
      await signup(email, password);
      addUser(firstName, lastName, "", email, username);
      setSuccess("Account Created!");
      nav("/account-created");
    } catch (err) {
      console.error(err);
      createErrorResponse(err);
    }

    setLoading(false);
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
          h3 {
            color: black;
            font-size: 1.5rem;
          }
          img {
            width: 250px;
          }
          .create-box {
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            margin: auto;
            color: black;
          }
          .form-control {
            color: black !important;
          }
          .btn {
            color: white;
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
            <div className="create-box">
              <div className="d-flex align-items-center justify-content-center w-100">
                <h3>Create your account to start creating!</h3>
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

              <Form.Group id="firstName" className=" mb-4">
                <FloatingLabel controlId="floatingInput" label="First Name">
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    style={{ borderColor: "#000000", borderRadius: "" }}
                    placeholder="First Name"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group id="lastName" className=" mb-4">
                <FloatingLabel controlId="floatingInput" label="Last Name">
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    style={{ borderColor: "#000000", borderRadius: "" }}
                    placeholder="Last Name"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group id="username" className=" mb-4">
                <FloatingLabel controlId="floatingInput" label="Username">
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ borderColor: "#000000", borderRadius: "" }}
                    placeholder="Username"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group id="email" className=" mb-4">
                <FloatingLabel controlId="floatingInput" label="Email">
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ borderColor: "#000000", borderRadius: "" }}
                    placeholder="Email"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group id="password" className="mb-4">
                <FloatingLabel controlId="floatingInput" label="Password">
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ borderColor: "#000000", borderRadius: "" }}
                    placeholder="Password"
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
                Create Account
              </Button>

              <div className="w-100 text-center mt-3">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <div className="me-1">Already have an account?</div>
                  <Link to="/login" style={{ color: "#007aad" }}>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
