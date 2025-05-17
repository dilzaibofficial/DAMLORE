import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: Code and Password
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSendCode = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      setStep(2); // Move to Step 2
      setError("");
      setSuccess("Verification code sent to your email.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send verification code.");
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/reset-password", {
        email,
        code,
        newPassword,
      });
      setSuccess("Password reset successfully. You can now log in.");
      setError("");
      setStep(1); // Reset to Step 1
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Typography variant="h4" gutterBottom>
        Forgot Password
      </Typography>
      <Box component="form" width="300px">
        {step === 1 && (
          <>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            {success && (
              <Typography color="success" variant="body2" sx={{ mt: 1 }}>
                {success}
              </Typography>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleSendCode}
            >
              Send Code
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <TextField
              fullWidth
              label="Verification Code"
              variant="outlined"
              margin="normal"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <TextField
              fullWidth
              label="New Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            {success && (
              <Typography color="success" variant="body2" sx={{ mt: 1 }}>
                {success}
              </Typography>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ForgotPassword;