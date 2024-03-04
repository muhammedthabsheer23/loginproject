import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Signup1.css'
function Signup1() {
  return (
    <div className='signup-header'>
      
    <Container className='signup-header1'>
    <Row>
      <Col>
 <div className='signupheader'>
  <h1>signup</h1><br /><br />
  <div className="signup-form">
  <Form.Label  className='signup-userlabel'>USERNAME</Form.Label>
    <Form.Control className='signup-input'
      type="text"
      id="inputPassword5"
      aria-describedby="passwordHelpBlock"
    />
    </div><br />
    <div className="signup-form">
  <Form.Label  className='signup-userlabel'>PASSWORD</Form.Label>
    <Form.Control className='signup-input'
      type="password"
      id="inputPassword5"
      aria-describedby="passwordHelpBlock"
    />
    </div><br />
    <div className="signup-form">
  <Form.Label  className='signup-confirmlabel'>CONFIRMPASSWORD</Form.Label>
    <Form.Control className='signup-inputconfirm'
      type="password"
      id="inputPassword5"
      aria-describedby="passwordHelpBlock"
    />
    </div><br />
    <div className="signup-form">
    <Form.Label className='signup-branchlabel' htmlFor="inputPassword5">BRANCH</Form.Label>
     <Form.Select className='signup-option' aria-label="Default select example">
   <option hidden selected>Select one...</option>
   <option value="1">branch 1</option>
   <option value="2">branch 2</option>
   <option value="3">branch 3</option>
 </Form.Select>
 </div><br />
 <button className='login-button' type="submit">
          Login
        </button>
 </div>
       
    
</Col>  </Row>
  </Container>
  </div>
  )
}

export default Signup1