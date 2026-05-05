import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/holdings")
      .then(res => {
        setHoldings(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Holdings</h2>
      {holdings.map((item, index) => (
        <div key={index}>
          <p>{item.stockName} - {item.qty}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;