// ALL CURRENT HTML NEEDS TO BE A ENTIRELY DIFF FUNCTIONAL COMONENT (NAV BAR and IMAGE GENERATION) FOR CLEANER CODE
import React, { useEffect, useState } from 'react';
import {
  Form, Button, FloatingLabel, Container, Nav, NavDropdown
} from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";
import { useNavigate} from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';
export default function Homepage() {
    // Set states here
    const [img_desc, setImageDesc] = useState()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { currentUser } = useAuth();
     const navigate = useNavigate()
    useEffect(() => {
    if (currentUser) {
      try {
        //await info from frontend
      } catch (error) {
        console.log(error);
      }
    }else{
       navigate("/login")
    }
  }, []);

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

     
<NavigationBar/>
    {/* Generate Image  */}
    <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: '50vh' }}
      >
        <div className="w-100" style={{ maxWidth: '700px' }}>

          <div className="d-flex align-items-center justify-content-center w-100">
            <h2>Image Generator</h2>
          </div>

          <div className="d-flex align-items-center justify-content-center w-100">
            <h6>Type a description of the image that you want. Be as creative as you can!</h6>
          </div>

          <Form.Group id="password" className="mb-4">
           
            <FloatingLabel controlId="floatingInput" label="Description">
              <Form.Control
                type="img_desc"
                value={img_desc}
                onChange={(e) => setImageDesc(e.target.value)}
                required
                style={{ borderColor: '#000000' }}
                placeholder="Description"
              />
            </FloatingLabel>
          </Form.Group>

          <Button
            disabled={loading}
            variant="primary"
            className="w-100"
            type="submit"
            onClick={() => handleSubmit()} 
          >
            Let's Make Magic!
          </Button>
           

        </div>
      </Container>
    </>
  );
}




