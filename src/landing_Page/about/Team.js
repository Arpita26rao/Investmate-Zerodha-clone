import React from "react";

function Team() {
  return (
    <div className="container">

      {/* HEADING */}
      <div className="row mt-5 pt-5 border-top">
        <div className="col text-center">
          <h2>People</h2>
        </div>
      </div>

      {/* CONTENT */}
      <div className="row mt-5 align-items-start">

        {/* LEFT: IMAGE */}
        <div className="col-md-4 text-center">
          <img
            src="media/images/nithinkamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle"
            style={{ width: "70%" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <p className="text-muted">Founder, CEO</p>
        </div>

        {/* RIGHT: TEXT */}
        <div
          className="col-md-8"
          style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
            he faced during his decade long stint as a trader. Today, Zerodha has
            changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p>
            Playing basketball is his zen.
          </p>

          <p>
            Connect on{" "}
            <a href="#" className="about-link">Homepage</a> /{" "}
            <a href="#" className="about-link">TradingQnA</a> /{" "}
            <a href="#" className="about-link">Twitter</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;
