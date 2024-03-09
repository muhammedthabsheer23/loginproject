import React, { useState } from 'react';
import { Button, Form, Col, Container, Row, Modal } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import eye icons
import './Login1.css';
import { Link, useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { Select } from '@mui/material';


function Login1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
});

const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
};

const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
    setValues({
        ...values,
        [prop]: event.target.value,
    });
};

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      navigate(`/admindashboard`);
    } else if (username === 'user' && password === '111') {
      navigate(`/userdashboard`);
    } else {
      alert('Invalid password or username');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='login-header'>
      <Container className='login-header1'>
        <Row>
          <Col>
            <div className="main">
              <div className="login-imgheader">
                <img className='login-image' src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" alt="" />
              </div>
              <div className="login-form">
                <h1>LOGIN</h1><br />
                <Form.Label className='login-userlabel' >USERNAME</Form.Label>
                <FormControl  >
    <TextField className='login-input'
    size="small"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        
       
    />
</FormControl>
                <Form.Label className='login-userlabel' htmlFor="inputPassword5">PASSWORD</Form.Label>
                <FormControl  >
    <TextField className='login-input'
    size="small"
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            )
        }}
    />
</FormControl>
<FormControl  sx={{ m: 0,ml:4, width: 350 }}>
<Form.Label className='login-branchlabel' htmlFor="inputPassword5">Branches</Form.Label>
        <Select  
        fullWidth
        size="small"
        >
          
                        <option value="1">branch1</option>
                        <option value="2">branch2</option>
                        <option value="3">branch3</option>

        </Select>
      </FormControl>
                <button className='login-button' onClick={handleLogin} type="submit">
                  Login
                </button>
                <hr />
                <div>
                  <a href='https://www.google.co.in/' className='login-social'> <img src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" height={35} width={30} /></a>
                  <a href='https://www.facebook.com/' className='login-social'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImj5adg1sNvD0iCEQcjIGr-CZGuiX1or61w&usqp=CAU" alt="" height={35} width={35} /></a>
                  <a href='https://twitter.com/?lang=en' className='login-social'><img src="https://cdn.iconscout.com/icon/free/png-256/free-twitter-241-721979.png?f=webp" alt="" height={30} width={30} /></a>
                </div><br />
                <Link><h6 className='fonts' onClick={handleShow}>Don't have an account yet?Sing up here</h6></Link>
                <Modal
                  aria-labelledby="contained-modal-title-vcenter"
                  centered show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className='modaltitl'><h2>Signup Here !!</h2></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='modaltitl'>Username</Form.Label>
                        <Form.Control
                          type="text"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Label className='modaltitl'>Password</Form.Label><br/>

<FormControl className='inputshow' fullWidth>
    <TextField
    size="small"
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            )
        }}
    />
</FormControl>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='modaltitl'>Confirm password</Form.Label>
                        <Form.Control
                          type="password"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Label className='modaltitl'>Branches</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Select branch..</option>
                        <option value="1">branch1</option>
                        <option value="2">branch2</option>
                        <option value="3">branch3</option>
                      </Form.Select>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer className='modalfoot'>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login1;
