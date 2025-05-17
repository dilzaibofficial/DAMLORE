import React, { useState } from "react";
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Card, CardContent } from "@mui/material";
import "./StatusManagement.css";

const StatusManagement = () => {
  const [status, setStatus] = useState("SHOT");

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="status-management-container">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1 className="title">Status Management</h1>
        <p className="subtitle">Update and manage the status of your assets</p>
      </div>

      {/* Status Dropdown */}
      <Card className="status-card">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Select Asset Status
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select value={status} onChange={handleChange}>
              <MenuItem value="SHOT">SHOT</MenuItem>
              <MenuItem value="IN PROGRESS">IN PROGRESS</MenuItem>
              <MenuItem value="READY">READY</MenuItem>
              <MenuItem value="APPROVED">APPROVED</MenuItem>
              <MenuItem value="DELIVERY">DELIVERY</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusManagement;