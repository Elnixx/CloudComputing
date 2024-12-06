import React, { useState } from "react";

function LoginPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Redirect or additional actions can be added here
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#2e2e3a" }}>
      <div style={{ width: "400px", padding: "85px", background: "#3d3d4d", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
        <h2 style={{ textAlign: "center", color: "#fff" }}>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <input type="checkbox" id="terms" style={{ marginRight: "10px" }} />
            <label htmlFor="terms" style={{ color: "#fff" }}>I agree to the Terms & Conditions</label>
          </div>
          <button type="submit" style={buttonStyle}>Create Account</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  background: "#6c63ff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

export default LoginPage;
