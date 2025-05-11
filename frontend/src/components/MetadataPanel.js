import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

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
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Metadata Panel
      </Typography>
      <Box component="form" display="flex" flexDirection="column" gap={2}>
        <TextField
          label="SKU"
          name="sku"
          variant="outlined"
          value={metadata.sku}
          onChange={handleChange}
        />
        <TextField
          label="Barcode"
          name="barcode"
          variant="outlined"
          value={metadata.barcode}
          onChange={handleChange}
        />
        <TextField
          label="Angles"
          name="angles"
          variant="outlined"
          value={metadata.angles}
          onChange={handleChange}
        />
        <TextField
          label="Gender"
          name="gender"
          variant="outlined"
          value={metadata.gender}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Metadata
        </Button>
      </Box>
    </Box>
  );
};

export default MetadataPanel;