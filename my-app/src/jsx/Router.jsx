import React from 'react'
import { BrowserRouter, Route, Routes } from   'react-router-dom'
import Login1 from './Login1'
import Signup1 from './Signup1'



function Router() {
  return (
    <div>
<BrowserRouter>
<Routes>
    <Route path="/" element={<><Login1/></>}/>
    <Route path="/signup" element={<><Signup1/></>}/>
</Routes>
</BrowserRouter>


    </div>
  )
}

export default Router