import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const { token, role } = response.data;

      // Save token and role to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      // Redirect based on role
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
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
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="forgot">
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="register">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:text-blue-600">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;