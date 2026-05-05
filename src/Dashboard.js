import React, { useEffect } from "react";

function Dashboard() {

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔒 protect route
    if (!token) {
      window.location.href = "/";
    }

    // 🔗 call backend
    fetch("http://localhost:5000/api/auth/dashboard", {
      headers: {
        Authorization: token
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Dashboard</h2>
      <p>You are logged in 🎉</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
useEffect(() => {
  const token = localStorage.getItem("token");

  fetch("http://localhost:5000/api/auth/dashboard", {
    headers: {
      Authorization: token
    }
  })
  .then(res => res.json())
  .then(data => console.log(data));
}, []);

export default Dashboard;