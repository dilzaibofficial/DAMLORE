import React, { useState } from "react";
import { Box, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const ShootingListManagement = () => {
  const [shootingList, setShootingList] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    // Placeholder logic for parsing CSV/Excel
    const dummyData = [
      { id: 1, barcode: "123456", sku: "SKU001", status: "Not Arrived" },
      { id: 2, barcode: "789012", sku: "SKU002", status: "Arrived" },
    ];
    setShootingList(dummyData);
  };

  const handleStatusChange = (id) => {
    setShootingList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, status: item.status === "Arrived" ? "Not Arrived" : "Arrived" } : item
      )
    );
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Shooting List Management
      </Typography>
      <Button variant="contained" component="label" color="primary">
        Upload Shooting List
        <input type="file" hidden onChange={handleFileUpload} />
      </Button>
      {fileName && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          Uploaded File: {fileName}
        </Typography>
      )}
      <Box mt={4}>
        <Typography variant="h6">Shooting List</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Barcode</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shootingList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.barcode}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color={item.status === "Arrived" ? "success" : "warning"}
                    onClick={() => handleStatusChange(item.id)}
                  >
                    {item.status === "Arrived" ? "Mark Not Arrived" : "Mark Arrived"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default ShootingListManagement;