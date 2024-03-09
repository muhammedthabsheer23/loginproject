import React from 'react'
import Sidenav from './Sidenav'
import Box from '@mui/material/Box';
import Navbar from './Navbar'
import{ Table } from 'react-bootstrap'
import { lightBlue } from '@mui/material/colors';
function Product() {
  return (
    <>  <Navbar/><br />
 <Box height={30}/> 
    <Box sx={{ display: 'flex' }}>    <>   <Sidenav/>
    <div style={{backgroundColor:lightBlue}}>
       <h1>product</h1><br />
       <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Product name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>twix</td>
          <td>20.00</td>
          <td>5.00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>bounty</td>
          <td>35.00</td>
          <td>2.00</td>
        </tr>
      
      </tbody>
    </Table>
   </div></>
    </Box>
    </>
  )
}

export default Product