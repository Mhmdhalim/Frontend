import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './style/main.css';
import './style/output.css';

import { CartProvider } from "./product/cartContext";


import Home from "./component/Home";
import Store from "./component/Store";
import About from "./component/About";
import Cart from "./product/Cart";

import Jewelery from "./services/Jewelery";
import Men from "./services/Men";
import Women from "./services/Women";
import Electronics from "./services/Electronics";

import CardPage from "./product/cardPage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/mens" element={<Men />} />
          <Route path="/womens" element={<Women />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/card-page" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}


export default App;
