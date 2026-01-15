import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">

        {/* LOGO */}
        <NavLink className="navbar-brand fw-bold" to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha"
            style={{ height: "20px" }}
          />
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#zerodhaNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="zerodhaNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">

            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

             <li className="nav-item">
              <NavLink className="nav-link" to="/Products">
                Products
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/support">
                Support
              </NavLink>
            </li>

            {/* HAMBURGER ICON */}
            <li className="nav-item d-none d-lg-block">
              <NavLink className="nav-link fs-4" to="/">
                ☰
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
