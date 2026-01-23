import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.js";
import HomePage from"./home/Homepage";
import AboutPage from "./landing_Page/About/AboutPage";
import Signup from "./signup/Signup";
import PricingPage from "./home/Pricing";
import SupportPage from "./support/SupportPage";
import ProductPage from "./products/ProductPage";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="Signup" element={<Signup/>}></Route>
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product"element={<ProductPage/>}/>
      <Route path="/support" element={<SupportPage />} />
    </Routes>
   
  </BrowserRouter>
);