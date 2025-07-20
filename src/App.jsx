import React from "react";

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import OffcanvasMenu from './compon/OffcanvasMenu';
import Footer from './compon/Footer';
 import Header from './compon/Header';
//import MainLayout from './compon/MainLayout';
import './App.css'
import './css/style.css';

import Home from './pages/Home';
import Service from './pages/Service';
import Shop from './pages/Shop';
import Blog from './pages/Blog';   
import About from './pages/About';
import BlogDetails from './pages/Blogdetails';
import Contact from './pages/Contact';
import ServiceDetails from './pages/Servicedetails';
import ShopDetails from './pages/Shopdetails';




function App() {
 
  return (
    <>
    <Header/>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />


        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ShopDetails" element={<ShopDetails />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/ServiceDetails" element={<ServiceDetails />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
     <Footer/>     

    </>
  )
}

export default App
