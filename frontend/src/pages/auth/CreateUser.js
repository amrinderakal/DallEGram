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
import Logo from "../../assets/dallegramLogo.png";

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
  const { addUser } = useDatabase();

  const nav = useNavigate();
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

  async function handleSubmit(e) {
    //e.preventDefault();
  
    try {
      setError("");
      setSuccess("");
      setLoading(true);
  
      // Check if the username already exists in the backend
      const existingUser = await checkUsernameExists(username);
      if (existingUser) {
        setError("Username already exists. Please choose a different username.");
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
  
  async function checkUsernameExists(username) {
    const response = await fetch(`http://localhost:8000/check_username/${username}`);
    const data = await response.json();
    return data.exists;
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
            <div
              className="d-flex align-items-center justify-content-center w-100"
              style={{ color: "white" }}
            >
              <h3>Create you account to start creating!</h3>
            </div>

            <Form.Group id="firstName" className=" mb-4">
              <FloatingLabel controlId="floatingInput" label="First Name">
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={{ borderColor: "#000000", borderRadius: "50px" }}
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
                  style={{ borderColor: "#000000", borderRadius: "50px" }}
                  placeholder="Last Name"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group id="username" className=" mb-4">
              {" "}
              {/* email or username? */}
              <FloatingLabel controlId="floatingInput" label="Username">
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={{ borderColor: "#000000", borderRadius: "50px" }}
                  placeholder="Email"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group id="email" className=" mb-4">
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

            <Form.Group id="password" className="mb-4">
              <FloatingLabel controlId="floatingInput" label="Password">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ borderColor: "#000000", borderRadius: "50px" }}
                  placeholder="Password"
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
              Create Account
            </Button>
            {/* Should redirect to a success page & then login  */}
            <div className="w-100 text-center mt-3">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <div className="me-1" style={{ color: "white" }}>
                  Already have an account?
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
