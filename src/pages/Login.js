// src/components/LoginForm/LoginForm.jsx

import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../context/AuthProvider";
// import './LoginForm.module.scss';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useContext(AuthContext);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("your-url-here", {
  //       method: "POST", // Specify the HTTP method
  //       headers: {
  //         "Content-Type": "application/json", // Set the content type to JSON
  //       },
  //       body: JSON.stringify({
  //         email, // Include the email and password in the request body
  //         password,
  //       }),
  //     });

  //     // Check if the response is successful
  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }

  //     const data = await response.json(); 
  //     console.log(data); 
  //     const accessToken = "get from data"
  //     const roles = "get from data"
  //     setAuth({user,password, roles,accessToken})
  //     setEmail("");
  //     setPassword("");
  //   } catch (error) {
  //     if(!error.response){
  //       setErrorMsg("no server response")
  //     }else if(error.response.status === 400){
  //       setErrorMsg("missing username or password")
  //     }else if(error.response.status === 401){
  //       setErrorMsg("unauthorized")
  //     }else {
  //       setErrorMsg("login failed")
  //     }
  //   }
  // };

  function handleSubmit(){}
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
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
