import React from "react";


function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="product-section">
      <div className="product-container">
        {/* LEFT IMAGE */}
        <div className="product-image">
          <img src={imageURL} alt={productName} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="product-content">
          <h2>{productName}</h2>
          <p>{productDesription}</p>

          <div className="product-links">
            {tryDemo && <a href={tryDemo}>Try demo →</a>}
            {learnMore && <a href={learnMore}>Learn more →</a>}
          </div>

          <div className="store-buttons">
            {googlePlay && (
              <img src={googlePlay} alt="Google Play" />
            )}
            {appStore && (
              <img src={appStore} alt="App Store" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
