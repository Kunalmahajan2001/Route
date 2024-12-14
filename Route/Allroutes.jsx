import React from 'react'
import { Route, Routes } from 'react-router'
import Product from '../src/Compoents/Product'
import Allproduct from '../src/Compoents/Allproduct'
import Home from '../src/Compoents/Home'
import Login from '../src/Compoents/Login'

import Description from '../src/Compoents/Description'

const Allroutes = () => {
  return (
    <div>
    <Routes>

     <Route path='/description/:id' element={<Description/>}></Route>
    <Route path='Home/' element ={

       <Home/>
  
    
    }>Home</Route>
    <Route path='Product/' element ={


  
      <Product/>
    }>Product</Route>
    <Route path='Allproduct/' element ={
      
      
        <Allproduct/>
     
    }>Allproduct</Route>
    <Route path='Login/' element ={
       
        <Login/>
       
    }>Login</Route>
      
    </Routes>
      
    </div>
  )
}

export default Allroutes