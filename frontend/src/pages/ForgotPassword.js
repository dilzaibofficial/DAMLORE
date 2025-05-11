import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    // Placeholder for forgot password logic
    console.log("Forgot Password Email:", email);
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
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleForgotPassword}
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPassword;