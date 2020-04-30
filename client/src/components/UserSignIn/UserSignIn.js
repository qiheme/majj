import React, { useState } from "react";
import "./UserSignIn.css";
import { Modal, Button, Form } from "react-bootstrap";
import purplegem from "../../img/purplegem.png";

function UserSignIn() {
  const [signUp, setSignUp] = useState("");
  const [show, setShow] = useState(false);
  const [formObject, setFormObject] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Below two lines will manage user login state. if they want to sign up, this controls sign up form.
  // If they want to sign in, this controls sign in form.
  const handleSetSignUp = () => setSignUp("signup");
  const handleSetLogin = () => setSignUp("login");
  // const handleSignIn = setSignUp(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.password) {
      // some user login action here
    }
  }

  // can this conditional be dried up somehow?
  if (signUp === "signup") {
    // load this if the user wants to sign up
    return (
      <>
        <Button className="mod-btn" onClick={handleShow}>
          <i class="fas fa-user fa-2x"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Title className="mod-heading mod-head">
            <img
              src={purplegem}
              height="40px"
              width="40px"
              alt="gem"
              className="yellowgem"
            />
            MAJJ
            <div className="slogan">mining for gems on the web</div>
          </Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="fullname"
                  type="name"
                  placeholder="Enter Full Name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="username"
                  type="username"
                  placeholder="Enter Username"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form>
            Sign up here to start digging!
          </Modal.Body>
          <Modal.Footer>
            <Button className="mod-btn" onClick="">
              Register!
            </Button>
            <Button className="mod-btn" onClick={handleSetLogin}>
              Return to Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
    // return this if user wants to log in or hasn't clicked 'sign up'
    return (
      <>
        <Button className="mod-btn" onClick={handleShow}>
          <i class="fas fa-user fa-2x"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Title className="mod-heading mod-head">
            <img
              src={purplegem}
              height="40px"
              width="40px"
              alt="gem"
              className="yellowgem"
            />
            MAJJ
            <div className="slogan">mining for gems on the web</div>
          </Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="username"
                  type="username"
                  placeholder="Enter Username"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form>
            Never been here before? Click Sign Up to get started!
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="mod-btn"
              onClick={(handleClose, handleFormSubmit)}
            >
              Login
            </Button>
            <Button className="mod-btn" onClick={handleSetSignUp}>
              SignUp
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UserSignIn;
