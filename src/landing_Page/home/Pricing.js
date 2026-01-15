import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-md-6">
          <h2 className="mb-3">Unbeatable pricing</h2>

          <p className="text-muted">
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="text-primary fw-medium">
            See pricing →
          </a>
        </div>

        {/* RIGHT STATS */}
        <div className="col-md-6">
          <div className="row text-center">

            <div className="col-4">
              <h1 className="text-warning fw-bold">₹0</h1>
              <p className="small text-muted">Free account opening</p>
            </div>

            <div className="col-4">
              <h1 className="text-warning fw-bold">₹0</h1>
              <p className="small text-muted">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div className="col-4">
              <h1 className="text-warning fw-bold">₹20</h1>
              <p className="small text-muted">Intraday and F&amp;O</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
