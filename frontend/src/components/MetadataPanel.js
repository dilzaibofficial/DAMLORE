import React, { useState } from "react";
import { Box, TextField, Typography, Button, Card, CardContent } from "@mui/material";
import "./MetadataPanel.css";

const MetadataPanel = () => {
  const [metadata, setMetadata] = useState({
    sku: "",
    barcode: "",
    angles: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetadata({ ...metadata, [name]: value });
  };

  const handleSave = () => {
    // Placeholder for save logic
    console.log("Metadata Saved:", metadata);
  };

  return (
    <div className="metadata-panel-container">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1 className="title">Metadata Panel</h1>
        <p className="subtitle">Manage and update metadata for your assets</p>
      </div>

      {/* Metadata Form */}
      <Card className="metadata-form-card">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Enter Metadata Details
          </Typography>
          <Box component="form" display="flex" flexDirection="column" gap={2}>
            <TextField
              label="SKU"
              name="sku"
              variant="outlined"
              value={metadata.sku}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Barcode"
              name="barcode"
              variant="outlined"
              value={metadata.barcode}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Angles"
              name="angles"
              variant="outlined"
              value={metadata.angles}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Gender"
              name="gender"
              variant="outlined"
              value={metadata.gender}
              onChange={handleChange}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              className="save-button"
            >
              Save Metadata
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetadataPanel;