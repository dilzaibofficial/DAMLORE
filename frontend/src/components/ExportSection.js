import React, { useState } from "react";
import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const ExportSection = () => {
  const [exportFormat, setExportFormat] = useState("CSV");
  const [selectedImages, setSelectedImages] = useState([
    { id: 1, name: "Image1.jpg", status: "READY" },
    { id: 2, name: "Image2.jpg", status: "APPROVED" },
  ]);

  const handleExport = () => {
    // Placeholder for export logic
    console.log("Exporting in format:", exportFormat);
    console.log("Selected Images:", selectedImages);
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Export Section
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Export Format</InputLabel>
        <Select value={exportFormat} onChange={(e) => setExportFormat(e.target.value)}>
          <MenuItem value="CSV">CSV</MenuItem>
          <MenuItem value="Excel">Excel</MenuItem>
        </Select>
      </FormControl>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image Name</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedImages.map((image) => (
            <TableRow key={image.id}>
              <TableCell>{image.name}</TableCell>
              <TableCell>{image.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleExport}>
        Export
      </Button>
    </Box>
  );
};

export default ExportSection;