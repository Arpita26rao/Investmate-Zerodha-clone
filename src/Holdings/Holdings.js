import axios from "axios";
import { useEffect, useState } from "react";

function Holdings() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/holdings")
      .then(res => setHoldings(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>My Holdings</h2>

      {holdings.map((item, index) => (
        <div
          key={index}
          style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}
        >
          <h3>{item.stockName}</h3>
          <p>Quantity: {item.qty}</p>
        </div>
      ))}
    </div>
  );
}

export default Holdings;