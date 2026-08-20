import React, { useEffect } from "react";

function Dashboard() {

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Protect Route
    if (!token) {
      window.location.href = "/login";
      return;
    }

    // Backend API
    fetch("http://localhost:5000/api/auth/dashboard", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Dashboard</h2>
      <p>You are logged in 🎉</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;