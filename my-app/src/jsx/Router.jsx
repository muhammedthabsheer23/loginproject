import React from 'react'
import { BrowserRouter, Route, Routes } from   'react-router-dom'
import Login1 from './Login1'
import Signup1 from './Signup1'
import Sidenav from './Sidenav'
import Product from './Product'
import Category from './Category'
import Dashboard from './Dashboard'







function Router() {
  return (
    <div>
<BrowserRouter>
<Routes>
    <Route path="/" element={<><Login1/></>}/>
    <Route path="/signup" element={<><Signup1/></>}/>
    <Route path="admindashboard" element={<><Dashboard/></>}/>
    <Route path="/product" element={<><Product/></>}/>
    <Route path="/category" element={<><Category/></>}/>
</Routes>
</BrowserRouter>


    </div>
  )
}

export default Router