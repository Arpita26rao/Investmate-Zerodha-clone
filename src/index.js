import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./home/Homepage";
import AboutPage from "./landing_Page/About/AboutPage";
import Signup from "./signup/Signup";
import SupportPage from "./support/SupportPage";
import ProductPage from "./products/ProductPage";

import PricingPage from "./pricing/PricingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
  </BrowserRouter>
);
