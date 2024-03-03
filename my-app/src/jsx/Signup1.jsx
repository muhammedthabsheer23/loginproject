import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Signup1.css'
function Signup1() {
  return (
    <div className='signup-header'>
      <div className='mainsignup'>
        <h1>Signup</h1>
  <Form className='signup-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-signupuser'>Username </Form.Label>
        <input className='inputtext'
              type="text"
              required/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-signuppas'> Password</Form.Label>
        <input className='inputtext'
              type="text"
              required/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-signupconf'> Confirm Password</Form.Label>
        <input className='inputtext'
              type="text"
              required/>
      </Form.Group>
      <div className="signup-inputtext">
      <Form.Label  className='label-signupbran'>Branches</Form.Label >
     <Form.Select className='signup-option' aria-label="Default select example">
     <option hidden selected>Select one...</option>
     <option value="1">branch 1</option>
     <option value="2">branch 2</option>
     <option value="3">branch 3</option>
   </Form.Select>
   </div>
   </Form>
      
          <button className='signup-button' type="submit">
            signup
          </button>
  
    </div>
    </div>
  )
}

export default Signup1