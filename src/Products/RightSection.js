function RightSection() {
  return (
    <section style={{ padding: "60px 0", background: "#f9f9f9" }}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h2>Console</h2>
            <p>
              The central dashboard for your Zerodha account. Gain insights into
              your trades and investments.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="media/images/console.png"
              alt="console"
              style={{ width: "100%" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default RightSection;
