import React, { useState } from "react";
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const StatusManagement = () => {
  const [status, setStatus] = useState("SHOT");

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Status Management
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
    </Box>
  );
};

export default StatusManagement;