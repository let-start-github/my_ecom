import { useState } from 'react'
import Product from './pages/product'
import  './App.css'
import Navbarshow from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/cart';


function App() {
  let name="aru"

  return (
  
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/product/:id" element={<Product/>}></Route>
    </Routes>
    </>
  )
}



export default App

