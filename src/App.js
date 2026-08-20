import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./home/Homepage";
import AboutPage from "./landing_Page/about/AboutPage";
import Signup from "./signup/Signup";
import Support from "./support/SupportPage";
import Products from "./products/ProductPage";
import PricingPage from "./pricing/PricingPage";
import Holdings from "./Holdings/Holdings";
import Dashboard from "./Dashboard";
import Login from "./login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;