import React from 'react'
import { Button,Form, Col, Container, Row } from 'react-bootstrap'
import { FcGoogle } from "react-icons/fc";
import './Login1.css'
import { Link } from 'react-router-dom';
function Login1() {
  return (
    <div className='header'>
     <Container className='main'>
      <Row className='row1'>
    <Col className='col1'>
        <img className='login-image' src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" alt="" />
    </Col>
    <Col className='col2'>
    <Form className='forms' action="">
          <h1 >Log in</h1><br />
          <div className="input-box">
          <Form.Text className="p-user">
      Username
        </Form.Text>
            <input className='inputtext'
              type="text"
              required/>
        
          </div>
          <br />
          <div className="input-box" >
            <Form.Text className="p-password">
          Password
        </Form.Text>
            <input className='inputtext pas'
              type="password"
              required
            /> 
             </div><br />
            <Form.Label  className='label-loginbran'>Branches</Form.Label >
     
     <Form.Select className='login-option' aria-label="Default select example">
     <option hidden selected>Select one...</option>
     <option value="1">branch 1</option>
     <option value="2">branch 2</option>
     <option value="3">branch 3</option>
   </Form.Select>
         
          <br />
          <button className='login-button' type="submit">
            Login
          </button>
          </Form><br />
<hr />
<div >

 <a href='https://www.google.co.in/'className='login-social'> <img  src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" height={35} width={30}/></a>
 
 
 <a href='https://www.facebook.com/'className='login-social'><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImj5adg1sNvD0iCEQcjIGr-CZGuiX1or61w&usqp=CAU" alt="" height={35} width={35 }/></a>
 <a href='https://twitter.com/?lang=en'className='login-social'><img   src="https://cdn.iconscout.com/icon/free/png-256/free-twitter-241-721979.png?f=webp" alt="" height={30} width={30}/></a>


 </div>
 <br />

<h6 className='fonts'>Don't have an account yet?<Link className='sings' to={`signup`}>Sing up here</Link></h6>
    </Col>
      </Row>
    </Container>
  

    </div>
  )
}

export default Login1