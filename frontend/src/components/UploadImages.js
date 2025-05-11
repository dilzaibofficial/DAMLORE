import React from "react";
import { Button, Box, Typography } from "@mui/material";

const UploadImages = () => {
  const handleUpload = () => {
    // Placeholder for upload logic
    console.log("Upload Images Clicked");
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Upload Images
      </Typography>
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload from File
      </Button>
    </Box>
  );
};

export default UploadImages;