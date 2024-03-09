import React from 'react'
import Sidenav from './Sidenav'
import Box from '@mui/material/Box';
import Navbar from './Navbar'
function Category() {
  return (
    <>  <Navbar/><br />
    <Box height={30}/> 
    <Box sx={{ display: 'flex' }}>  <>    <Sidenav/>
    <div>
    <h1>category</h1>
   </div></>
    </Box>
    </>
    )
}

export default Category