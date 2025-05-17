import React, { useState } from "react";
import { Button, Box, Typography, Card, CardContent } from "@mui/material";
import { FaUpload, FaFolderOpen, FaTrashAlt } from "react-icons/fa";
import "./UploadImages.css";

const UploadImages = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleUpload = () => {
    console.log("Uploading files:", selectedFiles);
    // Placeholder for upload logic
  };

  const handleClear = () => {
    setSelectedFiles([]);
  };

  return (
    <div className="upload-images-container">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1 className="title">Upload Images</h1>
        <p className="subtitle">Easily upload and manage your photography assets</p>
      </div>

      {/* Upload Section */}
      <div className="upload-section">
        <Typography variant="h6" gutterBottom>
          Select Files to Upload
        </Typography>
        <input
          type="file"
          multiple
          onChange={handleFileSelect}
          className="file-input"
        />
        <div className="button-group">
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaUpload />}
            onClick={handleUpload}
            disabled={selectedFiles.length === 0}
          >
            Upload Files
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<FaTrashAlt />}
            onClick={handleClear}
            disabled={selectedFiles.length === 0}
          >
            Clear Selection
          </Button>
        </div>
      </div>

      {/* Selected Files Section */}
      {selectedFiles.length > 0 && (
        <div className="selected-files">
          <Typography variant="h6" gutterBottom>
            Selected Files
          </Typography>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Additional Actions */}
      <div className="additional-actions">
        <Card className="action-card">
          <CardContent>
            <FaFolderOpen className="action-icon" />
            <Typography variant="h6">Browse Files</Typography>
            <Typography variant="body2">View and manage uploaded files</Typography>
          </CardContent>
        </Card>
        <Card className="action-card">
          <CardContent>
            <FaTrashAlt className="action-icon" />
            <Typography variant="h6">Delete Files</Typography>
            <Typography variant="body2">Remove unwanted files</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadImages;