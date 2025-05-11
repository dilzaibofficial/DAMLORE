import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
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
    }
  };

  return (
    <Box
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  height="100vh"
  bgcolor="background.default"
  px={2} // Add padding for smaller screens
>
  <Typography variant="h4" gutterBottom color="primary">
    Login
  </Typography>
  <Box component="form" width={{ xs: "100%", sm: "300px" }}>
    <TextField
      fullWidth
      label="Email or Username"
      variant="outlined"
      margin="normal"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <TextField
      fullWidth
      label="Password"
      type="password"
      variant="outlined"
      margin="normal"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    {error && (
      <Typography color="error" variant="body2" sx={{ mt: 1 }}>
        {error}
      </Typography>
    )}
    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 2 }}
      onClick={handleLogin}
    >
      Login
    </Button>
    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
      <Link to="/forgot-password" style={{ textDecoration: "none", color: "#1976d2" }}>
        Forgot Password?
      </Link>
    </Typography>
    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
      Don't have an account?{" "}
      <Link to="/signup" style={{ textDecoration: "none", color: "#1976d2" }}>
        Signup
      </Link>
    </Typography>
  </Box>
</Box>
  );
};

export default Login;