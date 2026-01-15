import React from "react";

function Stats() {
  return (
    <div className="container my-5">
      <div className="row align-items-start">

        {/* LEFT TEXT */}
        <div className="col-md-6">
          <h2>Trust with confidence</h2>

          <h5>Customer-first always</h5>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker.
          </p>

          <h5>No spam or gimmicks</h5>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
          </p>

          <h5>The Zerodha universe</h5>
          <p>
            Not just an app, but a whole ecosystem.
          </p>

          <h5>Do better with money</h5>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just facilitate
            transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* RIGHT IMAGE + LINKS */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />

          {/* LINKS */}
          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="text-primary fw-medium">
              Explore our products →
            </a>
            <a href="#" className="text-primary fw-medium">
              Try Kite demo →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
