import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// landing page
import Homepage from "./landing_Page/home/Homepage";
import Signup from "./signup/Signup";

import SupportPage from "./Support/SupportPage";
import ProductPage from"./Products/ProductPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./landing_Page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/support" element={<SupportPage />} />
      <Route path="/Product" element={<ProductPage />} />
      <Route path="/in" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
