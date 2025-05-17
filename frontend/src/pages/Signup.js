import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Reuse the same CSS as Login

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      // Redirect to login page after successful signup
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const images = Array.from({ length: 9 }, (_, i) => require(`../assets/img${i + 1}.jpg`));

  return (
    <div className="container">
      <div className="left">
        <div className="grid">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`grid-${index}`} />
          ))}
        </div>
        <div className="overlay">
          <h1>Photography Admin</h1>
          <h2>Asset Management System</h2>
          <p>
            Manage your photography assets with our powerful digital asset management system.
            Streamline your workflow and collaborate with your team in real-time.
          </p>
          <div className="feature">
            <span role="img" aria-label="camera">📷</span> Powered by advanced image processing
          </div>
        </div>
      </div>
      <div className="right">
        <div className="form-box">
          <div className="icon-circle">📷</div>
          <h2>Create an Account</h2>
          <p>Sign up to get started</p>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSignup}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>
          <p className="register">
            Already have an account?{" "}
            <a href="/" className="text-blue-500 hover:text-blue-600">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;