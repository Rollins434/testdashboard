// src/components/LoginForm/LoginForm.jsx

import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import './LoginForm.module.scss';

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";



  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "johndoe123" && password === "Temp@7890") {
      setAuth({ user: "John Doe", role: "admin" });
    } else if (username === "emilysmith56" && password === "Pass@1234") {
      setAuth({ user: "Emily Smith", role: "verizon employee" });
    } else if (username === "mikebrown22" && password === "Quick#5678") {
      setAuth({ user: "Michael Brown", role: "non verizon employee" });
    } else {
      setAuth({ user: null, role: null });
      alert("Invalid credentials!");
      return;
    }

    navigate(from, { replace: true });
  };
  
  /* const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(process.env.REACT_APP_LOGIN_URL, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          email, 
          password,
        }),
      });
  
      // Check if the response is successful
      if (!response.ok) {
        if (response.status === 400) {
          setErrorMsg("Missing username or password");
        } else if (response.status === 401) {
          setErrorMsg("Unauthorized");
        } else {
          setErrorMsg("Login failed");
        }
        return;
      }
  
      const data = await response.json();
      const accessToken = data.accessToken || ""; // Get accessToken from response data
      const roles = data.roles || []; // Get roles from response data
  
      setAuth({ user: email, roles, accessToken });
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
  
    } catch (error) {
      if (!error.response) {
        setErrorMsg("No server response");
      } else {
        setErrorMsg("Login failed");
      }
    }
  }; */
  
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100"
    >
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-4">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
