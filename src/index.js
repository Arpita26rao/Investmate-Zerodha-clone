import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.js";

import HomePage from "./home/Homepage.js";
import AboutPage from "./landing_Page/About/AboutPage.js";
import Signup from "./signup/Signup.js";
import SupportPage from "./support/SupportPage.js";
import ProductPage from "./products/ProductPage.js";
import PricingPage from "./pricing/PricingPage.js";
import Holdings from "./Holdings/Holdings.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/Holdings" element={<Holdings />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
  </BrowserRouter>
);