import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./home/Homepage";
import AboutPage from "./landing_Page/About/AboutPage";
import Signup from "./signup/Signup";
import SupportPage from "./support/SupportPage";
import ProductPage from "./products/ProductPage";
import PricingPage from "./pricing/PricingPage";
import Holdings from "./Holdings/Holdings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;